<?php

namespace App\Http\Controllers;

use App\Models\SettingsModel;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function CreateOTP(Request $request){
        $mobile = $request->input('mobile');

        $settings = SettingsModel::all('ssl_wireless_sms_api_token','ssl_wireless_sms_domain');
        $apiToken = $settings[0]['ssl_wireless_sms_api_token'];
        $apiPath = $settings[0]['ssl_wireless_sms_domain'];

        $randomTime = time();
        $optCode = mt_rand(100000, 999999);

        $to = "01312110002";
        $token = $apiToken;
        $message = "Welcome to FCZ, আপনার লগইন কোডটি হলো : ".$optCode;

        //$url = "http://api.greenweb.com.bd/api.php?json";


        $data= array(
            'to'=>"$to",
            'message'=>"$message",
            'token'=>"$token"
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$apiPath);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_ENCODING, '');
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $smsresult = curl_exec($ch);



    }
}
