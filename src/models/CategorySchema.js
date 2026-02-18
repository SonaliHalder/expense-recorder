const mongoose = require("mongoose")
const categorySchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
        required:true
    }

})

const categoryModel= mongoose.model("category", categorySchema, "category")

module.exports = categoryModel