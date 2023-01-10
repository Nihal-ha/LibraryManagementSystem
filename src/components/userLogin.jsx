import { useNavigate } from "react-router-dom";
import '../styles/usearlogin.css'
const UserLogin = () => {
    let navigate =useNavigate()
    let login=()=>{
navigate('/user/')
    }
    return ( 
        <div className="userlogin">
        <div className="form">
            <h1>Sign in as user</h1>
            <br /><br />
            <div className="form_input">
                <form onSubmit={login}>
                    <div className="email">
                        <label htmlFor="">Email:</label>
                        <br />
                        <input type="email"  placeholder="email address" className="email" />
                    </div>
                    <br />
                    <div className="password">
                        <label htmlFor="">password:</label>
                        <br />
                        <input type="password"  placeholder="enter password" className="password" />
                    </div>
                    <br />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default UserLogin;