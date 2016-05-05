#alert
<script>
alert(“My Message Here”);
</script>

//alert
alert("text")

//prompt
prompt()

//generate document
document.write("Time to learn javascript")

//innerHTML
element.innerHTML="time to learn javascript";

//only one id=test
<body>
<h1 id="test">Tester</h1>
<script> document.getElementById('test').innerHTML="Hello World";
</script>

//console.log() only shown in console, help you debug the code 
console.log()

//show
console.log(“text”)

//length
“string”.length

//substring
"some word".substring(1, 3)

// Check if the user is ready to play!
confirm("I am ready to play!")
var age=prompt("what's your age")
if(age < 13)
{
    console.log("you're not allowed to play")
}
else{
    console.log("keep playing")
}

//storing data, case sensitive
var name;
name="Colleen";
//dont' do "colleen"=names;
var name=prompt("What is your name?")
document.write(name);
var data=Date();
var location=window.location;
console.log(location)
alert(data)

////variables
var name=prompt()
var name=Date()
var name=window.location

//var types: numeric, string, boolean, object,array
var num=window.width
var string="test"
var bollean=true
var object=document.getElementById('test')
//array 
var links=document.getElementsByTagName('a');
document.write(links[0]);

//function 
function welcomeMsg(msg) {
	alert(msg);
	var name=prompt("what's your name");
	return name
};


//put function in the head: use script tag 
<head>
<script>
function message(){
alert("This alert box");
}
</script>
</head>
<body>
message("msg");
</body>

//put function in an external file, link the file 
<head>
<script src="js/two-external.js"></script>
</head>
<body>
<script>
	messaeg();
</script>
</body>

//code placement: under html folder, having css, images, and js folders

//linking from an html file
<link rel="stylesheet" href="css/style.css">
<script "js/javaFUnctions.js"> </script>
<img src="images/myPicture.jpg"/>

//linking from a css file
background:url("../images/holiday.png");

//Events
//onclick
<div onclick="message()">clicking on this Div will invoke a javascript function </div>

//quotes 
<div onclick="message('Hi')">

