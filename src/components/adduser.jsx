import { useState } from "react";
import '../styles/adduser.css'
import { useNavigate } from "react-router-dom";
const AddUser = () => {
 let[name,setname]=useState("")
 let[age,setage]=useState("")
 let[email,setemail]=useState("")
 let[phoneNumber,setphoneNumber]=useState("")
let navigate=useNavigate()
 let handleSubmit=(e)=>{
    e.preventDefault();
    let userdata={name,age,email,phoneNumber}
    //posting to server
    fetch(`http://localhost:1252/users`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(userdata)
}) 
alert(" Do you want to Add user")
 navigate('/admin/user-list')
}

    return ( <div className="adduser">
        
        <h1>Add a new User</h1>
       <div className="form">
        <form action="" onSubmit={handleSubmit} >
            <div className="name">
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter name to be added" />
            </div>
            <div className="age" >
                <input type="number" value={age} onChange={(e)=>setage(e.target.value)} placeholder="age" /> 
            </div>
            <div className="email">
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email" />
            </div>
            <div className="phonenumber">
                <input type="tel" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} minLength='10' maxLength='10' placeholder="phoneNumber" />
            </div>
            <button >Add user</button>
        </form>
        </div>
   
    </div> );
}
 
export default AddUser;