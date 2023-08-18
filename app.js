// const http= require('http')

const express= require('express');

const bodyParser= require('body-parser')

const app= express();

app.use(bodyParser.urlencoded({extended: false}));



// app.use((req, res, next)=>{
//     console.log('In the Middleware')
//     next()                          //Allows the request to continue to next middleware in line
// })


app.use('/add-product',(req, res, next)=>{
    // console.log('In product page Middleware')
    res.send('<form action="/product" method="POST"><label>Name of Product: </label><input type="text" name="title"><label>Size of Product: </label><input type="text" name="size"><button type="submit">Add Product</button></form>')
    
})

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next)=>{
    // console.log('In the another Middleware')
    res.send('<h1>Express js Tutorial</h1>')
    
})


// const server = http.createServer(app);

// server.listen(3002);

app.listen(3000);