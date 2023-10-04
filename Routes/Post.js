const  express  = require('express');
const router = express.Router();
const db = require('../mongoDB/Postsmodel');
const user = require('../mongoDB/usermodel')
router.get('/:id', async(req,res)=>{
  const id = req.params.id;
  const data_from_db = await user.findById(id);
  const name = data_from_db.Username;
  res.render('createPost',{id,name})
})
router.post('/', async (req, res) => {
    const {author,title, content } = req.body;
    const id = req.body.id;
    try {
      const newdb = new db({
        author,
        title,
        content,
      });
      const savedPost = await newdb.save();
       res.redirect(`home/${id}`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });




module.exports =router;