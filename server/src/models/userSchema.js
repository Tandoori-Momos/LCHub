// Dummy model 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, 
    room_no: String, 
    uid: { type: Number, default: 0 }
});

const UserSchema = mongoose.model('user', userSchema);
module.export = UserSchema;
