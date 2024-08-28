<?php

// if (preg_match('/\.(?:png|jpg|jpeg|gif|css|js)$/', $_SERVER["REQUEST_URI"])) {
//     return false; // Serve the requested resource as-is.
// }

session_start();

require_once "file_handeler.php";
require_once "DB.php";
require_once "view_handler.php";

/*  Some nessesery functions for use  */
// Get the requested URL
$requestUrl = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : "/";
// $routes = json_decode(file_get_contents('routes.json'), true)["routes"];
$config = json_decode(file_get_contents("Server.Config.json"), false);

$buildFlag = $config->build;


// Log message to browser console
function logconsole($message): void
{
    echo "<script>console.log('$message'); </script>";
}

// Get our current URL
function getCurrentUrl()
{
    return $_SESSION['REQUEST_URI'];
}

function isUserLoggedin()
{
    return isset ($_SESSION['user_name']);
}

function createControllers(): void
{
    global $Controllers;

    $files = glob("controllers/*.php");

    foreach ($files as $file) {
        // $replacePattern = . '//(.*?).php/';
        $controllerName = str_replace("controllers/", "", $file);
        $controllerName = str_replace(".php", "", $controllerName);

        // //logconsole("Registering controller : $controllerName");
        $Controllers->{$controllerName} = $controllerName;
    }
}

/**
 * Create Object of the controller and databases
 * @param string $path - Path of the php file
 * @return stdclass - object of the class
 */
function createObject($ClassName)
{
    return new $ClassName();
}


foreach (glob("Controllers/*.php") as $Controllerfile) { include_once $Controllerfile; }
foreach (glob("Models/*.php") as $Controllerfile) { include_once $Controllerfile; }
require_once "request_handler.php";



// echo "testing";
handleServerRequestes();

