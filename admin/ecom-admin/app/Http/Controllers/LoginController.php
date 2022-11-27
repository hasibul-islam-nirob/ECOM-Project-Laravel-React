<?php

namespace App\Http\Controllers;

use App\Models\OTPModel;
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
        $otpCode = mt_rand(100000, 999999);

        $to = $mobile;
        $token = $apiToken;
        $message = "Welcome to FCZ, আপনার লগইন কোডটি হলো : ".$otpCode;

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
        curl_close($ch);
        $otpResult = json_decode($smsresult, true);

        if ($otpResult[0]['status'] == "SENT"){
            $created_timestamp = time();
            $time = date('h:i:sa');
            $date = date('d-m-Y');

            $result = OTPModel::insert([
               'mobile'=> $mobile,
                'otp' => $otpCode,
                'created_timestamp' => $created_timestamp,
                'created_time'=> $time,
                'created_date'=> $date
            ]);

            if ($result == true){
                return 1;
            }else{
                return 0;
            }

        }else{
            return 0;
        }
    }


    function OTPVerification(Request $request){
        $otpCode = $request->input('otp');
        $mobileNo = $request->input('mobile');
        $countNo = OTPModel::where('otp',$otpCode)->where('mobile',$mobileNo)->count();
        if ($countNo > 0){
            return 1;
        }else{
            return 0;
        }
    }



}
