<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    function getProductListByRemark(Request $request){
        $remark = $request->remark;
        $result = ProductListModel::where('remark',$remark)->get();
        return $result;
    }

    function getProductListByCategory(Request $request){
        $Category = $request->Category;
        $result = ProductListModel::where('category',$Category)->get();
        return $result;
    }

    function getProductListBySubCategory(Request $request){
        $Category = $request->Category;
        $SubCategory = $request->subCategory;
        $result = ProductListModel::where('category',$Category)->where('sub_category',$SubCategory)->get();
        return $result;
    }

    function ProductBySearch(Request $request){
        $key = $request->key;
        return $result = ProductListModel::where('title','LIKE',"%{$key}%")->get();
    }

    function SimilarProduct(Request $request){
        $subCategory = $request->subCategory;
        $result = ProductListModel::orderBy('id','desc')->where('sub_category',$subCategory)->limit(8)->get();
        return $result;

    }



}
