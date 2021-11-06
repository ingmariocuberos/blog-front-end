import React from 'react'
import { useSelector } from 'react-redux';
import { NavBar } from '../ui/NavBar'
import { CategoryScreen } from './CategoryScreen';
import { PostsScreen } from './PostsScreen'
import { UsersScreen } from './UsersScreen';

export const PrincipalBlogScreen = () => {

    const { currentPage } = useSelector(state => state.ui);

    return (
        <div>
            <NavBar/>
            {
                currentPage === "Posts"
                ?
                <PostsScreen/>
                :
                currentPage === "Category"
                ?
                <CategoryScreen/>
                :
                <UsersScreen />

            }
            
        </div>
    )
}
