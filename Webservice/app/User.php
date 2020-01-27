<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Model implements JWTSubject, AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    protected $table = "tb_usuarios";
    protected $primaryKey = "id_usuario";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password', 'imagem'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function comentarios()
    {
        return $this->hasMany(Comentario::class, 'id_usuario', 'id_usuario');
    }

    public function conteudos()
    {
        return $this->hasMany(Conteudo::class, 'id_usuario', 'id_usuario');
    }

    public function curtidas()
    {
        return $this->belongsToMany(Conteudo::class, 'tb_curtidas', 'id_usuario', 'id_conteudo');
    }

    public function amigos()
    {
        return $this->belongsToMany(User::class, 'tb_amigos', 'id_usuario', 'amigo_id');
    }
}
