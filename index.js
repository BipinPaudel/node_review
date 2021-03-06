var express=require("express"),
	mongoose= require('mongoose'),
	bodyParser = require('body-parser');

var db=mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

var app= express();

var port =process.env.PORT || 3000;
//install body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books',bookRouter);
//app.use('/api/authors',authorRouter);

app.get("/", function(req,res){
	res.send("Welcome to my api bwai");
});

app.listen(port,function(){
	console.log("Listening on port....", port);
});

