const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // register middleware which calls next after parsing

// Add a new middleware function
// will be executed for every incoming request
// next() allows the request to continue to the next middleware
// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next();
// }); 

app.use('/', (req, res, next) => {
    console.log("This always runs");
    next();
})

app.use(adminRoutes);
app.use(shopRoutes);

// app.use('/add-product', (req, res, next) => {
//     console.log("In another middleware!");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
//     //  we never called next so '/' route never gets called
// }); 

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//     console.log("In another middleware!");
//     res.send('<h1>Hello from Express!</h1>');
// }); 

// calls http.createServer and then calls listen
app.listen(3000);