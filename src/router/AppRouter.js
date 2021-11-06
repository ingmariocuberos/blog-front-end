import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { PrincipalBlogScreen } from "../components/blog/PrincipalBlogScreen";
import { AuthRouter } from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);   
        

    if(isLoading){
        return (
            <h1>Espere por favor...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAutenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />
                    <PrivateRoute
                        isAutenticated={isLoggedIn}
                        exact
                        path="/"
                        component={PrincipalBlogScreen}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
