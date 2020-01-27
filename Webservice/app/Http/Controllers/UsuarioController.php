<?php

namespace App\Http\Controllers;

use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{

    public function getById($id)
    {
        $user = User::query()->where("id_usuario", $id)->first();
        return response()->json($user);
    }

    public function create(Request $request)
    {
        $data = $request->all();

        if (User::query()->where("email", $data['email'])->first()) {
            return response()->json(["emailExists" => true]);
        }

        $urlImagem = asset('perfils/padrao.png');

        $data['password'] = Hash::make($data['password']);
        $usuario = (new User())->fill($data);
        $usuario->imagem = $urlImagem;
        $usuario->save();

        return response()->json(["status" => true]);
    }

    public function update($id, Request $request)
    {
        try {
            $data = $request->all();
            $user = User::query()->where("id_usuario", $id)->first();

            if (isset($data['password'])) {
                $data['password'] = Hash::make($data['password']);
            } else {
                $user->password = $user->password;
            }

            if (isset($data['imagem']) && $data['imagem'] !== "") {
                $urlImagem = $this->salvar_foto($user, $data['imagem']);
                $data['imagem'] = asset($urlImagem);
            }

            $user->fill($data);
            $user->save();

            return response()->json(["status" => true]);

        } catch (Exception $e) {
            return response()->json(["Error" => $e->getMessage()]);
        }
    }

    private function salvar_foto(User $user, $imagem)
    {
        $time = time();
        $dirDad = "perfils";
        $dirImage = $dirDad . DIRECTORY_SEPARATOR . 'perfil_id_' . $user->id_usuario;
        $ext  = substr($imagem, 11, strpos($imagem, ';') - 11);
        $urlImagem = $dirImage . DIRECTORY_SEPARATOR . $time . '.' . $ext;

        $file = str_replace('data:image/' . $ext . ';base64,', '', $imagem);
        $file = base64_decode($file);

        if(!file_exists($dirDad)) {
            mkdir($dirDad, 0700, true);
        }

        if($user->imagem) {
            if(file_exists($user->imagem)) {
                unlink($user->imagem);
            }
        }

        if(!file_exists($dirImage)) {
            mkdir($dirImage, 0700, true);
        }

        file_put_contents($urlImagem, $file);
        return $urlImagem;
    }
}
