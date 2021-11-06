import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../../actions/login";
import { setCurrentPage } from "../../actions/ui";

export const NavBar = () => {

    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { usertype } = useSelector(state => state.auth);

    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("currentPage");

        Swal.fire({
            icon: 'success',
            title: 'Hasta pronto',
            showConfirmButton: false,
            timer: 1500
        })

        dispatch(logout());
        dispatch( setCurrentPage("Posts"));
        
    }

    const handleSetPage = ( {target} ) =>{
        dispatch( setCurrentPage(target.name) );
        localStorage.setItem("currentPage", target.name);
    }

    return (
        <nav className="navbar navbar-expand-lg nav-flex">
            <div className="nav__container-icon-title">
                <a className="navbar-brand" href="./" disabled>
                    {/* <img
                        className="nav__principal-icon"
                        src="assets/librosclaros.png"
                        alt="biblioteca-icon"
                        title="biblioteca-icon"
                        id="librosclarosheaderyfooter"
                    /> */}
                    <span className="nav__title"> TuBlog </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav__item active" onClick={ handleSetPage }>
                        <a name="Posts" className="nav__link" href="#">
                            Posts <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav__item ml-3" onClick={ handleSetPage }>
                        <a name="Category" className="nav__link" href="#">
                            Categorias
                        </a>
                    </li>

                    
                    {
                        usertype==="admin"
                        &&
                        <li className="nav__item ml-3" onClick={ handleSetPage }>
                            <a name="Users" className="nav__link" href="#">
                                Usuarios
                            </a>
                        </li>
                    }
                    
                    <li className="nav__button ml-3">
                        <button
                            className="btn2 btn2-primary btn-login btn-danger"
                            onClick={ handleLogout }
                        >
                            CERRAR SESION
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
