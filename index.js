const express = require('express')
const mongoose = require('mongoose')
const app= express()
const playerRoute = require('./routers/user.routers')

app.get('/',(req,res)=>{
    res.send(`<h2>Home Page</h1>
    <h3><a href=/players>Go to players<a></h3>`)
})

app.use((error,req,res,next)=>{
    res.status(500).json({message: error.message,data: error.data})
})

// app.use(express.static('views'))
app.set('view engine', 'ejs');

app.use('/players',playerRoute)

mongoose.connect('mongodb+srv://obliraj700:admin124@cluster0.lvnsez8.mongodb.net/playerdb?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(()=>{console.log("Database Connected Succesfully")})
.catch(err => console.log(err))


app.listen(5001,()=>{
    console.log("Server running on port 5001")
})

