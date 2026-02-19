let express = require("express");
let mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./src/routes/usersRoutes")
const categoryRoutes = require("./src/routes/categoryRoutes")
const expenseRoutes = require("./src/routes/expenseRoutes")

let app = express() 

mongoose.connect("mongodb://localhost:27017/expenseRecorder")
.then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log(err)
})
app.use(cors())

app.use(express.json());
app.use("/users", userRoutes )
app.use("/category", categoryRoutes)
app.use("/expense", expenseRoutes )
let port = 8080;

app.listen(port, () =>{
    console.log("Server is running");

});

app.get("/", (req,res)=>{
    res.send({message: "Hello from server"})
})
