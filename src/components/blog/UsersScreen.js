import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingUsers } from '../../actions/users';
import { UserView } from './UserView';


export const UsersScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchingUsers() );
    }, [])
        
    const {users} = useSelector(state => state.users.allUsers);    

    return (
        <div>
            <h2 className="userScreen__title">Listado de usuarios</h2>

            {
                    users.length > 1
                    &&
                    users.map((user=><UserView
                                            key={user.id_user}
                                            id={user.id_user}
                                            name={user.name}
                                            email={user.email}
                                            phone={user.phone}
                                            usertype={user.usertype}
                                            creationDate={user.creationDate}
                                            updateDate={user.updateDate}
                                            />))
                    
                }


        </div>
    )
}
