let SecretNumber=getRandomInt(1,10);
let a=3
function getRandomInt(min,max)
{
	return Math.floor(Math.random()*(max-min+1))+min
}
document.querySelector(".check").onclick=function()
{
	let UserNumber=document.querySelector(".number").value
	if (UserNumber==SecretNumber)
	{
		//alert("Хороооош! Угадал!")
		document.querySelector(".hint").innerHTML="Хороооош! Угадал! Но пора играть в КС"
	}
	if (UserNumber>SecretNumber)
	{
		//alert("Число больше чем загаданное:(")
		document.querySelector(".hint").innerHTML="Число больше чем загаданное:("
	}
	if (UserNumber<SecretNumber)
	{
		//alert("Число меньше чем загаданное:)")
		document.querySelector(".hint").innerHTML="Число меньше чем загаданное:("
	}
	a=a-1
	document.querySelector(".attempts").innerHTML=a
	if (a==0)
	{
		document.querySelector(".number").disabled=true;
		document.querySelector(".check").disabled=true;
	}
}
document.querySelector(".start").onclick=function()
{
	SecretNumber=getRandomInt(1,10)
	a=3
	document.querySelector(".hint").innerHTML="Я буду подсказывать!"
	document.querySelector(".attempts").innerHTML=a
	document.querySelector(".number").disabled=false;
	document.querySelector(".check").disabled=false;
	document.querySelector(".number").value=""
	document.querySelector(".number").focus()
}
