const Table = require('../Models/Table');
function TableRoutes(app) {
    app.post('/add_table', async (req, res) => {
        try {
            const { tab_id } = req.body;

            const existingTable = await Table.findOne({ tab_id });
            if (existingTable) {
                return res.status(400).json({ error: 'Table already exists' });
            }

            const newTable = new Table({
                tab_id,
                orders: []
            });

            const savedTable = await newTable.save();
            res.status(201).json({ savedTable, success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error', success: false });
        }
    });

    app.put('/add_order/:tab_id', async (req, res) => {
        try {
            const { item, quantity } = req.body
            const { tab_id } = req.params

            const table = await Table.findOneAndUpdate(
                { tab_id },
                { $push: { orders: { item, quantity } } },
                { new: true }
            );

            res.status(200).send({ success: true, table })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

    app.put('/tablesUpdate/:id', async (req, res) => {
        try {
            const updatedItems = req.body.orders
            const tab_id = req.params.id
            const table = await Table.findOneAndUpdate(
                { tab_id },
                { $set: { orders: updatedItems } }
            );

            res.status(200).send({ success: true, table })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    })

    app.get('/getTabs', async (req, res) => {
        try {
            const tables = await Table.find({})
            res.status(200).send(tables)
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    })
    app.get('/get_det/:tab_id', async (req, res) => {
        try {
            const { tab_id } = req.params

            const tab = await Table.findOne({ tab_id })
                .populate({ path: "orders.item", select: ["item_name", "item_price"] })
            if (!tab) {
                res.status(400).send({ error: "table not found.", success: false })
            }
            res.status(200).send(tab)
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');
        }
    })
}

module.exports = TableRoutes;