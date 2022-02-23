const express=require("express");
const app=express();

app.get("/",function(req,res){
res.send("<h1>this data should be rendered on the browser!</h1>"); 
})

app.get("/contact",function(req,res){
    res.send("<h1>my email is shaffkhany@gmail.com</h1>"); 
    })

    app.get("/about",function(req,res){
        res.send("<h1>hi! my name is shaff and im a full stack developer.!</h1>"); 
        })


app.listen(3000,function(){
    console.log("shaff's first server");
})