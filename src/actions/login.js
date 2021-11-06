import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishLoading, startLoading } from "./error";

export const loginWithEmailAndPassWord = (email, password) =>{
    return (dispatch)=>{

        console.log(email, password);
        
        const payload = JSON.stringify({
            email,
            password
        });

        const respuesta = fetch(`http://localhost:81/backend-blog/controller/user/login.php`, {
            method: "POST",
            body: payload,
        }).then(data => data.text())
        .then(data =>{
            console.log(JSON.parse(data))
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

export const login = (uid, displayName) =>({
    type: types.login,
    payload: {
        uid: uid,
        displayName: displayName
    }
});

export const logout = () =>({
    type: types.logout
})



export const registerWithEmailAndPassword = ( email, password, displayName ) =>{
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({user}) =>{
                await user.updateProfile({
                    displayName: displayName
                });
                dispatch( login(user.uid, user.displayName))
            }).catch(err =>{
                Swal.fire('Error', err.message, 'error');
            });
    }
} */