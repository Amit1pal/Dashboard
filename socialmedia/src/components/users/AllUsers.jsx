import React, { useContext } from 'react'
import User from './User'
import { AddUsersList } from '../../store';

const AllUsers = ({user}) => {
  const {users} = AddUsersList();
  return (
    <div>
      <h2>List of Users</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <User user={users}/>
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
