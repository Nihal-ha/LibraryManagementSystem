import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookList from "./BookList";

const ReadBook = () => {
let[readbook,setbook]=useState([])

//to get router parameter for particular id
let params=useParams()
useEffect(()=>{
    let fetchdata=async()=>{
        let response=await fetch(`http://localhost:1252/books/${params.id}`)
        let data=await response.json()
        setbook(data)

    }
    fetchdata()
})
    return ( <div className="readbook">
        <h1 >Read Book</h1>
    <div className="n">
        <p ><span style={{fontWeight:'bold'}}> Long discription:</span>
            <br />{readbook.longDescription}</p>
    </div>
    </div> );
}
 
export default ReadBook;