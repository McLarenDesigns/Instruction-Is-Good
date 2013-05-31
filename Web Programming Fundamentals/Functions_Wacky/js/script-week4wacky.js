//Shaun Mcaren 5,31,2013 Assignment: Functions Wacky


var weightClass = prompt("How many pounds can you bench?", "");
//Tells JavaScript to bring up a prompt window that asks, "What is your last name?"

if (weightClass >= 200 )
//This tells JavaScript that "if" variable "weightClass" is greater than or equal to 200, then it should perform the set of instructions below.
{
		document.write("<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />Somebody likes their wheaties!! <br /> <br />");
		//Tells JavaScript to write this on the page 
		function pepTalk (strParam) 
		{
    alert(strParam);
}
 
setTimeout("pepTalk('You're ready to go out!! Woo her!!')", 15000);
}
//I told JavaScript what my function was and what the parameters where and then when to execute my function.
var answer = prompt("Do you feel the burn?", "Yes");

if (answer == "Yes")

{
	document.write("Smack your six pack!!! <br /> <br /> <br />");

}
//I told JavaScript that the variable "answer" is to be the same as the input recieved from the user. if that input is equal to "yes" than it should write "Smack your six pack!!!" followed by three line breaks.
var name2 = prompt("What is your name?", "");
//I tell Javascript that the variable name2 will come from user input.
document.write(name2 +", " + "when your pack is ready, you may venture outside to explore the village. Interact with any person you choose, but beware of shady characters. They will try to steal your gold!!");
//Then I tell JavaScript that "name2" should be used in conjunction with what i ask to be written on the page.

