const Orders = require('../Models/Orders')
const Menu = require('../Models/Menu')
const mongoose = require('mongoose')

module.exports = function BillRoutes(app) {
    // app.get('/generate-bill/:table', async (req, res) => {
    //     // const table = await Table.findByID(req.params._id)

    //     try {
    //         const Orders = await Table.findOne({ table: table }).populate()  // ******
    //         const menu = await Menu.find()

    //         if (!Orders) {
    //             return res.status(404).send({ message: 'ErRoR' })
    //         }

    //         let total = 0
    //         const items = Orders.Orders.map(order => {
    //             const item_name = menu.findByID(item => item._id.toString() === Orders.item._id.toString())
    //             const itemTotal = item_name.item_price * Orders.quantity
    //             total += itemTotal

    //             return {
    //                 name: item_name.item_name,
    //                 price: item_name.item_price,
    //                 quantity: Orders.quantity,
    //                 total: itemTotal
    //             }
    //         })

    //         res.status(200).send({success: true, total
    //         })
    //     } catch (error) {
    //         console.error(error)
    //         res.status(500).send({ message: 'An error occurred while generating the bill.' })
    //     }
    // })
}