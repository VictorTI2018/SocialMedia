<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conteudo extends Model {

    protected $table = 'tb_conteudos';
    protected $primaryKey = 'id_usuario';

    protected $fillable = [
        'titulo', 'texto', 'imagem', 'link', 'data'
    ];


    public function comentarios()
    {
        return $this->hasMany(Comentario::class, 'id_conteudo', 'id_conteudo');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id_usuario');
    }

    public function curtidas()
    {
        return $this->belongsToMany(User::class, 'tb_curtidas', 'id_conteudo', 'id_usuario');
    }
}
