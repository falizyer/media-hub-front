import * as React from "react";
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {ApplicationComponent} from "./application.component";
import {AppStore} from "./redux/app.store";


ReactDOM.render(
    <Provider store={AppStore}>
        <HashRouter>
            <ApplicationComponent/>
        </HashRouter>
    </Provider>
    , document.getElementById("app"));