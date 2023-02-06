const bcryptjs = require('bcryptjs')
const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const jwt_sec = "aa_secret_string_chhe"
function UserRoutes(app) {
    app.get('/', (req, res) => {
        res.send("GET REQ.")
    })

    app.post('/signup', async (req, res) => {
        try {
            const userName = req.body.userName
            const password = req.body.password
            const email = req.body.email
            const role = req.body.role
            const securePassword = await bcryptjs.hash(password, 3)

            const createUser = new User({
                userName: userName,
                password: securePassword,
                email: email,
                role: role
            })
            const created = await createUser.save()
            const data = {
                user: {
                    id: createUser.id,
                    role : createUser.role
                }  
            }
            const authtoken = jwt.sign(data, jwt_sec)
            res.status(200).send({success : true ,authtoken })
        } catch(err) {
            res.status(400).send({success:false,err})
        }
    })

    app.post('/login',async(req,res)=>{
        try {
            const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email : email})
        if(user)
        {
            const isMatch = await bcryptjs.compare(password,user.password)
            if(isMatch)
            {
                const data = {
                    user: {
                        id: user.id,
                        role : user.role
                    }
                }
                const authtoken = jwt.sign(data,jwt_sec)
                res.status(200).send({success : true ,authtoken})
            }
            else{
                res.status(400).send({success : false,message:"Invalid Credential"})
            }
        }
        else
        {
            res.status(400).send({success : false,message:"Invalid Credential"})
        }
        } catch (error) {
            res.status(400).send({success : false,error})
        }
    })
}
module.exports = UserRoutes