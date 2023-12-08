<?php
namespace Raivo\Server;

header('Access-Control-Allow-Origin: *');

include "Shape.php";
include "Rectangle.php";
include "Circle.php";

$rectangle = new Rectangle("green", 600, 500);
$rectangle_area = $rectangle->calculateArea();
$circle = new Circle("yellow", 300);
$circle_area = $circle->calculateArea();

$response = [
  'rectangle' => $rectangle,
  'rectangle_area' => $rectangle_area,
  'circle' => $circle,
  'circle_area' => $circle_area
];

echo json_encode($response);
