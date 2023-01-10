import AdminNavbar from "./adminNavbar";
import AdminDashbord from "./adminDashbord";
import {Routes,Route} from "react-router-dom";
import BookList from "./BookList";
import UserList from "./userList";
import ReadBook from "./readbook";
import AddUser from "./adduser";
import AddBook from "./addbook";
const AdminHome = () => {
    return ( <div className="adminhome">
<AdminNavbar/>
<Routes>
    <Route path="/" element={<AdminDashbord/>}/>
    <Route path="/Book-list" element={<BookList/>}/>
    <Route path="/user-list" element={<UserList/>}/>
    <Route path="/Book-list/:id" element={<ReadBook/>}/>
    <Route path="/add-user" element={<AddUser/>}/>
    <Route path="/add-book" element={<AddBook/>}/>
</Routes>
    </div> );
}
 
export default AdminHome;