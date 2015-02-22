var express = require("express"),
	http = require("http"),
	app = express(),
	toDos = [
		{ 

			"description" : "Get groceries",
			"tags" : [ "Shopping", "Chores" ]
		},
		{
			"description" : "Make up some new ToDos",
			"tags" : [ "Writing", "Work" ]
		},
		{
			"description" : "Prep for Monday's class",
			"tags" : [ "Work", "Teaching" ]
		},
		{
			"description" : "Answer emails",
			"tags" : [ "Work" ]
		},
		{
			"description" : "Take Gracie to the park",
			"tags" : [ "Chores", "Pets" ]
		},
		{
			"description" : "Finish writing this book",
			"tags" : [ "Writing", "Work" ]
		}
]

app.use(express.static(__dirname + "/client"));

//tell Express to parse incoming
//JSON objects
//app.use(express.urlencoded());

http.createServer(app).listen(3000);

//This route takes the place of our
//todos.json file in our example from
//chapter 5
app.get("/todos.json", function (req, res){
	res.json(toDos);
});

app.post("/todos", function (req, res){
	//the object is now stored in req.body
	var newToDo = req.body;

	console.log(newToDo);

	toDos.push(newToDo);

	//send back a simple object
	res.json({"message":"You posted to the server!"});
});