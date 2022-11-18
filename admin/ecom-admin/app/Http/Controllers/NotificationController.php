<?php

namespace App\Http\Controllers;

use App\Models\NotificationModel;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    function NotificationHistory(){
        return $result = NotificationModel::orderBy('id', 'desc')->limit(10)->get();
    }
}
