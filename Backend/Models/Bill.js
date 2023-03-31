const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BillSchema = new Schema({
    tab_id: {
        type: String,
        required: true
    },
    bill_items:[{
        item : {
            type : mongoose.Schema.Types.ObjectId,
            ref:'Menu'
        },
        quantity : {
            type: number,
            required: true
        }
    }],
    total_bill : {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Bill', BillSchema);