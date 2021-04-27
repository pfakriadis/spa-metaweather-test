import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import MainView from "./MainView";

function Main() {

    return (
        <Switch>
            <Route path="/">
                <MainView />
            </Route> 
        </Switch>
    );
}

export default Main;
