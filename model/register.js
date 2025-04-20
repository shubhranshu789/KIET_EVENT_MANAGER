const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types

const registerSchema = new mongoose.Schema({
    teamName :{
        type : 'string',
        required : true
    },

    dept :{
        type : 'string',
        required : true
    },

// -----------------------------------------------------------

    Lname :{
        type : 'string',
        required : true
    },
    Lphone :{
        type : 'number',
        required : true
    },
    LuniId :{
        type : 'number',
        required : true
    },
    Lemail :{
        type : 'string',
        required : true
    },
    Lsection :{
        type : 'string',
        required : true
    },

// -------------------------------------------------


    M1name :{
        type : 'string',
        // required : true
    },
    M1phone :{
        type : 'number',
        // required : true
    },
    M1uniId :{
        type : 'number',
        // required : true
    },
    M1email :{
        type : 'string',
        // required : true
    },
    M1section :{
        type : 'string',
        // required : true
    },

// -------------------------------------------------


    M2name :{
        type : 'string',
        // required : true
    },
    M2phone :{
        type : 'number',
        // required : true
    },
    M2uniId :{
        type : 'number',
        // required : true
    },
    M2email :{
        type : 'string',
        // required : true
    },
    M2section :{
        type : 'string',
        // required : true
    },

// -------------------------------------------------


    M3name :{
        type : 'string',
        // required : true
    },
    M3phone :{
        type : 'number',
        // required : true
    },
    M3uniId :{
        type : 'number',
        // required : true
    },
    M3email :{
        type : 'string',
        // required : true
    },
    M3section :{
        type : 'string',
        // required : true
    },

// -------------------------------------------------
    M4name :{
        type : 'string',
        // required : true
    },
    M4phone :{
        type : 'number',
        // required : true
    },
    M4uniId :{
        type : 'number',
        // required : true
    },
    M4email :{
        type : 'string',
        // required : true
    },
    M4section :{
        type : 'string',
        // required : true
    },


    eventid: {
        type : ObjectId,
        ref : "EVENT"
    },

    leaderId : {
        type : ObjectId,
        ref : "USER"
    }
})



mongoose.model("REGISTER" ,registerSchema )