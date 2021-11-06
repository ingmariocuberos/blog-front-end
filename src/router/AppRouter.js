import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { login } from "../actions/login";
import { PrincipalBlogScreen } from "../components/blog/PrincipalBlogScreen";
import { AuthRouter } from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { email, token } = useSelector(state => state.auth);
    const tokenLocal = localStorage.getItem("token");
    const emailLocal = localStorage.getItem("email"); 
    
    useEffect(() => {
        if(tokenLocal){
            setIsLoggedIn(true);
            dispatch( login(emailLocal, tokenLocal));
        } else if(token){
            setIsLoggedIn(true);
            localStorage.setItem("token", token);
            localStorage.setItem("email", email);
        } else {
            setIsLoggedIn(false);
        }
    }, [token])

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
