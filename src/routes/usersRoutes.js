const express = require('express')
const jwt = require("jsonwebtoken")
const userModel = require("../models/UserSchema")

const user = express.Router()

user.post("/signup", async (req, res) => {
    try {
        let createdUser = await userModel.insertOne(req.body)
        console.log(createdUser)
        res.status(201).send({ payload: createdUser })
    } catch (error) {
        res.status(400).send({ message: "Error", error: error.message })
    }
})

user.post("/login", async (req, res)=>{
    let {email, password} = req.body
    const foundUser = await userModel.find({email, password},{name: 1})
    console.log(foundUser)
    if (foundUser.length==1) {
           const token = jwt.sign({ foundUser}, 'sonali@1609',{ expiresIn: '15m' })
        res.status(200).json({ message: "Login Successful", token: token })
        }
     else{
        res.status(404).json({ message: "Login Unsuccessfull" })
    }
})


user.get("/profile",(req,res)=>{
    res.send({message:"This is my profile"})
})
user.get("/", async (req,res)=>{
    const data= await userModel.find()

    res.send({payload:data})
})
module.exports = user