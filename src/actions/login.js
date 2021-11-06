import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishLoading, startLoading } from "./error";

export const loginWithEmailAndPassWord = (email, password) =>{
    return (dispatch)=>{
        
        const payload = JSON.stringify({
            email,
            password
        });

        const response = fetch(`http://localhost:81/backend-blog/controller/user/login.php`, {
            method: "POST",
            body: payload,
        }).then(data => data.text())
        .then(data =>{
            const dataResponse = JSON.parse(data)

            console.log(dataResponse);

            if(dataResponse.token){
                dispatch( login(email, dataResponse.token, dataResponse.usertype, dataResponse.name) );
                Swal.fire({
                    icon: "success",
                    title: "Bienvenido de nuevo",
                    showConfirmButton: false,
                    timer: 1500
                })
            } else{
                Swal.fire("Error", `${dataResponse.msg}`, "error");
            }
        })

    }
}

export const login = (email, token, usertype, name) =>({
    type: types.login,
    payload: {
        email: email,
        token: token,
        usertype: usertype,
        name: name
    }
});

export const logout = () =>({
    type: types.logout
})

export const userRegister = ( email, password, name, phone, type, creationDate, updateDate ) =>{
    return (dispatch) =>{

        const payload = JSON.stringify({
            email,
            password,
            name,
            phone,
            type,
            creationDate,
            updateDate
        });

        const response = fetch(`http://localhost:81/backend-blog/controller/user/register.php`, {
            method: "POST",
            body: payload,
        }).then(data => data.text())
        .then(data =>{
            const dataResponse = JSON.parse(data)

            console.log(dataResponse);

            if(dataResponse.token){
                Swal.fire("Registro exitoso", "Tu registro ha sido exitoso", "success");
                dispatch( login(email, dataResponse.token, type, name) );
            } else{
                Swal.fire("Error", `${dataResponse.msg}`, "error");
            }
        })
    }
}



/* const manejarEnvio = async(e) =>{
    e.preventDefault();

    const cargaUtil = JSON.stringify(json1);

    const respuesta = await fetch(`http://localhost:81/backend-blog/controller/createUser.php`, {
        method: "POST",
        body: cargaUtil,
    });
    const exitoso = await respuesta.json();

    console.log(exitoso);

} */



/* export const startGoogleLogin = () =>{
    return ( dispatch ) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch( login( user.uid, user.displayName ))
            });
    }
}







 */