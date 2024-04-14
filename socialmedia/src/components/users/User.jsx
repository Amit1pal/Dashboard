import React, { useState } from 'react';
import { AddUsersList } from '../../store';

const User = ({user}) => {
  const { users,DeleteUser, UpdateUser } = AddUsersList();
  const EditUser = () => {
    UpdateUser(user.id, { ...user,user});
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>********</td>
      <td>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() =>EditUser()}
        >
        </button>
      </td>
      <td>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => DeleteUser(user.id)}
        >
          ❌
        </button>
      </td>
    </tr>
  );
};

export default User;
