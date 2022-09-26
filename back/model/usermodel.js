const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    item : { type : String},
    date : {type: Date},
    amount : {type: Number}
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;