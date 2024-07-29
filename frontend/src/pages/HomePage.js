import React, {useEffect, useState} from 'react';
import api from "../api/config.js";

const HomePage = () => {
    const [bookList,setBookList]=useState([]);
    useEffect(()=>{
        async function fetchBook(){

            const response=await api.get("/book");
            // console.log(response);
            setBookList(response.data);
        }
        fetchBook();
    },[]);
  return(
<>
<div>
    {bookList.map((book,index)=>{
        return <>
        <div key={index}>

        {book.name}
        </div>
        </>
    })}
</div>

</>

  )
  
}

export default HomePage