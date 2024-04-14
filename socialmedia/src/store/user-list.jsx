import { createContext, useContext} from "react";

export const UserList= createContext({
    users :[
        {
            id: 1,
            firstname: 'Amit',
            lastname: 'Pal',
            email: 'amitpal@gmail.com',
            password:'123@12'
        },
    ],
    AddUser : (user) =>{
    },
    DeleteUser : (id)=>{

    },
    UpdateUser : (id,user)=>{

    }
});

export const AddUsersList =()=>  useContext(UserList)

export const AddUserProvider= UserList.Provider

