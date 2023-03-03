const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    item_name:{
        type: String,
        required: true, 
        unique : true
    },
    item_price:{
        type: Number,
        required: true,
    },
    item_category:{
    	type: String,
      required: true
    }
});

module.exports = mongoose.model('Menu', menuSchema);