/*==================================================================*/
/* METHOD ONE: VERY BASIC WITH UNDERLINE TAGS 
/*==================================================================*/

// parses the url into an array variable named pathArray
var pathArray = window.location.pathname.split('/');

// if this repo was installed to a localhost dev directory so
// that the url was localhost/dev/menu-highlight ...

// in this case url is localhost/dev/menu-highlight/x
// where x = a menu item like art, other, about
// array[0] = localhost
// array[1] = dev
// array[2] = menu-highlight
// array[3] = x

// if path = x then underline menu item
// menu items are <li id="a"> etc
// getElementByID and rewrite innerHTML with underline tags

//we use document.write to show it is reading correctly and should be deleted


if (pathArray[3] == 'about') 
	{
	document.write("<span style='padding-left:40px'>path is about</span>");
	document.getElementById('a').innerHTML = '<u>About</u>';
	}
	if
	 (pathArray[3] == "web") 
	{
 	document.write("<span style='padding-left:40px'>path is web</span>");
 	document.getElementById('b').innerHTML = '<u>Web</u>';
	 }
	 if (pathArray[3] == "art") {
 	document.write("<span style='padding-left:40px'>path is art</span>");
 	document.getElementById('c').innerHTML = '<u>Art</u>';
	 };
	 if (pathArray[3] == "other") {
 	document.write("<span style='padding-left:40px'>path is other</span>");
 	document.getElementById('d').innerHTML = '<u>Other</u>';
	 };

/*==================================================================*/
/* METHOD TWO: CHANGE THE CSS CLASS
/*==================================================================*/

// if (pathArray[3] == 'about') 	{document.getElementById('a').className = "on";}
// if (pathArray[3] == "web")  	{document.getElementById('b').className = "on";}
// if (pathArray[3] == "other")	{document.getElementById('c').className = "on";}

// where the a tags are written like 

//<a id="a" class="off" href="about">about</a>

