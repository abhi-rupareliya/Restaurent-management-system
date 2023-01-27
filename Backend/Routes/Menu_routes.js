const Menu = require('../models/Menu_schema')
function MenuRoutes(app){
    app.get('/', (req, res) => {
        res.send('menu_get')
        })

    app.post('/add_item', async(req, res) => {
        try{
            const item_name = req.body.item_name
            const item_price = req.body.item_price
            const item_category = req.body.item_category
            const menu = new Menu({
                item_name: item_name,
                item_price: item_price,
                item_category: item_category
            })
            const result = await menu.save()
            res.status(201).send({success : true , item:result})
        }
        catch(e){
            res.status(400).send({success : false , error:e})
        }
    })
    
    app.get('/get_menu', async (req, res) => {
        try {
            const array_item = await Lists.find()
            res.json(array_item)
        }
        catch (error) {
            res.status(501).send({ error: "server error" })
        }
    });  
}
module.exports = Menu_routes
