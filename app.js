const express = require('express');
const cors = require('cors');
const path = require("path") 



const port = 5000;
const app = express();

app.use(cors())
require('./model/teacher')
require('./model/participats')
require('./model/events')
require('./model/register')
require('./model/debate')



app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/activity'))
app.use(require('./routes/litetaryEvents'))



app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})



const mongoose = require('mongoose');
const {mongoURl}  = require('./keys');


mongoose.connect(mongoURl)


mongoose.connection.on("connected" , () => {
    console.log("Mongoose is connected");
})

mongoose.connection.on("error" , () => {
    console.log("Mongoose is not connected");
})



app.use(express.static(path.join(__dirname , "./frontend/build")))

app.get("*"  ,(req,res)=> {
    res.sendFile(
        path.join(__dirname , "./frontend/build/index.html"),

        function(err){
            res.status(500).send(err)
        }
    )
})