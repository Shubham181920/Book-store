const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


//middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router); // For url localhost:5000/books


mongoose.connect(
    "mongodb+srv://admin:Admin1234@cluster0.91ktzjz.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=> console.log("Connected to MongoDB"))
    .then(()=>{
        app.listen(5000);
    })
    .catch((err)=> console.log(err));
