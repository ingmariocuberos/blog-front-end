import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import v from "validator";
import moment from "moment";
import Swal from "sweetalert2";
import { login, userRegister } from "../../actions/login";

export const RegisterScreen = () => {
    const initialRegister = {
        name: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
    };

    const dispatch = useDispatch();

    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm(initialRegister);

    const { name, email, password, password2, phone } = formValues;

    const refSelectForm = useRef("user");

    const validation = (name, email, password, password2) =>{

        if( v.isEmpty(name)){
            
            Swal.fire("Error", "Debe ingresar un nombre", "error")
            return false;
        } else if( v.escape(name).includes(";") ){
            Swal.fire("Error", "Ingrese un nombre válido", "error")
        } else if( !v.isEmail(email) ){
            Swal.fire("Error", "Ingrese un email válido", "error")
            return false;
        } else if( password !== password2 || password.length < 5 ){
            Swal.fire("Error", "Las contraseñas no coinciden", "error")
            return false;
        }

        return true;
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const creationDate = moment(new Date()).format("YYYY-MM-DD");
        const updateDate = moment(new Date()).format("YYYY-MM-DD");

        const valida = validation(name, email, password, password2);
        

        if( valida ){
            dispatch(userRegister(email, password, name, phone, refSelectForm.current.value, creationDate, updateDate));

        }
    };

    return (
        <>
            <form className="auth__form-login" onSubmit={handleRegister}>
                <h3 className="auth__title">Registrate</h3>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                    required
                />

                <input
                    type="password"
                    placeholder="Repita la contraseña"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                    required
                />

                <input
                    type="phone"
                    placeholder="Teléfono"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    className="auth__input"
                    required
                />


                <label htmlFor="type">Elige el tipo (Solo para prueba técnica)</label>
                <select ref={refSelectForm} name="type" id="type" required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    {" "}
                    Registro
                </button>

                <Link to="/auth/login" className="link">
                    ¿Ya estás registrado?
                </Link>
            </form>
        </>
    );
};
