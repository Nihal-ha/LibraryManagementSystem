import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
let[title,setTitle]=useState("")
let[authors,setAuthor]=useState("")
let[categories,setcategories]=useState("")
let[pageCount,setPageCount]=useState("")
let[shortDescription,setShortDescription]=useState("")
let[longDescription,setlong]=useState("")
let[thumbnailUrl,seturl]=useState("")

let navigate=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault();
    let bookdata={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

    //posting to server
    fetch(`http://localhost:1252/books`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(bookdata)
}) 
alert("Do you want to Add Book")
navigate('/admin/book-list')
}
    return ( <div className="addbook">
        <h1>Add A Book</h1>
        <div className="AddForm">
            <form action="" onSubmit={handleSubmit}>
                <div className="booktitle" >
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title"/>
                </div>
                <div className="bookauthors">
                    <input value={authors} onChange={(e)=>setAuthor(e.target.value)} type="text"placeholder="Author" />
                </div>
                <div className="bookCategories">
                    <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text"placeholder="categories" />
                </div>
                <div className="bookpageCount">
                    <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="text" placeholder="PageCount" />
                </div>
                <div className="shortdescription">
                    <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} name="" id="" cols="30" rows="10" placeholder="ShortDescription"></textarea>

                </div>
                <div className="longdescription">
                    <textarea value={longDescription} onChange={(e)=>setlong(e.target.value)} name="" id="" cols="30" rows="10" placeholder="LongDescription"></textarea>

                </div>
                <div className="thumbnailURL">
                    <input value={thumbnailUrl} onChange={(e)=>seturl(e.target.value)} type="type" />
                </div>
                <button className="biikbtn">Add Book</button>

            </form>
        </div>
    </div> );
}
 
export default AddBook;