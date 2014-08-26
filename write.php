<?php
	$filename = $_REQUEST['filename'];
	$contents = $_REQUEST['contents'];

	$myfile = fopen($filename, "w") or die("Unable to open file!");
	fwrite($myfile, $contents);
	fclose($myfile);
?>
