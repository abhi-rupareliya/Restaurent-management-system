const { listIndexes, findById } = require('../models/Menu_schema')
const Menu = require('../models/Menu_schema')
module.exports = function MenuRoutes(app){
    
    // add the items of menu

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
    
    // get the items of menu

    app.get('/get_menu', async (req, res) => {
        try {
            const array_item = await Menu.find()
            res.json(array_item)
        }
        catch (error) {
            res.status(401).send({ error: "server error" })
        }
    })

    // update the items in Menu

    app.put('/UpItem/:id', async (req,res) => {
        
        try{
            const tpi = {};
            const itName = req.body.item_name;
            const itPrice = req.body.item_price;
            const itCat = req.body.item_category;
            if(itName){tpi.item_name = itName}
            if(itName){tpi.item_price = itPrice}
            if(itName){tpi.item_category = itCat}

            const tempIt = await Menu.findById (req.params.id)
            if(!tempIt){
                res.status(400).send({success : false, error : "Item not found"})
            }
            await Menu.findByIdAndUpdate(tempIt._id, {$set: tpi}, {runValidators : false})
            const updt = await Menu.findById (tempIt._id)
            res.status(200).send({success : true, updated : updt})
        }catch(e){
            res.status(400).send({success : false, error : e})
        }
    })

    // Delete the Item name and price from Menu

    app.delete('/delete_menu/:id', async(req,res) => {
        try{
            const temp = await Menu.findById(req.params.id)
            if(!temp){res.status(400).send({success : false, error : "Item not found"})}

            const deleteItem = await Menu.findByIdAndDelete(req.params.id)
            res.status(200).send({success : true})
        }
        catch(error){
            res.status(400).send(error._message)
        }
    })
}