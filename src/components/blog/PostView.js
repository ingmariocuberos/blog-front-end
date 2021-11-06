import React from 'react'

export const PostView = ({idPost, 
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
        <div className="postView__wholePost">
                <div className="postView__title">{title}</div>
                <div>{idCategory}</div>                
                <div className="postView__shortText">{shortText}</div>
                <img className="postView__image" src={image} alt="postView" />
                <div>{bigText}</div>              
                <div>{creationDate}</div>
                <div>{updateDate}</div>
            </div>
    )
}
