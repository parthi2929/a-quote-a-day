//1. Import the express module
var express=require('express');

//2. Initiate the express object and assign to another
var app = express();

//3. Define express get method's callback
app.get("/",

    function(request,response)
    {
        //4. we will send this HTML file..
        response.sendFile(__dirname + "/index.html");
    }

)

//4. Decide a port number
var port = process.env.PORT || 8080;

//5. Server is just going to sit and listen
var server = app.listen(port,

    function(request,response)
    {
        //6. Indication on server side what server is doing..
        console.log("Catch the action at http://localhost:" + port);
    }
)