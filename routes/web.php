<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{path?}', 'app');

Route::group(['prefix' => 'api'], function () {
    Route::post('/users', ['uses' => 'UsersController@postRegister'])->name('user.register');
    Route::get('/users/{username}', ['uses' => 'UsersController@getByUsername'])->name('user.profile');

});