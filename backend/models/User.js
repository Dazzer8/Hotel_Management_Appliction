const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    required: [true, "please provide the username"],
    type: String,
},
password: {
    required: [true, "please provide the password"],
    type: String,
},
email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: {
        validator: function (v) {
            return validator.validate(v);
        },
        message: "Please provide a valid email!",
    },
},
role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
},
});
const user = mongoose.model('User', UserSchema);


module.exports = user;