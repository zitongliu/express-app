const express = require('express');

const app = express();

// Add a new middleware function
// will be executed for every incoming request
// next() allows the request to continue to the next middleware
app.use((req, res, next) => {
    console.log("In the middleware!");
    next();
}); 

app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from Express!</h1>');
}); 

// calls http.createServer and then calls listen
app.listen(3000);