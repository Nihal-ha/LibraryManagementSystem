import { Routes,Route} from "react-router-dom";
import UserDashbord from "./userDashbord";
import UserNavbar from "./userNavbar";
import BookList from "./BookList";
import ReadBook from "./readbook";

const UserHome = () => {
    return ( <div className="userhome">
        <UserNavbar/>
        <Routes>

        <Route path="/" element={<UserDashbord/>}/>
        <Route path="/Book-list" element={<BookList/>}/>
        <Route path="/Book-list/:id" element={<ReadBook/>}/>
        </Routes>
    </div> );
}
 
export default UserHome;