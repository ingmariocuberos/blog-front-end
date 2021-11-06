import React from 'react'

export const CategoryView = ({id, name}) => {
    return (
        <div className="categoryView__container">
            <div className="categoryView__name">{name}</div>
            <button className="btn btn-danger categoryView__button">Eliminar</button>
        </div>
    )
}
