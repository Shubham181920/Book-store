import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';


const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async()=>{
        await axios.get(`http://localhost:5000/books/${id}`)
        .then((res)=>res.data).then(data=>setInputs(data.book)) ;
    };
    fetchHandler();
  },[id]);

  const sendRequest = async() =>{
    await axios.put(`http://localhost:5000/books/${id}`, {
    name: String(inputs.name),
    author: String(inputs.author),
    description: String(inputs.description),
    price: Number(inputs.price),
    image: String(inputs.image),
    available: Boolean(checked)
   }).then(res => res.data);  
  }; 

  const handleSubmit =(e)=>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"));
  };

  const handleChange= (e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
      }) );
  };

  const [checked, setchecked] = useState(false);

  const handleChange2 =() => {setchecked (!checked)};

  console.log(inputs);

    return (
    <div>
        { inputs && (
         <form onSubmit={handleSubmit} >

<Box 
display="flex" 
flexDirection="column" 
justifyContent={"center"} 
maxWidth = {700}
alignContent = "center" 
marginLeft={"auto"}
marginRight="auto"
marginTop={5} >

<FormLabel>Name</FormLabel>
<TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name = "name" />

<FormLabel>Author</FormLabel>
<TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name = "author" />

<FormLabel>Description</FormLabel>
<TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name = "description" />

<FormLabel>Price</FormLabel>
<TextField type={"number"} value={inputs.price} onChange={handleChange} margin="normal" fullWidth variant='outlined' name = "price" />

<FormLabel>Image</FormLabel>
<TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant='outlined' name = "image" />

<FormControlLabel control={<Checkbox Checked={checked} onChange={handleChange2} />} label="Available" />

<Button varient="contained" type='submit' >
  Update Book
  </Button>
<Button LinkComponent={Link} 
 to="/books"  
 varient="conatained">
    Cancel
  </Button>  
</Box>
</form> )}
    </div>
  )
};

export default BookDetail