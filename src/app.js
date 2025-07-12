const express =  require('express');


const app = express(); 

app.use("/test",(req,res)=>{
    res.send("helo from server");
})
app.use("/hello",(req,res)=>{
    res.send("helo");
})
app.listen(3000,()=>{
    console.log("server is sucessfully listning on port 3000")
});