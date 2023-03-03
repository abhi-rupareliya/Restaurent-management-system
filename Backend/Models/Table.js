const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TableSchema = new Schema({
    tab_id: {
        type: String,
        required: true
    },
    orders:[{
        item : {type : mongoose.Schema.Types.ObjectId,ref:'Menu'},
        quantity : Number
    }]
});

module.exports = mongoose.model('Table', TableSchema);