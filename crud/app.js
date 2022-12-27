const express = require('express');
const mongoose = require('mongoose');
const app = express();



// to connect with mongodb
const url = 'mongodb://localhost/CRUD'
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection

con.on('open', function(){
    console.log('connected....')
})
// to connect with mongodb

app.use(express.json());
app.use(require('./router')); //this is router middleware set up





app.listen(4000, () =>{
    console.log('server is started')
})