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

<<<<<<< HEAD

module.exports = mongoose.model('Order', orderSchema);
=======
module.exports = mongoose.model('Order',orderSchema);
>>>>>>> 5bc7015fdd002c7838c6110c02bfbce7c8ea3e75
