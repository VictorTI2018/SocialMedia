<?php

namespace App\Http\Controllers;

use App\User;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller {

    protected $jwt;

    protected $validator = [
        'email' => 'required',
        'password' => 'required'
    ];

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function credentials(Request $request)
    {
        return [
            'email' => $request->post('email'),
            'password' => $request->post('password')
        ];
    }

    public function authenticate(Request $request)
    {
        $credential = $this->credentials($request);
        if((!$token = $this->jwt->attempt($credential))) {
            return false;
        }

        return $token;
    }

    public function responseToken(string $token, User $user, $status)
    {
        return ['token' => $token, 'user' => $user, "status" => $status];
    }

    private function user($email)
    {
        return User::query()->where("email", $email)->first() ?? null;
    }

    public function login(Request $request)
    {

        $token = $this->authenticate($request);
        if($token) {
            $user = $this->user($request->post('email'));
            return $this->responseToken($token, $user, true);
        }


        return response()->json(["status" => false, "mensagem" => "Dados Inválidos"]);
    }
}
