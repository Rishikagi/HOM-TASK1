const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const ejsMate = require("ejs-mate");
app.engine("ejs",ejsMate);

port = 8080;
app.listen(port,()=>{
    console.log("App is Listining");
});
//index route    
app.get("/",async (req, res) => {
    res.send("hiii");
});

//login 
app.get("/login",async(req,res)=>{
    
    res.render("./login.ejs");
    });


//signup
app.get("/signup",async(req,res)=>{
    
    res.render("./signup.ejs");
    });

// Paasword reset
app.get("/reset",async(req,res)=>{
    
        res.render("./reset.ejs");
        });


