<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{

    public function postRegister(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|unique:users',
            'password' => 'required|confirmed',
            'timezone' => 'required',
            'username' => 'required|unique:users,username'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return response()->json([
            'success' => true
        ]);
    }
}
