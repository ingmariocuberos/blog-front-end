import React from 'react'

export const UserView = ({id, name, email, phone, usertype, creationDate, updateDate}) => {
    return (
        <div className="userScreen__container">
            <div className="userScreen__info">
            <div className="userScreen__name"><span className="bolder item-user">Nombre: </span> {name}</div>
                    <div className="userScreen__name"><span className="bolder item-user">Email: </span>{email}</div>
                    <div className="userScreen__name"><span className="bolder item-user">Teléfono: </span>{phone}</div>
                    <div className="userScreen__name"><span className="bolder item-user">Tipo de Usuario: </span>{usertype}</div>  
                    <div className="userScreen__name"><span className="bolder item-user">Fecha de Creación: </span>{creationDate}</div>
                    <div className="userScreen__name"><span className="bolder item-user">Fecha de Actualización: </span>{updateDate}</div>    
            </div>
            <div className="userScreen__options">
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-warning">Editar</button>
            </div>
        </div>
    )
}
