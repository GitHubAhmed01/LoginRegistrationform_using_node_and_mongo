const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
require("./db/conn");
const Registration = require("./registrations");

const view_path = path.join(__dirname,"../views");
console.log(view_path);
app.use(express.static(view_path));

app.set("view engine", "hbs");
app.set("views", view_path)

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/", (req, res) => {
   res.render("index"); 
});

app.get("/registration",(req, res)=>{
    res.render("registration");
});

app.get("/login", (req, res) => {
    res.render("login"); 
 });
 

app.post("/registration",async (req, res)=>{
    try {
        const userRegistration = new Registration({
            uname: req.body.uname,
            uemail: req.body.uemail,
            upassword: req.body.upassword,
            uphone: req.body.uphone
        });
        const registered = await userRegistration.save();
        res.status(201).render("index"); 
        console.log("npoy done!!!!s");

    } catch (error) {
        res.status(400).send(error);
        console.log("done!!!!s");
    }
})


app.post("/login",async (req, res)=>{
    try {
        const email = req.body.uemail;
        const password= req.body.upassword;
        //console.log(await Registration.findOne({uemail:email}));
        const useremail = await Registration.findOne({uemail:email});
        console.log(useremail);
        //console.log(useremail.password === upassword);
        if(useremail.upassword === password){
            res.status(201).render("index"); 
        }else{
            res.send("invalid login details");
        }

    } catch (error) {
        res.status(400).send("bad");
    }
})


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})