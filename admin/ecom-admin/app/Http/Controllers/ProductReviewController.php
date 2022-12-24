<?php

namespace App\Http\Controllers;

use App\Models\ProductReviewModel;
use Illuminate\Http\Request;

class ProductReviewController extends Controller
{

    function ReviewList(Request $request){
        $productCode = $request->code;
         return $result = ProductReviewModel::orderBy('id','desc')->where('product_code',$productCode)->limit(5)->get();
    }
}
