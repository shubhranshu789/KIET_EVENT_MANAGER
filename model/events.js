const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    members:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    endTime: {
        type: Date, 
        required: true, 
    },
    pic: {
        type: String,
        required: true,
    },
    register: [{
        type: ObjectId,
        ref: "USER"
    }]

}, {
    timestamps: true 
});

mongoose.model("EVENT", eventSchema);
