<?php
namespace Raivo\Server;

class Circle extends Shape {
  public $radius;

  function __construct(string $color, float $radius) {
    parent::__construct($color);
    $this->radius = $radius;
  }

  public function calculateArea(): float {
    return $this->radius * $this->radius * pi();
  }
}
?>

