// ==UserScript==
// @name         百万播放
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

// 等待视频信息加载完成后，执行changeText()
waitForKeyElements(".bilibili-player-video-info-danmaku-number", changeText);

// 改变播放量、弹幕数
function changeText() {
    $(".view").html('100.0万播放 · ');
    $(".dm").html('总弹幕数6666');
}
