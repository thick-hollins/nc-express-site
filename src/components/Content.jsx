import { Switch, Route } from "react-router-dom";
import Home  from "./content/Home"

const Content = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
};

export default Content;