const express = require("express")
const app = express()

// Importing EJS
const ejs =require("ejs");
app.set('view engine', 'ejs');

// Importing Mongoose 
const mongoose = require('mongoose')

// Requiring Model.js
var detail = require("./model")

// Requiring Mailer/Nodemailer
const mailRes = require('./mailer.js')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

// Making Connection 
mongoose.connect("mongodb+srv://kartikeytandon:kartikeytandon@cluster0.mj9rdyt.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connections Successful"))
.catch((err) => console.log("Connection unsuccessful" + err))


app.post('/', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let college = req.body.college;
    let email = req.body.email;
    var f={name: name,age:age ,college:college, email: email};
    detail.create(f,function(err,newlyCreatedForm){
		if(err)
		{
		    console.log(err);
		}else{
            let sentTo = email
            let subject = "Hi, there!"
            let content = "Hello " + name + "!" + " Thankyou for taking out time to check my Miniproject. Have a good day!"
            let response = mailRes.sentMail(sentTo,subject,content)

	        res.render("result.ejs")
		}
	});
})



app.listen(3000, function() {
    console.log("Server started on port 3000");
});
