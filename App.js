const express = require('express')
const app = express()

const middleware1 = (req,res,next) => {
    console.log("Middleware 1");
    next()
}

const middleware2 = (req,res,next) => {
    console.log("Middleware 2");
    next()
}

app.use(middleware2)
app.get('/page1',middleware1, (req,res)=>{
    res.send("For Page 1 both middleware1 and middleware2 are applied");
    
})

app.get('/page2', (req,res)=>{
    res.send("Only middleware2 is applied for Page 2");
})

app.get('/page3', (req,res)=>{
    res.send("Only middleware2 is applied for Page 3");
})

app.get('/page4', (req,res)=>{
    res.send("Only middleware2 is applied for Page 4");
})

app.get('/page5', middleware1, (req,res)=>{
    res.send("For Page 5 both middleware1 and middleware2 are applied");
})

app.listen(8000,()=>{
    console.log("Server is live");
})
