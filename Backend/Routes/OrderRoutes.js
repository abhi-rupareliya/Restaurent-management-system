const Orders = require('../Models/Orders')
const Table = require('../Models/Table')
const mongoose = require('mongoose')
module.exports = (app) => {
    app.post('/SaveOrder/:tabid', async (req, res) => {
        const table = req.params.tabid;

        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const ods = await Table.findOne({ tab_id: table })
                .populate({ path: "orders.item", select: ["item_name", "item_price"] });

            const newOrder = new Orders({
                table: table,
                orders: ods.orders,
                date_time: new Date()
            });

            const savedOrder = await newOrder.save({ session });

            await Table.findOneAndUpdate(
                { tab_id: table },
                { $set: { orders: [] } },
                { session, new: true }
            );

            await session.commitTransaction();
            session.endSession();

            res.status(200).send({ savedOrder });
        } catch (error) {
            await session.abortTransaction();
            session.endSession();

            console.error(error);
            res.status(500).send({ message: 'An error occurred while saving the order.' });
        }
    });

}