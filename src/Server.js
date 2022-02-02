const express=require("express");require("./db/conn");const Student=require("./models/students")
const app=express();const port=8080;app.use(express.json());const cors = require('cors');app.use(cors());

  app.get("/",async(req,res)=>{
   try{const studentsData=await Student.find()
       res.send(studentsData)      
   }catch(e){res.send(e)}})
 
   app.delete("/Students/:id",async(req,res)=>{
    try{const Pid=req.params.id
       const studentsData=await Student.findByIdAndDelete(req.params.id)
       res.send(studentsData)}
        catch(e){res.send(e)}})

  app.post("/Students",(req,res)=>{
  const user=new Student(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{res.send(e)})})

    app.put("/Students/:id",async(req,res)=>{
    try{const pid=req.params.id
        const studentsData=await Student.findByIdAndUpdate(pid,req.body)
        res.send(studentsData)
        console.log(pid)
        console.log(req.body)
        console.log(studentsData)
    }catch(e){res.send(e)}})

    app.listen(port,()=>{
    console.log("server is started")})