var clickcount = 0;
var content1 = "Before we begin, I want to make sure that you are of human species. ";
var content2 = "Your first task, collect 5 coins. "; 
var content3 = "Now you have proved that you are a human being!<span style = 'font-size: 0.6em; line-height: 10px;'> <br> (Which doesn't. The program )</span>";
var coinValue = 0;
var width;
var height;

function hello()
{
	clickcount++;
	switch (clickcount)
	{
		case 1: changeContent1();
		break;
		case 2: changeContent2();
		break;
	}
}

function changeContent1()
{
	document.getElementById('centerText').innerHTML = content1;//fade in fade out?
	document.getElementById('skip').style.visibility = 'visible';
}

function changeContent2()
{
	document.getElementById('centerText').innerHTML = content2;
	document.getElementById('coin').style.visibility = 'visible';
	document.getElementById('score').style.visibility = 'visible';
	document.getElementById('coin').style.left = (Math.random()*70+15)+"vw";
	document.getElementById('coin').style.top = (Math.random()*70+15)+"vh";
}

function coin()
{

	coinValue+=20;
	if (coinValue < 100)
	{
		switch (coinValue)
		{
			case 20:
				document.getElementById('score').innerHTML = "<img src='images/stack1.png'> " + coinValue;
				break;
			case 40: 
				document.getElementById('score').innerHTML = "<img src='images/stack2.png'> " + coinValue;
				break;
			case 60:
				document.getElementById('score').innerHTML = "<img src='images/stack3.png'> " + coinValue;
				break; 
			case 80:
				document.getElementById('score').innerHTML = "<img src='images/stack4.png'> " + coinValue;
				break; 
		}
		document.getElementById('coin').style.left = (Math.random()*70+15)+"vw";
		document.getElementById('coin').style.top = (Math.random()*70+15)+"vh";
	}
	else
	{
		document.getElementById('score').innerHTML = "<img src='images/stack5.png'> " + coinValue;
		document.getElementById('coin').style.visibility = "hidden";
		document.getElementById('centerText').innerHTML = content3;
	}

}