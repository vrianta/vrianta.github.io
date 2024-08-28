<?php
class homeController
{
    public function home(...$args)
    {
        // do the action here 
        // rather than $args you can also mention variables which you are passing via URL POST or GET both will work example you are passing a product name then you can memtiom
        // public function home($product_name, ...$args)

        $data = [
            "HelloWorld" => "Hello World",
        ];

        loadView(
            "home",
            $data,
            $args
        );
    }

}