const auth = (req,res,next)=>{
     console.log("check auth suessfully");
  const token = "xyz";
  const isUser = token === "xyz";
  if (!isUser) {
    res.status(401).send("Unautherized");
  } else {
    next();
  }
}

module.exports={auth};