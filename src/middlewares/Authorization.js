const jwt = require("jsonwebtoken")
const Authorization = (req, res, next)=>{ 
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1]
   
    try{
       
        const tokendata = jwt.verify(token, 'sonali@1609')
        req.tokendata = tokendata
        next()
    }
        catch (error) {
        res.status(401).json({ message: "Invalid or expired token" , error});
    }
    
} 
module.exports = Authorization