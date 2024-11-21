<?php
class Person {
    public $name = "";
    public $age = 0;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function greet() {
        $message = "I'm {$this->name}. {$this->age} years old.";
        return $message;
    }

}

$person = new Person("HAL", 22);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li><?= $person->name ?></li>
        <li><?= $person->age ?></li>
        <li><?= $person->greet() ?></li>
    </ul>
</body>
</html>