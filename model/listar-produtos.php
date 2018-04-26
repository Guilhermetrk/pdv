<?php

require_once "conf.php";

$ordem = ($_GET['ordem'] != "") ? $_GET['ordem'] : "id";

$con = new PDO("mysql:dbname=". DB_BASE .";host=". DB_HOST .";charset=utf8", DB_USER, DB_SENHA);


 $sql = "SELECT * FROM produtos ";

 $sql .= " ORDER BY $ordem ASC";

 $res = $con->query($sql);

$produtos = $res->fetchAll(PDO::FETCH_ASSOC);


 echo json_encode($produtos);

?>