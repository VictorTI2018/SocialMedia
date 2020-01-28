<?php

use App\Conteudo;
use App\User;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(["prefix" => "api"], function() use ($router) {
    $router->group(["prefix" => "user"], function() use ($router) {
        $router->post('/register', 'UsuarioController@create');
    });

    $router->post('/login', 'LoginController@login');

    $router->group(["middleware" => "auth:api"], function() use ($router) {
        $router->group(["prefix" => "usuario"], function() use ($router) {
            $router->get('/user/{id}', 'UsuarioController@getById');
            $router->put('/perfil/{id}', 'UsuarioController@update');
        });
    });
});

// $router->get('/teste', function() {
//     $user = User::query()->where("id_usuario", 1)->first();
//     $user2 = User::query()->where("id_usuario", 2)->first();

//     $conteudo = new Conteudo();
//     // $user->conteudos()->create([
//     //     'titulo' => 'Conteudo Teste 3',
//     //     'texto' => 'Texto Teste',
//     //     'imagem' => 'url da imagem',
//     //     'link' => ' link',
//     //     'data' => '2020-01-01'
//     // ]);

//     // $user->amigos()->toggle($user2);
//     $conteudo =Conteudo::query()->where("id_conteudo", 1)->first();
//     // $user->curtidas()->toggle($conteudo);

//     $user->comentarios()->create([
//         'id_conteudo' => $conteudo->id_conteudo,
//         'texto' => 'Texto Teste',
//         'data' => '2020-01-01'
//     ]);

//     $user2->comentarios()->create([
//         'id_conteudo' => $conteudo->id_conteudo,
//         'texto' => 'Texto Teste',
//         'data' => '2020-01-01'
//     ]);
//     return $conteudo->comentarios;
// });
