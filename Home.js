/*//import { Box, Button, Typography } from '@mui/material';
import React from 'react';
//import { Link } from 'react-router-dom';
//import { Button } from '@mui/material';
//import axios from 'axios';
//import React from 'react'
//import { Link, useNavigate } from "react-router-dom";
import "./Book/Book.css";
import Book from "./Book/Book";
*/
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Homepage from './Homepage';
import "./Book/Book.css";

const URL = "http://localhost:5000/books";

const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=> res.data);
};
const Home = () => {
const [books,setBooks] = useState();
  useEffect(() => {
    fetchHandler().then(data=>setBooks(data.books));
}, []);
console.log(books);
return(
    <div>
       <ul>
        {books && 
          books.map((book,i)=>(
             <li key ={i}>
              <Homepage book={book} />
             </li>
        ))}
       </ul>
    </div>
  )
}

export default Home;