import React from 'react'
import "./Book/Book.css";

const Homepage = (props) =>{

    const {name, author, description, price, image} = props.book;

  return (
    <div className='card' >
        <img src={image} alt={name} />
        <article>By {author} </article>
        <h3>{name}</h3>
        <p>{description} </p>
        <h3>CAD {price} </h3>
    </div>
  )
};

export default Homepage