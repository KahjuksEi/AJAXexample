<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="text" id="name" placeholder="введите имя">
	<input type="button" id="done" value="готово">
	<p id="load" style="cursor: pointer">Загрузить данные</p>
	<div id="information"></div>

	<label>Укажите страну:</label>
	<select name="country">
		<option value="0" selected="selected"></option>
		<option value="1">Америка</option>
		<option value="2">Франция</option>
	</select>
	<label>Города:</label>
	<select name="city">
		<option value="0"></option>
	</select>

	<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="script.js"></script>
</body>
</html>