<?php

	//Ref: https://www.php.net/manual/en/function.imagecrop.php

	$im = imagecreatefrompng($_GET['img']);
	//$im2 = imagecrop($im, ['x' => $_GET['x'], 'y' => $_GET['y'], 'width' => $_GET['width'], 'height' => $_GET['height']]);
	$im2 = imagecrop($im, ['x' => $_GET['x'], 'y' => $_GET['y'], 'width' => $_GET['width'], 'height' => $_GET['height']]);
	if ($im2 !== FALSE) {
		header('content-type: image/png');
		imagepng($im2);
		imagedestroy($im2);
	}
	imagedestroy($im);
	