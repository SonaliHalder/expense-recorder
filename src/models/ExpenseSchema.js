const mongoose = require("mongoose")
const expenseSchema= new mongoose.Schema({
    description:{
        type:String
    },
    amount:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        required:true
    },
    category_id:{
        type: mongoose.Schema.ObjectId,
        required:true
    },
    user_id:{
         type: mongoose.Schema.ObjectId,
        required:true
    }
    
})

const expenseModel= mongoose.model("expense", expenseSchema, "expense")

module.exports = expenseModel