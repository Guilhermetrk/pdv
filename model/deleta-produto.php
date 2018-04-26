<?php

require_once "conf.php";

$con = new PDO("mysql:dbname=". DB_BASE .";host=". DB_HOST .";charset=utf8", DB_USER, DB_SENHA);

$id = $_GET['id'];

$sql = "DELETE FROM produtos WHERE .`id` = $id";

$res = $con->exec($sql);

if ($res === false){
    echo "ocorreu um erro ao deletar o produto";

} else {
    echo "ok";

}

header("Location: /produtos.html");

?>