const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    userName:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    //add IP
    ip:{
        type: String,
        require:true
    }
})



mongoose.model("TEACHER" ,teacherSchema )