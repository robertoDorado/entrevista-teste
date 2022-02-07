<?php
require_once "../../DataRequest.php";
$data = new DataRequest();

switch ($_POST['data']) {
    case 0:
        $clients = $data->dadosClientes();
        echo json_encode($clients, JSON_UNESCAPED_UNICODE);
        break;
    case 1:
        $users = $data->dadosUsuarios();
        echo json_encode($users, JSON_UNESCAPED_UNICODE);
        break;
    case 2:
        $providers = $data->dadosFornecedores();
        echo json_encode($providers, JSON_UNESCAPED_UNICODE);
        break;
}
