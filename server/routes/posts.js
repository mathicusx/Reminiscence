import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // specifies a callback function when someone acces "localhost:5000/"
    res.send('IT WORKS!');
});

export default router;