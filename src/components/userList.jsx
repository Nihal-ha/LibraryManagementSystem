import { useEffect, useState } from "react";
import '../styles/userList.css'
const UserList = () => {
    let[user,setuser]=useState([])
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await fetch(`http://localhost:1252/users`)
            let data=await response.json()
            setuser(data)
        }
        fetchdata()
    },[])
    return ( <div className="userlist">
        <h1>User List</h1>
        
{user.map((data)=>(
    <div className="usermap">
        <h1>Name:{data.name}</h1>
        <h2>Age:{data.age}</h2>
        <h3>email:{data.email}</h3>
        <h4>Phone No:{data.phoneNumber}</h4>
    </div>
))}
    </div> );
}
 
export default UserList;