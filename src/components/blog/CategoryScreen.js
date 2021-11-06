import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingCategories } from '../../actions/categories';
import { CategoryView } from './CategoryView'

export const CategoryScreen = () => {

    const dispatch = useDispatch();

    dispatch( fetchingCategories() );
    const {categories} = useSelector(state => state.categories.allCategories);    

    return (
        <div>
            <h2 className="categoryView__title">Estas son las categorías disponibles</h2>

            <button className="btn categoryView__container-add">
                <p>Añade una nueva categoría </p>
                <i className="fas fa-plus-circle categoryView__add-button"></i>
            </button>

            {
                    categories.length > 1
                    &&
                    categories.map((category=><CategoryView
                                            key={category.id_category}
                                            id={category.id_category}
                                            name={category.cat_name}                                            
                                            />))
                    
                }


        </div>
    )
}
