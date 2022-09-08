<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/getVisitorInfo', [VisitorController::class, 'getVisitorInfo']);
Route::post('/sendContactDetails', [ContactController::class, 'sendContactDetails']);
Route::get('/sendSiteInfo', [SiteInfoController::class, 'sendSiteInfo']);
