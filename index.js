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
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/booking",(req,res)=>{
    res.render("booking.ejs");
})
app.get("/booking/agra",(req,res)=>{
    res.render("contact.ejs");
})
app.get("/meow",(req,res)=>{
    res.render("meow.ejs");
})

app.listen(port,()=>{
    console.log("port open")
})