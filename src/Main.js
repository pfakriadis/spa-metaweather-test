import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import MainView from "./MainView";

function Main({search}) {

    return (
        <Switch>
            <Route path="/">
                <MainView search={search} />
            </Route> 
        </Switch>
    );
}

export default Main;
