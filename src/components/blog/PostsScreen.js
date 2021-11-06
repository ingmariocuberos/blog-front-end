import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingCategories } from '../../actions/categories';
import { fetchingPosts } from '../../actions/posts';
import { PostList } from './PostList';
import { PostView } from './PostView';

export const PostsScreen = () => {

    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { allPosts } = useSelector(state => state.posts);


    useEffect(() => {
        if(token){
            dispatch( fetchingPosts(token) );
        }
        
    }, [token]);

    return (
        <div className="postList__container-two-columns">
            <div className="postList__container-left">
                {
                    allPosts.length > 1
                    &&
                    allPosts.map((post=><PostView
                                            key={post.id_post}
                                            idPost={post.id_post}
                                            idCategory={post.id_category}
                                            idUser={post.id_user}
                                            title={post.title}
                                            slug={post.slug}
                                            shortText={post.shortText}
                                            bigText={post.bigText}
                                            image={post.image}
                                            creationDate={post.creationDate}
                                            updateDate={post.updateDate}
                                            />))
                    
                }
            </div>

            <div className="postList__container-right">
                {
                    allPosts.length > 1
                    &&
                    allPosts.map((post=><PostList
                                            key={post.id_post}
                                            idPost={post.id_post}
                                            idCategory={post.id_category}
                                            idUser={post.id_user}
                                            title={post.title}
                                            slug={post.slug}
                                            shortText={post.shortText}
                                            bigText={post.bigText}
                                            image={post.image}
                                            creationDate={post.creationDate}
                                            updateDate={post.updateDate}
                                            />))
                    
                }
            </div>
            
        </div>
    )
}
