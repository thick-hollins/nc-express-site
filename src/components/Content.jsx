import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home  from "./content/Home"
import Article from "./content/Article"
import Topics from "./content/Topics"
import Articles from "./content/Articles";
import Users from "./content/Users";
import User from './content/User'
import NewArticle from "./content/NewArticle";

const Content = ({ appUser }) => {
    const [topics, setTopics] = useState([])
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home appUser={appUser} />
                </Route>
                <Route exact path="/articles/write">
                    <NewArticle topics={topics} setTopics={setTopics} appUser={appUser}/>
                </Route>
                <Route exact path="/articles/:article_id">
                    <Article appUser={appUser} />
                </Route>
                <Route exact path="/articles">
                    <Articles />
                </Route>
                <Route exact path="/topics">
                    <Topics topics={topics} setTopics={setTopics}/>
                </Route>
                <Route exact path="/users/:username">
                    <User />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
            </Switch>
        </main>
    );
};

export default Content;