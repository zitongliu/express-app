const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// router.get('/add-product', (req, res, next) => {
//     console.log("In another middleware!");
//     res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
//     //  we never called next so '/' route never gets called
// }); 

// router.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); 

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;