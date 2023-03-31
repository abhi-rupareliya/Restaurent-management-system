const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    table: {
        type: String,
        required: true
    },
    orders: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
        quantity: Number
    }],
    date_time: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('Order', orderSchema);