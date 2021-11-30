import jwt from 'jsonwebtoken'
const adAuth = (req,res,next) =>{
    console.log("I am varun from Admin middleware");
    console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1] ;
    const user = jwt.verify(token,"secretg13")
    if(!user)
    {
        res.send({message:"Invalid users"})
    }
    if(user == "Admin")
    {
        console.log(user)
        next();
    }
    else{
        res.send("Access Denied")
    }
    
}
export default adAuth