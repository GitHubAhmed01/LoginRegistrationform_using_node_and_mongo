const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uname: {
        type:String,
        required: true
    },
    uemail : {
        type: String,
        required: true,
        unique: true
    },
    upassword: {
        type:String,
        required: true
    },
    uphone: {
        type:Number,
        required: true,
        unique:true
    }
})

const Registration = new mongoose.model("Registration", userSchema);
module.exports = Registration;