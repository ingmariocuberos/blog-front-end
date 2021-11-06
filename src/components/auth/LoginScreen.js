import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import v from "validator";
import { removeError, setError } from "../../actions/error";
import { loginWithEmailAndPassWord } from "../../actions/login";

export const LoginScreen = () => {
    const initialForm = {
        email: "undefined@gmail.com",
        password: "123456",
    };

    const [formValues, handleInputChange] = useForm(initialForm);

    const { email, password } = formValues;

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.auth);

    const valida = ( email, password ) =>{

        if( !v.isEmail(email)){
            dispatch( setError( 'Email incorrecto' ) );
            return false;
        } else if( v.isEmpty(password) ){
            dispatch( setError( 'Password incorrecto' ) );
            return false;
        }

        dispatch( removeError());
        return true;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Hola mundo");

        if( valida(email, password) ){
            dispatch( loginWithEmailAndPassWord( email, password ));
        }
    };

    return (
        <>
            <form className="auth__form-login" onSubmit={handleLogin}>
                <h3 className="auth__title">Login</h3>

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    {" "}
                    Login
                </button>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    );
};
