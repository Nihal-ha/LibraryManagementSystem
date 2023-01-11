import '../styles/BookList.css'

import { useState,useEffect } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
const BookList = () => {
    let[book,setbook]=useState([])

    //to fetch the route value
    let location =useLocation()
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await fetch(`http://localhost:1252/books`)
            let data =await response.json()
            setbook(data)
        }
        fetchdata()
    },[book])
    //delete a book from server
    let handledelete =(id,title)=>{
       fetch(`http://localhost:1252/books/${id}`,{
        method:'DELETE'
       });
       alert(`${title} will be deleted permanently`)
    }
    let navigate =useNavigate()
    let readmore  = (id) => {
        if(location.pathname == '/admin/Book-list'){
       navigate(`/admin/book-list/${id}`)
    }else{
navigate(`/user/Book-list/${id}`)
    }
    
}
    
    
    return ( <div className="hooklist">
<h1>Book List</h1>
<h1>NO of Books {book.length}</h1>
<div className="list">
<div className="book_section">
    {book.map((data)=>(
       
<div className="book">
   <div className='b1'> 
   <img src={data.thumbnailUrl} alt="" />
   </div>
   <div className="b2">
<h1>Title:{data.title}</h1>
    <h4>Authors:{data.authors.toString()}</h4>
    <h6>Page Count:{data.pageCount}</h6>
    
    <button onClick={()=>readmore(data.id)}>Read Mode</button>
   
{location.pathname=='/admin/Book-list' &&  <button onClick={()=>handledelete(data.id,data.title)}>Delete</button>}
   
   
    </div>
</div>


    ))}

</div>

    </div> 
    </div>);
}

export default BookList;