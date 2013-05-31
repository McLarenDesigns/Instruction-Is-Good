//Shaun Mcaren 5,31,2013 Assignment: Functions wk4-Personal


var name = prompt("What is your last name?", "");
//Tells JavaScript to bring up a prompt window that asks, "What is your last name?"

if (name == "Silvay")
//This tells JavaScript that "if" the name is Silvay, then it should perform the set of instructions below.
{
		document.write("<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />Wow!! Could this be the wise and great one from the honorable Silvay family?... <br /> <br />");
		//Tells JavaScript to write this on the page 
		function beginnersPack (strParam) 
		{
    alert(strParam);
}
 
setTimeout("beginnersPack('You have received 20 Scrolls, 30 Arrows, Beginners armor, and a letter from Lord Yoshuba.')", 15000);
}
//I told JavaScript what my function was and what the parameters where and then when to execute my function.
var answer = prompt("Is it you?", "Yes");

if (answer == "Yes")

{
	document.write("Preparing your beginners pack <br /> <br /> <br />");

}
//I told JavaScript that the variable "answer" is to be the same as the input recieved from the user. if that input is equal to "yes" than it should write "Preparing your beginners pack" followed by three line breaks.
var name2 = prompt("What is your first name?", "");
//I tell Javascript that the variable name2 will come from user input.
document.write(name2 +", " + "when your pack is ready, you may venture outside to explore the village. Interact with any person you choose, but beware of shady characters. They will try to steal your gold!!");
//Then I tell JavaScript that "name2" should be used in conjunction with what i ask to be written on the page.

