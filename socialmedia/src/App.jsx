import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from './components/Sidebar'
import AddProducts from './components/AddProducts'
import { ImRocket } from 'react-icons/im'
import Product from './components/Product'
import ProductList from './components/ProductList'
import AddUsers from './components/users/AddUsers'
import AllUsers from './components/users/AllUsers'
import Dashboard from './components/Dashboard'
import {AddUserProvider} from './store'

function App() {
  const [selectedTab,setSelectedTab]= useState('Dashboard')
  const [users,setUsers]=useState([]);
  const AddUser =(user)=>{
    setUsers((prev)=>[{id:Date.now(),...user},...users])
  }
  const DeleteUser=(id)=>{
    setUsers((prev)=>prev.filter((item)=>item.id !==id))
  }
  const UpdateUser =(id,user)=>{
    setUsers((prev)=>prev.map((item)=>(item.id===id ? user :prev)))
  }

  useEffect (()=>{
    if (typeof localStorage !== 'undefined') {
    const storedusers = JSON.parse(localStorage.getItem("users"));
    if(storedusers && storedusers.length > 0){
      setUsers(storedusers);
    }
  }
  },[]);
  
  useEffect (()=>{
    if (typeof localStorage !== 'undefined') {
    localStorage.setItem("users",JSON.stringify(users));
    }
  },[users]);

  return (
    <>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className='app_heder-footer'>
          <Header/>
          {selectedTab === 'Dashboard' && <Dashboard/>}
          {
            selectedTab === 'Products' ? <ProductList/>
            : selectedTab === 'Add Products' ? <AddProducts/>
            : selectedTab === 'AllUsers' ? <AddUserProvider value={{users,AddUser,DeleteUser,UpdateUser}}>
              <AllUsers/></AddUserProvider>
            : selectedTab === 'Add Users' && <AddUserProvider value={{users,AddUser,DeleteUser,UpdateUser}}><AddUsers/></AddUserProvider>
            }
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
