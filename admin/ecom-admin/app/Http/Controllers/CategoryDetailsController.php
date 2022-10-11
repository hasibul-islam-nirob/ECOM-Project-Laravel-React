<?php

namespace App\Http\Controllers;

use App\Models\CategoryLevel1Model;
use App\Models\CategoryLevel2Model;
use Illuminate\Http\Request;

class CategoryDetailsController extends Controller
{
    function sendCategoryDetails(){

        $parentsCategoryDetails = CategoryLevel1Model::all();
        $categoryDetailsArray = [];
        foreach ($parentsCategoryDetails as $value){
            $subCategoryDetails = CategoryLevel2Model::where('cat1_name',$value['cat1_name'])->get();
            $item = [
                "parentsCategoryName" =>$value['cat1_name'],
                "parentsCategoryImg" =>$value['cat1_image'],
                "subCategory" =>$subCategoryDetails
            ];
            array_push($categoryDetailsArray, $item);
        }
        return $categoryDetailsArray;

    }
}
