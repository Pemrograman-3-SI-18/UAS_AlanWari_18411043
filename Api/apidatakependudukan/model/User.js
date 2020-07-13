const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nik:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    confirmPassword:{
        type: String
    }

});

module.exports = mongoose.model('users',userSchema)
