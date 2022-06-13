

const mongoose = require('mongoose');

const connect =()=>{

    return mongoose.connect("mongodb+srv://Aditya07:Aditya07@freeclusterdatabase.so6y5.mongodb.net/Twitter-Design?retryWrites=true&w=majority")
}


module.exports = connect;