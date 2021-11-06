import Swal from 'sweetalert2';
import { types } from "../types/types";
import { logout } from './login';

export const fetchingCategories = () =>{
    return (dispatch)=>{       

        const payload = JSON.stringify({
            category: "all"
        });

        const response = fetch(`http://localhost:81/backend-blog/controller/category/allCategories.php`, {
            method: "POST",
            body: payload,
        })
                        .then(data => data.text())
                        .then(data =>{
                            const dataResponse = JSON.parse(data);

            if(dataResponse.msg.length > 1){
                dispatch( categoriesLoad(dataResponse.msg) );
                
            }else {
                Swal.fire("Error", `Error en el Servicio. Intentalo más tarde`, "error");
            }
        })

    }
}


export const categoriesLoad = (categories) =>({
    type: types.categoriesLoad,
    payload: {
        categories: categories
    }
});