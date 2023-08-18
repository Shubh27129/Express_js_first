// const http= require('http')

const express= require('express');

const app= express();

app.use((req, res, next)=>{
    console.log('In the Middleware')
    next()                          //Allows the request to continue to next middleware in line
})

app.use((req, res, next)=>{
    console.log('In the another Middleware')
    res.send('<h1>Express js Tutorial</h1>')
    
})

// const server = http.createServer(app);

// server.listen(3001);

app.listen(3001);