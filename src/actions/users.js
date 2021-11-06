import Swal from 'sweetalert2';
import { types } from "../types/types";
import { logout } from './login';
import { setCurrentPage } from './ui';

export const fetchingUsers = () =>{
    return (dispatch, getState)=>{

        const payload = JSON.stringify({
            email: getState().auth.email,
            token: getState().auth.token
        });

        const response = fetch(`http://localhost:81/backend-blog/controller/user/allUsers.php`, {
            method: "POST",
            body: payload,
        })
                        .then(data => data.text())
                        .then(data =>{

            const dataResponse = JSON.parse(data);

            console.log(dataResponse.ok);

            if(dataResponse.msg.length > 2){
                dispatch( usersLoad(dataResponse.msg) );
                console.log("Por aqui pasé");
                
            }else if(dataResponse.msg === "Expired") {
                dispatch(logout());
                dispatch( setCurrentPage("Posts"));
            } else {
                Swal.fire("Error", "Error en le servicio. Por favor, intentelo más tarde" , "error");
                dispatch( setCurrentPage("Posts"));
            }
        })

    }
}


export const usersLoad = (users) =>({
    type: types.usersLoad,
    payload: {
        users: users
    }
});