import Swal from 'sweetalert2';
import { types } from "../types/types";
import { logout } from './login';
import { setCurrentPage } from './ui';

export const fetchingPosts = (token) =>{
    return (dispatch)=>{       

        const payload = JSON.stringify({
            post: "all",
            token: token
        });

        const response = fetch(`http://localhost:81/backend-blog/controller/posts/allPosts.php`, {
            method: "POST",
            body: payload,
        })
                        .then(data => data.text())
                        .then(data =>{
                            const dataResponse = JSON.parse(data)

            if(dataResponse.msg.length > 1){
                dispatch( postLoad(dataResponse.msg) );
                
            } else if(dataResponse.msg === "Expired"){
                dispatch( logout() );
                dispatch( setCurrentPage("Posts"));
            } else {
                Swal.fire("Error", `${dataResponse.msg}`, "error");
            }
        })

    }
}


export const postLoad = (posts) =>({
    type: types.postsLoad,
    payload: {
        posts: posts
    }
});