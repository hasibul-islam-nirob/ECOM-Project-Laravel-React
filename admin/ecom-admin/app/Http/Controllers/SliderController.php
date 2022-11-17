<?php

namespace App\Http\Controllers;

use App\Models\SliderModel;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    function SliderInfo(){
        return $result = SliderModel::all();
    }
}
