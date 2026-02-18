const express = require('express')
const Authorization = require("../middlewares/Authorization")
const expenseModel = require("../models/ExpenseSchema")
const expense = express.Router()

expense.get("/", Authorization,  async (req, res)=>{
        const user_id = req.tokendata.foundUser[0]._id;
       
       const data= await expenseModel.find({user_id})
       
        res.json({payload:data})
})

expense.post("/", Authorization, async(req, res)=>{
    try {
        const{description, amount, created_at, category_id} = req.body
        const user_id = req.tokendata.foundUser[0]._id
        const expensedata={
            description, amount, created_at, category_id, user_id}
      
            let createdExpense = await expenseModel.insertOne(expensedata)
            console.log(createdExpense)
            res.status(201).json({ payload: createdExpense })
        } catch (error) {
            res.status(400).json({ message: "Error", error: error.message })
        }
    })

expense.delete("/:id", Authorization, async (req, res)=>{
   const eId = req.params.eId; 

   console.log(eId)
       try {
          
           let result = await expenseModel.deleteOne({_id:eId })
   
           res.status(201).send({ message: "Deleted successfully", payload: result })
       } catch (error) {
           res.status(404).send({ message: "Server Error", error: error.message })
       }
   })
expense.get("/filter", (req, res)=>{
    const {eId, from, to} = req.query;
    res.send(`expense of id ${eId} from ${from} to ${to}has been deleted`) 
})

expense.put("/", (req, res)=>{
    res.send({message:"These are updates expenses"})
})
module.exports = expense