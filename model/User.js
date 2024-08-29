const mongoose = require("mongoose");
const UerSChema=mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: [true, "please enter a product name"],
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }, 
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('User',UerSChema);