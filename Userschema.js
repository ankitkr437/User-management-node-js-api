const mongoose =  require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    
    name: {
      type: String,
        require: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    
  },
  { timestamps: true }
);

const  User = mongoose.model("User", UserSchema);

module.exports=User;