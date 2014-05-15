Menu-Highlight
==============

Basic example website to show how to highlight menu items with javascript, where menu items are PHP includes.

[Example](http://timothycomeau.com/dev/menu-highlight/)

.htaccess runs a clean url rewrite

```
RewriteEngine On

RewriteRule ^about$ ?page=about  [L]
RewriteRule ^web$ ?page=web  [L]
RewriteRule ^art$ ?page=art  [L]
RewriteRule ^other$ ?page=other  [L]
```

index.php run a switch function 

```php
<?php switch ( $_GET['page'] ) {

case 'about':
include ('one.php') ;
break;

case 'web':
include ('two.php') ;
break;

case 'art':
include ('three.php');
break;

case 'other':
include ('four.php');
break;

}
?>
```

menu.js parses the url and getElementbyId the a tag to change it's CSS class

```js
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


if (pathArray[3] == 'about') 
	{
	document.write("<span style='padding-left:40px'>path is about</span>");
	document.getElementById('a').innerHTML = '<u>About</u>';
	}
```
