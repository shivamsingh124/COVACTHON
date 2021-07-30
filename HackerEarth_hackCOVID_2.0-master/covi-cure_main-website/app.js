const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ "/public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://Divyansh_Jain:Divy2000@cluster0.5aalj.mongodb.net/registerDB", { useNewUrlParser: true ,  useUnifiedTopology: true });

const signupSchema= new mongoose.Schema({
  fullname: String,
  num: Number,
  email: String,
  add: String,
  category: String,
  vaccinated: String,
  msg: String

});

const Signup = mongoose.model("Signup", signupSchema);

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/signup", function(req,res){
  res.sendFile(__dirname+ "/Sign-Up.html")
});


app.get("/users", function(req,res){
  Signup.find({},function(err,users){
    if (err){
      console.log(err);
    } else{
      res.render("users", {users: users});
    }
  })
})

app.get("/report", function(req,res){
  res.sendFile(__dirname+"/report.html")
})


app.post("/signup", function(req,res){
  const newPerson = new Signup({
    fullname: req.body.fname,
    num: req.body.num,
    email: req.body.mail,
    add: req.body.add,
    category: req.body.category,
    vaccinated: req.body.vaccinated,
    msg: req.body.msg
  })
  Signup.insertMany([newPerson], function(err){
    if (err){
      console.log(err);
    } else{
      console.log("New sign-up added");
    }
  })
  res.redirect("/")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
})
