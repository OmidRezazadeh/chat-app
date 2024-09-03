const mongoose = require("mongoose");
const ChatSchema=mongoose.Schema({
  sender_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,

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

module.exports=mongoose.model('Chat',ChatSchema);