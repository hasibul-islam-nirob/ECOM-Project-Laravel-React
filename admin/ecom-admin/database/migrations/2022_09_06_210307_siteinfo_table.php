<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SiteinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_info', function (Blueprint $table){
            $table->bigIncrements('id');
            $table->text('about',5000);
            $table->text('terms_condition',5000);
            $table->text('policy_policy',5000);
            $table->text('refund_policy',5000);
            $table->text('payment_policy',5000);
            $table->text('purchase_guid',5000);
            $table->text('about_company',5000);
            $table->string('address',500);
            $table->string('delivery_notice',500);
            $table->string('android_app_link',500);
            $table->string('ios_app_link',500);
            $table->string('facebook_link',500);
            $table->string('twitter_link',500);
            $table->string('instagram_link',500);
            $table->string('date');
            $table->string('time');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
