import React from 'react'
import { useState } from 'react'
import api from "../api/config.js"
import "../assets/scss/main.scss"
const AddBook = () => {
    const [formData, setFormData]=useState({});
    const [imageData,setImageData]=useState({});
    const handeleChange=(e)=>{
console.log(e.target.value);
setFormData({...formData,[e.target.name]:e.target.value})
    };
    const addBook=async(e)=>{
        e.preventDefault();
console.log("form submitted");
await api.post("/book/add",{
    ...formData,
    image:imageData
},{
    headers:{
        "Content-Type":"multipart/form-data",
    }
});
    }
  return (
  <>
  <div>
    <form onSubmit={addBook}>
        <label>Name:</label>
        <input type="text" name='name' onChange={handeleChange}/>
        <label>Author Name:</label>
        <input type="text" name='author'  onChange={handeleChange} />
        <label>Description:</label>
        <textarea name='description' onChange={handeleChange}></textarea>
        <label>Image:</label>
        <input type='file' name='image' onChange={(e)=>setImageData(e.target.files[0])}/>
        <input type='submit' value="Submit" />
    </form>
  </div>
  </>
  )
}

export default AddBook