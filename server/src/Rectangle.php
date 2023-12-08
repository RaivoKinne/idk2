<?php
namespace Raivo\Server;

class Rectangle extends Shape
{
  public $width;
  public $height;

  function __construct(string $color, float $width, float $height) {
    parent::__construct($color);
    $this->width = $width;
    $this->height = $height;
  }

  public function calculateArea(): float {
    return $this->width * $this->height;
  }
}
?>
