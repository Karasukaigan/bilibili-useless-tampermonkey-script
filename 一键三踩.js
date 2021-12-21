// ==UserScript==
// @name         一键三踩
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  用来整活的Tampermonkey脚本。
// @author       Karasukaigan
// @include      *://www.bilibili.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon         https://raw.githubusercontent.com/Karasukaigan/bilibili-useless-tampermonkey-script/main/favicon.ico
// @grant        none
// ==/UserScript==

// 等待三连所在的元素加载完成后，执行changeIcon()
waitForKeyElements(".collect", changeIcon);

// 将一键三连变成“一键三踩”
function changeIcon() {
    $(".like i").css("transform", "rotateX(180deg)");

    $(".coin i").css("transform", "rotateX(180deg)");
    $(".coin i").removeClass("van-icon-videodetails_throw");
    $(".coin i").addClass("van-icon-videodetails_like");

    $(".collect i").css("transform", "rotateX(180deg)");
    $(".collect i").removeClass("van-icon-videodetails_collec");
    $(".collect i").addClass("van-icon-videodetails_like");
}