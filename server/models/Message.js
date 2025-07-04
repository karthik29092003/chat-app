import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    // ObjectId refers to a document in the "User" collection
    senderId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    receiverId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    text: { type: String, },
    image: { type: String, },
    seen: {type: Boolean, default: false}
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;