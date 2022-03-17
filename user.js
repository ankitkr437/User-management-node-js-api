
const express =require('express')
const router = express.Router();
const  User = require('./Userschema.js');
const bcrypt = require('bcrypt');

//register
router.post('/register', async (req,res)=>{
  
    try{
         //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newuser = new User({
      username:req.body.username,
      password:hashedPassword,
      name:req.body.name,
      phoneNumber:req.body.phoneNumber,
  }) 
  const user=await newuser.save();
  res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
})






//update credentials of user

 
router.put("/:username", async (req, res) => {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findOneAndUpdate({username:req.params.username}, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  
});


//delete user 

router.delete("/:username", async (req, res) => {
  
      await User.findOneAndDelete({username:req.params.username}, (err, user) => {
        if (!err) {
          res.json({ msg: "customer deleted", deleted: user });
        } else {
          console.log("Error:" + err);
        }
      }); 
});

//get a user
router.get("/:username", async (req, res) => {
  try {
     const user = await User.find({username:req.params.username});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


 

module.exports =router;