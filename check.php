<?php
if($_POST['name'] == 'Admin')
	echo 'Fail';
else echo "Success! Welcome, " . $_POST['name'] . "!";
?>