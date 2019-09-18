<?php 
// массивы закодировалии и отправили в php
if($_GET["country"] == 1) echo json_encode(array("1" => "NEW York", "2" => "Boston"));
else if ($_GET["country"] == 2) echo json_encode(array("3" => "Lion", "4" => "Paris"));
?>