<?php

require_once "conf.php";

$con = new PDO("mysql:dbname=". DB_BASE .";host=". DB_HOST .";charset=utf8", DB_USER, DB_SENHA);

$valor = $_POST['valor'];
$itens = $_POST['itens'];

$sql = "INSERT INTO compra (data, valor, itens) VALUES (, CURRENT_TIME(), '$valor', '$itens')";

$res = $con->exec($sql);

//echo $sql;

if ($res === false){
    echo "ocorreu um erro ao inserir o produto";
} else {
    echo "ok";
}

?>