//Shaun McLaren 5,31,2013 Assignment: Functions wk4-Industry


var name = prompt("What word is usually in conjunction with the word Java?", "");
//Tells JavaScript to bring up a prompt window that asks, "What word is usually in conjunction with the word "Java" ?"

if (name == "script")
//This tells JavaScript that "if" the name is JavaScript, then it should perform the set of instructions below.
{
		document.write("<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />Wow!! You may actually be a programmer... <br /> <br />");
		//Tells JavaScript to write this on the page 
		function congratulate (strParam) 
		{
    alert(strParam);
}
 
setTimeout("congratulate('You have done well.')", 20000);
}
//I told JavaScript what my function was and what the parameters where and then when to execute my function.
var answer = prompt("What character goes on the outside of a prompt string?", "");

if (answer == ";")

{
	document.write("Checking your answer... <br /> <br /> <br />");

}
//I told JavaScript that the variable "answer" is to be the same as the input recieved from the user. if that input is equal to "yes" than it should write "Checking your answer" followed by three line breaks.
var name2 = prompt("What is your first name?", "");
//I tell Javascript that the variable name2 will come from user input.
document.write(name2 +", " + "The other programmers are waiting for you. The chat forum is located at programmersareus.com<br />");

//Then I tell JavaScript that "name2" should be used in conjunction with what i ask to be written on the page. By the way as far as I'm concerned, there is no programmmersareus.com

