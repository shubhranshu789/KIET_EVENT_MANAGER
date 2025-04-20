const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types

const debateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        default : "Debate"
    },
    members:{
        type: Number,
        required: true,
        default : 1
    },
    desc:{
        type: String,
        required: true,
        default : "A debate is a structured argument between two opposing sides on a specific topic. One side (affirmative) supports the statement, while the other (negative) opposes it. Debates follow a format including opening statements, rebuttals, and conclusions. Each side presents evidence, counters arguments, and defends its stance. Effective debating requires strong reasoning, research, and public speaking skills. It is commonly used in education, politics, and public discussions to encourage critical thinking. The goal is not just to win but to persuade the audience or judges with logical and well-structured arguments, fostering deeper understanding of important issues."
    },
    startTime: {
        type: Date, 
        required: true, 
    },
    endTime: {
        type: Date, 
        required: true, 
    },
    pic: {
        type: String,
        required: true,
        // default: "no photo"
    },
    register: [{
        type: ObjectId,
        ref: "USER"
    }]
}, {
    timestamps: true 
});

mongoose.model("DEBATE", debateSchema);
