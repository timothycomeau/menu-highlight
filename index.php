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


<nav>
	<ul>
		<li id='a'><a href="about">About</a></li>
		<li id='b'><a href="web">Web</a></li>
		<li id='c'><a href="art">Art</a></li>
		<li id='d'><a href="other">Other</a></li>
	</ul>
</nav>

<div id="display">

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
</div>

<script src="d/js/menu.js"></script>
<script src="d/js/custom.modernizr.js"></script>
<script src="d/js/html5shiv.js"></script>

</body>
</html>
