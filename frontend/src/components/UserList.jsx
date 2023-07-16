import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserList = () => {

    const[users, setUsers]= useState([]);

useEffect(()=>{
const userList = async()=>{
    
    try {
        const res = await axios.get('http://localhost:4000/users');
        setUsers(res.data);
    } catch (error) {
        console.log(error)
    }
}
    userList()
        }, []);
    
  return (
    <>
     <div className='user-list'>
        <h1>Users</h1>
        {users.map((user)=>(
            <div key={user.id}>
                <p>Name:{user.firstName} {user.lastName}</p>
                <p>Email:{user.email}</p>

            </div>
        ))}
    </div>
    </>
   
  )
}
 