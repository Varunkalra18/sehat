import jwt from 'jsonwebtoken'
const auth = (req,res,next) => {
    console.log("I am varun from middleware");
    const token = req.headers.authorization.split(" ")[1] ;
    const user = jwt.verify(token,"secret199913")
    if(user.type === "client")
    {
        console.log(user)
        req.user = user ;
        next();
    }
    else{
        res.send("Access Denied")
    }

}
export default auth