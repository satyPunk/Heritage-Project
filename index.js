import express from "express";
import bodyParser from "body-parser";
const app =express()
const port =3000
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"))
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
// app.get("/write",(req,res)=>{
//     res.render("write.ejs")
// })
// app.get("/read",(req,res)=>{
//     res.render("read.ejs")
// })

app.listen(port,()=>{
    console.log("port open")
})