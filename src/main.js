import "./style.css";
import html from "./innerHTML";

document.body.insertAdjacentHTML("beforeend", html);

var content = document.documentElement ? document.documentElement : document.body;
var scrollShow_y = false;
var wsx_t;
var scrollShow_x = false;
var niu_t;

function upScrollHeight() {
  var full_win = false;
  $("*").each(function () {
    if (
      ($(this).css("position") == "fixed" || $(this).css("position") == "static") &&
      $(this).attr("type") == "application/x-shockwave-flash" &&
      $(this).css("height") == $(window).height() + "px" &&
      $(this).css("width") >= $(window).width() + "px"
    ) {
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
      "pointer-events": "none",
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
      "pointer-events": "none",
    });
    scrollShow_x = true;
  }
  var scrollHeight = (wHeight / dHeight) * wHeight > 30 ? (wHeight / dHeight) * wHeight : 30;
  var scrollWidth = (wWidth / dWidth) * wWidth > 30 ? (wWidth / dWidth) * wWidth : 30;
  var top = ($(document).scrollTop() / (dHeight - wHeight)) * (wHeight - scrollHeight);
  tmpScroll_y.css({
    top: top,
  });
  tmpScroll_y.height(scrollHeight);
  var left = ($(document).scrollLeft() / (dWidth - wWidth)) * (wWidth - scrollWidth);
  tmpScroll_x.css({
    left: left,
  });
  tmpScroll_x.width(scrollWidth);

  wsx_t = setTimeout(function () {
    tmpScroll_y.css({
      opacity: 0,
      "pointer-events": "none",
    });
    scrollShow_y = false;
  }, 500);
  niu_t = setTimeout(function () {
    tmpScroll_x.css({
      opacity: 0,
      "pointer-events": "none",
    });
    scrollShow_x = false;
  }, 500);
}

$(window).bind("scroll", function () {
  if (document.documentElement.clientHeight != document.documentElement.scrollHeight) {
    upScrollHeight();
  }
});

$(window).bind("resize", function () {
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

$(window).bind("mousemove", function (event) {
  if (content.clientWidth - event.clientX < 40) {
    if (scrollShow_y == false) {
      upScrollHeight();
    }
    clearTimeout(wsx_t);
    always_y = true;
  } else {
    if (always_y == true) {
      always_y = false;
      wsx_t = setTimeout(function () {
        $(".vertical-scroll").css({
          opacity: 0,
          "pointer-events": "none",
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
      niu_t = setTimeout(function () {
        $(".horizontal-scroll").css({
          opacity: 0,
          "pointer-events": "none",
        });
        scrollShow_x = false;
      }, 500);
    }
  }
  if (mousedown_y == true) {
    $(".vertical-fade").css({
      "pointer-events": "auto",
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
    var scroll_top =
      (top / ($(window).height() - $(".vertical-scroll").height())) *
      ($(document).height() - $(window).height());
    $(document).scrollTop(scroll_top);
  }
  if (mousedown_x == true) {
    $(".horizontal-fade").css({
      "pointer-events": "auto",
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
    var scroll_left =
      (left / ($(window).width() - $(".horizontal-scroll").width())) *
      ($(document).width() - $(window).width());
    $(document).scrollLeft(scroll_left);
  }
});

$(window).bind("mousedown", function (event) {
  startY = event.clientY;
  startX = event.clientX;
  Y =
    ($(document).scrollTop() / ($(document).height() - $(window).height())) *
    ($(window).height() - $(".vertical-scroll").height());
  X =
    ($(document).scrollLeft() / ($(document).width() - $(window).width())) *
    ($(window).width() - $(".horizontal-scroll").width());

  if (content.clientWidth - event.clientX < 40 && content.clientWidth - event.clientX >= 0) {
    mousedown_y = true;
    window.document.onselectstart = function () {
      return false;
    };
  }
  if (content.clientHeight - event.clientY < 40 && content.clientHeight - event.clientY >= 0) {
    mousedown_x = true;
    window.document.onselectstart = function () {
      return false;
    };
  }
});
$(window).bind("mouseup", function () {
  document.onselectstart = null;
  mousedown_y = false;
  mousedown_x = false;
  $(".vertical-fade").css({
    "pointer-events": "none",
  });
  $(".horizontal-fade").css({
    "pointer-events": "none",
  });
});
