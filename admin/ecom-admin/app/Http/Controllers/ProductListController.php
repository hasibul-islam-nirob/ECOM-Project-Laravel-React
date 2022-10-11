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




}
