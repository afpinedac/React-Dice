<?php

namespace App\Http\Controllers;

use App\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{

    public function postRegister(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'timezone' => 'required',
            'username' => 'required|unique:users,username'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = new User($request->all());
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json([
            'success' => true
        ]);
    }

    public function getByUsername(Request $request, string $identifier)
    {

        $user = User::where('username', $identifier)
            ->orWhere('email', $identifier)
            ->first();

        if (!$user) {
            return response()->json([]);
        }

        return response()->json(['errors' => ['Already exists']]);

    }
}
