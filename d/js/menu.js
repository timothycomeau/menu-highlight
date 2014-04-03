// parses the url into an array variable named pathArray
var pathArray = window.location.pathname.split('/');


// if this repo was installed to a localhost dev directory so
// that the url was localhost/dev/menu-highlight ...

// in this case url is localhost/dev/menu-highlight/x
// where x = a menu item like art, other, about
// array[0] = localhost
// array[1] = dev
// array[2] = js-url
// array[3] = x


// if path = x then underline menu item
// menu items are <li id="a"> etc
// getElementByID and rewrite innerHTML with underline tags

//we use document.write to show it is reading correctly and should be deleted


if (pathArray[3] == 'about') 
	{
	document.write("path is about");
	document.getElementById('a').innerHTML = '<u>About</u>';
	}
	if
	 (pathArray[3] == "web") 
	{
 	document.write("path is web");
 	document.getElementById('b').innerHTML = '<u>Web</u>';
	 }
	 if (pathArray[3] == "art") {
 	document.write("path is art");
 	document.getElementById('c').innerHTML = '<u>Art</u>';
	 };
	 if (pathArray[3] == "other") {
 	document.write("path is other");
 	document.getElementById('d').innerHTML = '<u>Other</u>';
	 };
