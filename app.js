const express =require('express');
const app=express()
const path =require('path');
const fs = require("fs");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    fs.readdir("./file",function(err,file){
        console.log(file)
        res.render("index.ejs",{file:file});

    })
})
app.listen(3000);