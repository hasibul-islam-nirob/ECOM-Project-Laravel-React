<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function sendContactDetails(Request $request){

        $name = $request->input('name');
        $mobile = $request->input('mobile');
        $email = $request->input('email');
        $message = $request->input('message');

        date_default_timezone_set('Asia/Dhaka');
        $contact_time = date("h:i:sa");
        $contact_date = date("d-m-Y");

        $result = ContactModel::insert([
            "name"          => $name,
            "mobile"        => $mobile,
            "email"         => $email,
            "message"       => $message,
            "contact_date"  => $contact_date,
            "contact_time"  => $contact_time
        ]);

        return $result;
    }
}
