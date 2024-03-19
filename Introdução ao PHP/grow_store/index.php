<?php
require_once("./model/user.php");
require_once('./data/user_data.php');

$newUser = new User('pedro','pedro@bol.com','1234');
$newUser2 = new User('José','jose@bol.com','5555');
$userData = $newUser->add($userData);
// $userData = $newUser2->add($userData);

// User::list($userData);

User::show(1, $userData);