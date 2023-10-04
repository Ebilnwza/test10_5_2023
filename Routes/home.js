const  express  = require('express');
const router = express.Router();
const db = require('../mongoDB/Postsmodel');
const user = require('../mongoDB/usermodel');
router.get('/', async(req,res)=>{
    const data = await db.find()
     res.render('home',{data})
})
router.get('/:id', async(req,res)=>{
    const id = req.params.id
    const datauser = await user.findById(id)
    const data = await db.find()
    const username = datauser
     res.render('home',{data,username,id})
})


module.exports =router;