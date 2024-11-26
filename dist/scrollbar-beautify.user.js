// ==UserScript==
// @name         滚动条美化
// @namespace    npm/vite-plugin-monkey
// @version      0.1.0
// @author       Feny
// @description  Scroll Style 插件移植成油猴脚本，并且合并🌈彩虹滚动条🌈的CSS样式
// @license      MIT
// @icon         data:image/png;base64,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
// @match        *://*/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM_addStyle
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(" body::-webkit-scrollbar,::-webkit-scrollbar-track,::-webkit-scrollbar-corner,::-webkit-scrollbar-button,::-webkit-scrollbar-track-piece,::-webkit-scrollbar-track:horizontal{display:none!important}::-webkit-scrollbar{width:8px;height:8px;max-width:14px;max-height:14px;display:static!important}::-webkit-scrollbar-thumb{border-radius:5px!important;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1)!important;background:linear-gradient(to bottom,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}::-webkit-scrollbar-thumb:horizontal{border-radius:5px!important;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1)!important;background:linear-gradient(to right,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.vertical-scroll{top:0;right:0;margin:0;padding:0;width:30px;display:none;position:fixed;-webkit-user-select:none;user-select:none;z-index:999999999999;transition:opacity .2s linear}.vertical-scroll-bar{margin:0;padding:0;left:19px;width:8px;height:100%;-webkit-user-select:none;user-select:none;position:relative;border-radius:5px;pointer-events:none;background:linear-gradient(to bottom,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.vertical-fade{top:0;right:0;margin:0;padding:0;width:45px;height:100%;display:block;position:fixed;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:9999999999999}.horizontal-scroll{left:0;margin:0;padding:0;bottom:0;height:30px;display:none;position:fixed;-webkit-user-select:none;user-select:none;z-index:999999999999;transition:opacity .2s linear}.horizontal-scroll-bar{top:20px;margin:0;padding:0;width:100%;height:8px;-webkit-user-select:none;user-select:none;position:relative;border-radius:5px;pointer-events:none;background:linear-gradient(to right,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.horizontal-fade{left:0;bottom:0;margin:0;padding:0;width:100%;height:30px;display:block;position:fixed;-webkit-user-select:none;user-select:none;pointer-events:none;z-index:9999999999999} ");

(function () {
  'use strict';

  const html = `
<!-- 垂直滚动条 -->
<div class="vertical-fade"></div>
<div class="vertical-scroll">
    <div class="vertical-scroll-bar"></div>
</div>
<!-- 水平滚动条 -->
<div class="horizontal-fade"></div>
<div class="horizontal-scroll">
    <div class="horizontal-scroll-bar"></div>
</div>
`;
  document.body.insertAdjacentHTML("beforeend", html);
  var content = document.documentElement ? document.documentElement : document.body;
  var scrollShow_y = false;
  var wsx_t;
  var scrollShow_x = false;
  var niu_t;
  function upScrollHeight() {
    var full_win = false;
    $("*").each(function() {
      if (($(this).css("position") == "fixed" || $(this).css("position") == "static") && $(this).attr("type") == "application/x-shockwave-flash" && $(this).css("height") == $(window).height() + "px" && $(this).css("width") >= $(window).width() + "px") {
        full_win = true;
      }
    });
    clearTimeout(wsx_t);
    clearTimeout(niu_t);
    var wHeight = document.documentElement.clientHeight;
    var wWidth = document.documentElement.clientWidth;
    var dHeight = document.documentElement.scrollHeight;
    var dWidth = document.documentElement.scrollWidth;
    var tmpScroll_y = $(".vertical-scroll");
    var tmpScroll_x = $(".horizontal-scroll");
    if (dHeight <= wHeight || full_win) {
      if (scrollShow_y == true) {
        tmpScroll_y.hide();
      }
      scrollShow_y = false;
    } else {
      tmpScroll_y.css({
        display: "block",
        opacity: 1,
        "pointer-events": "none"
      });
      scrollShow_y = true;
    }
    if (dWidth <= wWidth || full_win) {
      if (scrollShow_x == true) {
        tmpScroll_x.hide();
      }
      scrollShow_x = false;
    } else {
      tmpScroll_x.css({
        display: "block",
        opacity: 1,
        "pointer-events": "none"
      });
      scrollShow_x = true;
    }
    var scrollHeight = wHeight / dHeight * wHeight > 30 ? wHeight / dHeight * wHeight : 30;
    var scrollWidth = wWidth / dWidth * wWidth > 30 ? wWidth / dWidth * wWidth : 30;
    var top = $(document).scrollTop() / (dHeight - wHeight) * (wHeight - scrollHeight);
    tmpScroll_y.css({
      top
    });
    tmpScroll_y.height(scrollHeight);
    var left = $(document).scrollLeft() / (dWidth - wWidth) * (wWidth - scrollWidth);
    tmpScroll_x.css({
      left
    });
    tmpScroll_x.width(scrollWidth);
    wsx_t = setTimeout(function() {
      tmpScroll_y.css({
        opacity: 0,
        "pointer-events": "none"
      });
      scrollShow_y = false;
    }, 500);
    niu_t = setTimeout(function() {
      tmpScroll_x.css({
        opacity: 0,
        "pointer-events": "none"
      });
      scrollShow_x = false;
    }, 500);
  }
  $(window).bind("scroll", function() {
    if (document.documentElement.clientHeight != document.documentElement.scrollHeight) {
      upScrollHeight();
    }
  });
  $(window).bind("resize", function() {
    upScrollHeight();
  });
  var always_y;
  var always_x;
  var mousedown_y = false;
  var mousedown_x = false;
  var startY;
  var Y;
  var startX;
  var X;
  $(window).bind("mousemove", function(event) {
    if (content.clientWidth - event.clientX < 40) {
      if (scrollShow_y == false) {
        upScrollHeight();
      }
      clearTimeout(wsx_t);
      always_y = true;
    } else {
      if (always_y == true) {
        always_y = false;
        wsx_t = setTimeout(function() {
          $(".vertical-scroll").css({
            opacity: 0,
            "pointer-events": "none"
          });
          scrollShow_y = false;
        }, 500);
      }
    }
    if (content.clientHeight - event.clientY < 40) {
      if (scrollShow_x == false) {
        upScrollHeight();
      }
      clearTimeout(niu_t);
      always_x = true;
    } else {
      if (always_x == true) {
        always_x = false;
        niu_t = setTimeout(function() {
          $(".horizontal-scroll").css({
            opacity: 0,
            "pointer-events": "none"
          });
          scrollShow_x = false;
        }, 500);
      }
    }
    if (mousedown_y == true) {
      $(".vertical-fade").css({
        "pointer-events": "auto"
      });
      var endY = event.clientY;
      var top = endY - startY + Y;
      if (top < 0) {
        top = 0;
      }
      var max_height = $(window).height() - $(".vertical-scroll").height();
      if (top > max_height) {
        top = max_height;
      }
      var scroll_top = top / ($(window).height() - $(".vertical-scroll").height()) * ($(document).height() - $(window).height());
      $(document).scrollTop(scroll_top);
    }
    if (mousedown_x == true) {
      $(".horizontal-fade").css({
        "pointer-events": "auto"
      });
      var endX = event.clientX;
      var left = endX - startX + X;
      if (left < 0) {
        left = 0;
      }
      var max_width = $(window).width() - $(".horizontal-scroll").width();
      if (left > max_width) {
        left = max_width;
      }
      var scroll_left = left / ($(window).width() - $(".horizontal-scroll").width()) * ($(document).width() - $(window).width());
      $(document).scrollLeft(scroll_left);
    }
  });
  $(window).bind("mousedown", function(event) {
    startY = event.clientY;
    startX = event.clientX;
    Y = $(document).scrollTop() / ($(document).height() - $(window).height()) * ($(window).height() - $(".vertical-scroll").height());
    X = $(document).scrollLeft() / ($(document).width() - $(window).width()) * ($(window).width() - $(".horizontal-scroll").width());
    if (content.clientWidth - event.clientX < 40 && content.clientWidth - event.clientX >= 0) {
      mousedown_y = true;
      window.document.onselectstart = function() {
        return false;
      };
    }
    if (content.clientHeight - event.clientY < 40 && content.clientHeight - event.clientY >= 0) {
      mousedown_x = true;
      window.document.onselectstart = function() {
        return false;
      };
    }
  });
  $(window).bind("mouseup", function() {
    document.onselectstart = null;
    mousedown_y = false;
    mousedown_x = false;
    $(".vertical-fade").css({
      "pointer-events": "none"
    });
    $(".horizontal-fade").css({
      "pointer-events": "none"
    });
  });

})();