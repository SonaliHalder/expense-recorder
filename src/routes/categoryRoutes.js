const express = require('express')
const Authorization = require("../middlewares/Authorization")
const categoryModel = require("../models/CategorySchema")
const category = express.Router()

category.get("/",Authorization, async (req,res)=>{
   const user_id = req.tokendata.foundUser[0]._id;
   
   const data= await categoryModel.find({user_id})
   
    res.json({payload:data})
})

category.post("/", Authorization, async (req, res)=>{
    const {title} = req.body
    const user_id = req.tokendata.foundUser[0]._id;
    try {
            let createdCategory = await categoryModel.insertOne({title,user_id})
            console.log(createdCategory)
            res.status(201).json({ payload: createdCategory })
        } catch (error) {
            res.status(400).json({ message: "Error", error: error.message })
        }
    })

category.delete("/:category_id", Authorization, async (req, res) => {
    const  category_id  = req.params.category_id;
    console.log(category_id)
    try {
       
        let result = await categoryModel.deleteOne({_id:category_id })

        res.status(201).send({ message: "Deleted successfully", payload: result })
    } catch (error) {
        res.status(404).send({ message: "Server Error", error: error.message })
    }
})

module.exports = category