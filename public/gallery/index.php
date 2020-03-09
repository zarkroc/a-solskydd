<?php
header('Content-type: application/json');
echo json_encode(glob("*.{jpg,gif,png}", GLOB_BRACE ));
?>