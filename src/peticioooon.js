import React from 'react'

export const BlogApp = () => {

    const json1 = {
        name: "Mario",
        email: "andrea@gmail.com",
        password: "123456",
        phone: "3154475447",
        type: "admin",
        creationDate: "2015-09-15",
        updateDate: "2020-01-01"
    }

    const manejarEnvio = (e) =>{
        e.preventDefault();

        const cargaUtil = JSON.stringify(json1);

        const respuesta = fetch(`http://localhost:81/backend-blog/controller/user/register.php`, {
            method: "POST",
            body: cargaUtil,
        }).then(data => data.text())
        .then(data =>{
            console.log(JSON.parse(data))
        })

    }

    return (
        <div>
            <button onClick={manejarEnvio}>
                Enviar info
            </button>
        </div>
    )
}
