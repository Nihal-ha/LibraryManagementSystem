import { Link } from 'react-router-dom';
import '../styles/adminnavbar.css'

const AdminNavbar = () => {
    return (<div className="navbar">
        {/* <h1>Navbar</h1> */}
        <div className="title">
            <div className="title1">
                <h1>AdminPortal</h1>
            </div>
            <div className="title2">
                <ul>
                    <li><Link to='/admin/'>Dash-Board</Link></li>
                    <li> <Link to="/admin/add-book" >Add-Books</Link></li>
                    <li> <Link to="/admin/add-user">Add-User</Link></li>
                    <li> <Link to="/admin/Book-list">Book-List</Link></li>
                    <li> <Link to="/admin/user-list">User-List</Link></li>





                </ul>

            </div>
            <div className="logout">
                <Link to='/'>LogOut</Link>
            </div>
        </div>
    </div>);
}

export default AdminNavbar;