const Orders = require('../Models/Orders')
const Table = require('../Models/Table')
const mongoose = require('mongoose')
const easyinvoice = require('easyinvoice')
const path = require('path')
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
        let dt = new Date().toISOString().substring(0, 10);
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
        ]);

        // Fetch the most selling item name from the aggregation result
        const mostSellingItem = await Orders.populate(resp, { path: '_id', select: 'item_name' });

        // Add the item_name property to the aggregation result
        const respWithItemName = resp.map(result => {
            return { ...result, item_name: mostSellingItem[0]._id.item_name };
        });

        res.status(200).send(respWithItemName);

    })

    // todays selling 
    app.get('/st1', async (req, res) => {
        const dt = new Date().toISOString().substring(0, 10)
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
            { $sort: { date_time: 1 } },
            { $limit: 1 }
        ])

        res.status(200).send(resp)
    })


    app.get('/st2', async (req, res) => {
        try {
            const orders = await Orders.find();
            let totalQuantity = 0;
            orders.forEach(order => {
                order.orders.forEach(orderItem => {
                    totalQuantity += orderItem.quantity;
                });
            });
            res.status(200).json({ totalQuantity });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    })

    app.get('/orders', async (req, res) => {
        try {
            const orders = await Orders.aggregate([
                { $unwind: "$orders" },
                {
                    $group: {
                        _id: "$_id",
                        totalQuantity: { $sum: "$orders.quantity" },
                        date_time: { $first: "$date_time" }
                    }
                },
                {
                    $project: {
                        _id: "$_id",
                        netQuantity: "$totalQuantity",
                        date_time: 1
                    }
                }
            ]);
            res.status(200).send(orders);
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    });


    app.get('/orders/:_id', async (req, res) => {
        try {
            const tab = await Orders.findOne({ _id: req.params._id }).populate({ path: "orders.item" })
            res.status(200).send(tab)
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    })

    app.get('/bill/:_id', async (req, res) => {
        try {
            const orderId = req.params._id;
            const order = await Orders.findById(orderId).populate({ path: 'orders.item', select: ["item_name", "item_price"] });

            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }

            const data = {
                "images": {
                    "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
                },

                "sender": {
                    "company": "Resaturent ABC",
                    "address": "New 150ft Road",
                    "zip": "360004",
                    "city": "Rajkot",
                    "country": "India"
                },

                "information": {
                    "number": order._id,
                    "date": order.date_time.toISOString().substring(0, 10),
                },

                "products": order.orders.map((orderItem) => ({
                    "quantity": orderItem.quantity,
                    "description": orderItem.item && orderItem.item.item_name ? orderItem.item.item_name : '',
                    "tax": {
                        "taxNotation": "gst", // Set the tax notation (e.g. 'vat', 'gst', etc.)
                        "taxAmount": 10 // Set the tax amount in percentage
                    },
                    "price": orderItem.item && orderItem.item.item_price ? orderItem.item.item_price : 0
                })),

                "bottom-notice": "Thank you for visiting us.",

                "settings": {
                    "currency": "INR",
                    "height": "800px",
                    "width": "400px",
                }
            };

            const result = await easyinvoice.createInvoice(data);
            const pdf = new Buffer.from(result.pdf, 'base64');

            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=invoice_${orderId}.pdf`);
            res.send(pdf);

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
}