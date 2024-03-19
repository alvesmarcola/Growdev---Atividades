<?php

require_once("./utils/next_id.php");

class User
{
    private $id;
    private $name;
    private $email;
    private $password;
    private $active;

    public function __construct($nameP, $emailP, $passwordP, $active = true)
    {
        $this->id = createId();
        $this->name = $nameP;
        $this->email = $emailP;
        $this->password = $passwordP;
        $this->active = $active;
    }

    public function add($userData)
    {
        array_push($userData, $this);
        return $userData;
    }

    public function update()
    {
    }

    public static function show($idP, $userData)
    {
        $filtered = array_filter($userData, function ($item) use ($idP) {
            return $item->id == $idP;
        });
                
        if ($filtered) {
            echo "Nome: " . $filtered[0]->name . "<br>";
            echo "E-mail: " . $filtered[0]->email . "<br>";
            echo $filtered[0]->active ? "Status: Ativo!" : "Status: Inativo!" . "<br>";
            echo "<br><hr>";
        } else {
            echo "Usuário não encontrado.";
        }
    }

    public function delete($idP)
    {
    }

    public static function list($userData)
    {
        echo "Lista de usuários<br><hr>";
        foreach ($userData as $value) {
            echo "Nome: " . $value->name . "<br>";
            echo "E-mail: " . $value->email . "<br>";
            echo $value->active ? "Status: Ativo!" : "Status: Inativo!" . "<br>";
            echo "<br><hr>";
        }
    }
}
