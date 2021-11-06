import React from 'react'

export const PostList = ({idPost, 
                        idCategory, 
                        idUser, 
                        title, 
                        slug, 
                        shortText, 
                        bigText, 
                        image, 
                        creationDate, 
                        updateDate}) => {
    return (
        <div>
                <div className="postList__summary">
                    <img className="postList__image" src={image} alt="postlist" />
                    <div>Categoría: {idCategory}</div>
                    <div>{title}</div>
                    <div>{shortText}</div>
                </div>
                
            </div>
        
    )
}
