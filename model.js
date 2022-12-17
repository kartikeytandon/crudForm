const mongoose = require("mongoose")

const detailSchema = mongoose.Schema({
    name: String,
    age: Number, 
    college: String,
    email: String,
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports=mongoose.model("index",detailSchema);