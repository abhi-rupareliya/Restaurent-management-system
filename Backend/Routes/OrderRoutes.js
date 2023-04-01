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
                date_time: new Date().toISOString().substring(0, 10)
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

    //most selling 
    app.get('/st', async (req, res) => {
        let dt = new Date().toISOString().substring(0, 10)
        console.log(dt);
        const resp = await Orders.aggregate([
            { $unwind: '$orders' },
            {
                $group: {
                    _id: '$orders.item',
                    totalQuantity: { $sum: '$orders.quantity' }
                }
            },
            {
                $sort: { totalQuantity: -1 }
            },
            {
                $limit: 1
            }
        ])

        res.status(200).send(resp)
    })


    app.get('/st1', async (req, res) => {
        const dt = new Date().toISOString().substring(0, 10)
        console.log(dt)
        const resp = await Orders.aggregate([
            { $unwind: '$orders' },
            {
                $match: { date_time: new Date(dt) }
            },
            {
                $group: {
                    _id: '$date_time',
                    totalQuantity: { $sum: '$orders.quantity' }
                }
            },
            {
                $sort: { date_time: 1 }
            },
            {
                $limit: 1
            }
        ])

        res.status(200).send(resp)
    })


    //today most popular
    app.get('/st2', async (req, res) => {
        const dt = new Date().toISOString().substring(0, 10)
        console.log(dt)
        const resp = await Orders.aggregate([
            { $unwind: '$orders' },
            {
                $match: { date_time: new Date(dt) }
            },
            {
                $group: {
                    _id: "$orders.item",
                    totalQuantity: { $sum: '$orders.quantity' }
                }
            },
            {
                $sort: { totalQuantity: -1 }
            },
            { $limit: 1 }
        ])

        res.status(200).send(resp)
    })

    app.get('/orders', async (req, res) => {
        try {
            const tab = await Orders.find({}).select({table:1,date_time:1})
            res.status(200).send(tab)
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    })

    app.get('/orders/:id', async (req, res) => {
        try {
            console.log(req.params.id);
            const tab = await Orders.findOne({_id : req.params.id  }).select({_id:1})
                .populate({ path: "orders.item", select: ["item_name", "item_price"] })
            res.status(200).send(tab)
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    })
}