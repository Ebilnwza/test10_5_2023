const express = require('express');
const router = express.Router();
const db = require('../mongoDB/usermodel');

router.post('/', async (req, res) => {
    const UsernameSend = req.body.ID
    const passwordsend = req.body.password

    try {
        const data_from_db = await db.find();
        const user = data_from_db.find(item => item.Username === UsernameSend);

        if (user.Username===UsernameSend && user.Password === passwordsend) {
            res.redirect(`/home/${user._id}`);
            console.log('welcome')
            return;
        }


    } catch (error) {
        console.error('Error:', error);
        res.redirect(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
    }
});

router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;
