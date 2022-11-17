<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    function ProductDetails(Request $request){
        $productCode = $request->product_code;

        $ProductList = ProductListModel::where('product_code',$productCode)->get();
        $ProductDetails = ProductDetailsModel::where('product_code',$productCode)->get();

        $item = [
            'ProductList'=>$ProductList,
            'ProductDetails'=>$ProductDetails
        ];
        return  $item;

    }
}
