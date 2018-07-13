var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var IteamSchema = new Schema({
    iteamname: String,
    iteamquantity:String,
    expirydate:String,
    manufacturedate:String,
    description:String,
    creationDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Iteam', IteamSchema);
