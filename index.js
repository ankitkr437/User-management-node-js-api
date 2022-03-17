
//importing all the necessary built in packages
const express = require('express')
const dotenv = require('dotenv')
 


//importing all the necessary packages which is not built in
const  connection =require('./database.js');
 
//routes for user

const userRoute =require('./user.js');

//intializing  express packag
const app=express();

app.use(express.json());
 
//bringing all constants from .env file
dotenv.config()
  
const URL_LINK=process.env.URL;
 
connection(URL_LINK);

const router = express.Router();

app.use('/api/user',userRoute);

app.get("/",(req,res)=>{
    res.send("this is  a user registration api"); 
})

const port =process.env.PORT || 8000;
app.listen(port ,()=>console.log(`listening on port at ${port}`));