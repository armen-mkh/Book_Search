const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooksdb', 
{
    useCreateIndex: true,
    useNewUrlParser:false
})

app.use(routes)

app.listen(PORT, ()=>{
    console.log('app is running on port '+PORT)
})
