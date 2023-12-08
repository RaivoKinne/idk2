<?php
namespace Raivo\Server;

abstract class Shape
{
  public $color;

  function __construct(string $color) {
    $this->color = $color;
  }

  abstract public function calculateArea(): float;
}
?>

