import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home  from "./content/Home"
import Article from "./content/Article"
import Topics from "./content/Topics"
import Articles from "./content/Articles";
import Users from "./content/Users";
import User from './content/User'
import NewArticle from "./content/NewArticle";
import NewTopic from './content/NewTopic'
import { getVotes } from "../utils/api";

const Content = ({ appUser }) => {

    const [topics, setTopics] = useState([])
    const [voteHistory, setVoteHistory] = useState([])

    useEffect(() => {
      getVotes(appUser).then(({ articles, comments }) => {
        let allVotes = comments.map(comment => {
            return { comment_id: comment.comment_id, up: comment.up }})
        .concat(
            articles.map(article => { 
                return { article_id: article.article_id, up: article.up }}))
        setVoteHistory(allVotes)
      })
    }, [appUser])
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser}/>
                </Route>
                <Route exact path="/articles/write">
                    <NewArticle topics={topics} setTopics={setTopics} appUser={appUser}/>
                </Route>
                <Route exact path="/articles/:article_id">
                    <Article voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} />
                </Route>
                <Route exact path="/articles">
                    <Articles voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser} />
                </Route>
                <Route exact path="/topics">
                    <Topics topics={topics} setTopics={setTopics}/>
                </Route>
                <Route exact path="/topics/new">
                    <NewTopic />
                </Route>
                <Route exact path="/users/:username">
                    <User voteHistory={voteHistory} setVoteHistory={setVoteHistory} appUser={appUser}/>
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
            </Switch>
        </main>
    );
};

export default Content;