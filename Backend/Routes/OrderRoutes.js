const path = require('path')
const Table = require('../Models/Order')
function OrderRoutes(app)
{
    app.get('/',async(req,res) => {
        try {
            





            // res.status(200).send({ success: true, order })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('error');
        }
    })
}