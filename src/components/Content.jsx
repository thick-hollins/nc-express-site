import { Switch, Route } from "react-router-dom";
import Home  from "./content/Home"
import Article from "./content/Article"
import Topics from "./content/Topics"
import Articles from "./content/Articles";
import Users from "./content/Users";
import User from './content/User'
import NewArticle from "./content/NewArticle";

const Content = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/articles/write">
                    <NewArticle />
                </Route>
                <Route exact path="/articles/:article_id">
                    <Article />
                </Route>
                <Route exact path="/articles">
                    <Articles />
                </Route>
                <Route exact path="/topics">
                    <Topics />
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