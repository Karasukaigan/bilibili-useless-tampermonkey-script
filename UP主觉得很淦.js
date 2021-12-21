// ==UserScript==
// @name         UP主觉得很淦
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

// 等待“UP主觉得很赞”所在的元素加载完成后，执行changeText()
waitForKeyElements(".reply-tags", changeText);

// 将所有“UP主觉得很赞”替换为“UP主觉得很淦”
function changeText() {
    $(".reply-tags").html('<span style="background:#F4F4F4;color:#757575">UP主觉得很淦</span>');
}
