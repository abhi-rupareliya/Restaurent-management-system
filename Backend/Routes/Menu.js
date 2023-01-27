function Menu(app) {
    app.get('/',(req,res)=>{
        res.send("GET MENU")
    })
}
module.exports = Menu