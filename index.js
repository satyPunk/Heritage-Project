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
app.get("/home",(req,res)=>{
    res.render("home.ejs");
})
app.get("/booking",(req,res)=>{
    res.render("index.ejs");
})
app.get("/booking/sirpur",(req,res)=>{
    res.render("sirpur.ejs");
})
app.get("/booking/maipat",(req,res)=>{
    res.render("mainpat.ejs");
})
app.get("/meow",(req,res)=>{
    res.render("meow.ejs");
})

app.listen(port,()=>{
    console.log("port open")
})