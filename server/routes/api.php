<?php

use App\Http\Controllers\chatsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\contactController;
use App\Http\Controllers\messagesController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\usersController;
use App\Http\Controllers\customersController;


Route::resource('contact', contactController::class);
Route::resource('chats', chatsController::class);
Route::resource('messages', messagesController::class);
Route::resource('likes', LikesController::class);
Route::resource('users', usersController::class);
Route::resource('customers', customersController::class);


// Route for get single message
Route::get('/messages/{id}', [messagesController::class, 'show']);
