<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Title</title>
<meta name="description" content="">
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="d/css/style.css">
</head>
<body>
<!--[if lt IE 7]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p><![endif]-->

<nav>
	<ul>
		<li id='a'><a href="about">About</a></li>
		<li id='b'><a href="web">Web</a></li>
		<li id='c'><a href="art">Art</a></li>
		<li id='d'><a href="other">Other</a></li>
	</ul>
</nav>

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

<script src="d/js/menu.js"></script>
<script src="d/js/jquery-2.1.0.min.js"></script>
<script src="d/js/custom.modernizr.js"></script>
<script src="d/js/html5shiv.js"></script>
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
</body>
</html>
