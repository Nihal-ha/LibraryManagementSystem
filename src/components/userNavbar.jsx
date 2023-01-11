import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( <div className="usernavbar">
           
        <div className="title">
            <div className="title1">
                <h1>User Portal</h1>
            </div>
            <div className="title2">
                <ul>
                    <li><Link to='/user/'>Dash-Board</Link></li>
                   
                    <li> <Link to="/user/Book-list">Book-List</Link></li>
                    
                </ul>

            </div>
            <div className="logout">
                <Link to='/'>LogOut</Link>
            </div>
        </div>
    </div>);

}
 
export default UserNavbar;