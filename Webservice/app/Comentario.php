<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model {

    protected $table = 'tb_comentarios';
    protected $primaryKey = 'id_comentario';


    protected $fillable = [
        'id_conteudo', 'texto', 'data'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id_usuario');
    }

    public function conteudo()
    {
        return $this->belongsTo(Conteudo::class, 'id_conteudo', 'id_conteudo');
    }
}

?>
