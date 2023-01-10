import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css'
const AdminLogin = () => {
    let[email , setemail]=useState('')
    let[password,setpassword]=useState('')
    let navigate =useNavigate()

    let login=(e)=>{
        e.preventDefault();
        let data= {email,password}
     if (email=="nihal@gmail.com" && password=="nihal121") {
        navigate('/admin')
     } else {
        alert("invalid Credentials")
     }
    }
    return (
        <div className="adminlogin">
            <div className="form">
                
                <h1>Sign In As Admin</h1>
                <br /><br />
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <label htmlFor="">Email:</label>
                            <br />
                            <input type="email" value={email} required onChange={(e)=>setemail(e.target.value)} placeholder="email address" className="email" />
                        </div>
                        <br />
                        <div className="password">
                            <label htmlFor="">password:</label>
                            <br />
                            <input type="password" value={password} required onChange={(e)=>setpassword(e.target.value)} placeholder="enter password" className="password" />
                        </div>
                        <br /><br />
                        <button className="btn btn-primary">Login</button>
                     
                    </form>
                  
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;