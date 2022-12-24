<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\ProductReviewController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/getVisitorInfo', [VisitorController::class, 'getVisitorInfo']);
Route::post('/sendContactDetails', [ContactController::class, 'sendContactDetails']);
Route::get('/sendSiteInfo', [SiteInfoController::class, 'sendSiteInfo']);

Route::get('/sendCategoryDetails', [CategoryDetailsController::class, 'sendCategoryDetails']);
Route::get('/ProductListByRemark/{remark}', [ProductListController::class, 'getProductListByRemark']);
Route::get('/ProductListByCategory/{Category}', [ProductListController::class, 'getProductListByCategory']);
Route::get('/ProductListBySubCategory/{Category}/{subCategory}', [ProductListController::class, 'getProductListBySubCategory']);
Route::get('/SimilarProduct/{subCategory}', [ProductListController::class, 'SimilarProduct']);
Route::get('/ProductBySearch/{key}', [ProductListController::class, 'ProductBySearch']);

Route::get('/sliderInfo', [SliderController::class, 'SliderInfo']);

Route::get('/productDetails/{product_code}', [ProductDetailsController::class, 'ProductDetails']);

Route::get('/NotificationHistory', [NotificationController::class, 'NotificationHistory']);

Route::post('/CreateOTP', [LoginController::class, 'CreateOTP']);
Route::post('/OTPVerification', [LoginController::class, 'OTPVerification']);

Route::get('/ReviewList/{code}', [ProductReviewController::class, 'ReviewList']);


