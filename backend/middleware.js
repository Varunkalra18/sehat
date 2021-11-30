import jwt from 'jsonwebtoken'
const auth = (req,res,next) => {
    console.log("I am varun from middleware");
    console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1] ;
    const user = jwt.verify(token,"secret1999g13")
    
    if(user == "client")
    {
        console.log(user)
        req.user = user ;
        next();
    }
    else{
        res.send({message:"Access Denied"})
    }

}
export default auth