const mongoose = require('mongoose');

//connecting to database here you have to provide your connection url,username and password .
const connection = async (url)=>{

   try{
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
   }
   catch(err){
       console.log(err)
   }
}

module.exports=connection;