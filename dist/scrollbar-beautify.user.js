// ==UserScript==
// @name         滚动条美化
// @namespace    npm/vite-plugin-monkey
// @version      0.1.0
// @author       Feny
// @description  移植于Scroll Style插件，且使用🌈彩虹滚动条🌈脚本的CSS样式
// @license      MIT
// @icon         data:image/png;base64,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
// @match        *://*/*
// @grant        GM_addStyle
// @run-at       document-body
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(" body::-webkit-scrollbar,::-webkit-scrollbar-track,::-webkit-scrollbar-corner,::-webkit-scrollbar-button,::-webkit-scrollbar-track-piece,::-webkit-scrollbar-track:horizontal{display:none!important}::-webkit-scrollbar{width:7px;height:7px;max-width:14px;max-height:14px;display:static!important}::-webkit-scrollbar-thumb{border-radius:5px!important;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1)!important;background:linear-gradient(to bottom,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}::-webkit-scrollbar-thumb:horizontal{border-radius:5px!important;-webkit-box-shadow:inset 0 0 10px rgba(255,255,255,1)!important;background:linear-gradient(to right,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.wsx_scroll{margin:0;padding:0;display:none;position:fixed;-webkit-user-select:none;user-select:none;z-index:999999999;transition:opacity .2s linear}.wsx_scroll_bar{margin:0;padding:0;-webkit-user-select:none;user-select:none;position:relative;pointer-events:none}.wsx_fade{margin:0;padding:0;display:block;position:fixed;-webkit-user-select:none;user-select:none;z-index:9999999999;pointer-events:none}.wsx_vertical_scroll{top:0;right:0;width:30px}.wsx_vertical_scroll_bar{left:19px;width:7px;height:100%;border-radius:5px;background:linear-gradient(to bottom,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.wsx_vertical_fade{top:0;right:0;width:45px;height:100%}.wsx_horizontal_scroll{left:0;bottom:0;height:30px}.wsx_horizontal_scroll_bar{top:20px;width:100%;height:7px;border-radius:5px;background:linear-gradient(to right,#ff567f,#fbeb91,#2ec2ff,#8375ff)!important}.wsx_horizontal_fade{left:0;bottom:0;width:100%;height:30px} ");

(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function() {
    const timeoutSec = 500;
    function createAndAppendElement(tag, className, parent) {
      const el = document.createElement(tag);
      el.className = className;
      parent.appendChild(el);
      return el;
    }
    const verticalFade = createAndAppendElement("div", "wsx_fade wsx_vertical_fade", document.body);
    const verticalScroll = createAndAppendElement(
      "div",
      "wsx_scroll wsx_vertical_scroll",
      document.body
    );
    createAndAppendElement("div", "wsx_scroll_bar wsx_vertical_scroll_bar", verticalScroll);
    const horizontalFade = createAndAppendElement(
      "div",
      "wsx_fade wsx_horizontal_fade",
      document.body
    );
    const horizontalScroll = createAndAppendElement(
      "div",
      "wsx_scroll wsx_horizontal_scroll",
      document.body
    );
    createAndAppendElement("div", "wsx_scroll_bar wsx_horizontal_scroll_bar", horizontalScroll);
    let content = document.documentElement || document.body;
    let changeY = window.innerHeight;
    let scrollShowY = false;
    let wsxVerticalTimeout;
    let changeX = window.innerWidth;
    let scrollShowX = false;
    let wsxHorizontalTimeout;
    function upScrollHeight() {
      const fullWin = Array.from(document.querySelectorAll("*")).some((el) => {
        const cs = getComputedStyle(el);
        return (cs.position === "fixed" || cs.position === "static") && el.type === "application/x-shockwave-flash" && cs.height === window.innerHeight + "px" && parseInt(cs.width, 10) >= window.innerWidth;
      });
      clearTimeout(wsxVerticalTimeout);
      clearTimeout(wsxHorizontalTimeout);
      const wHeight = document.documentElement.clientHeight;
      const wWidth = document.documentElement.clientWidth;
      const dHeight = document.documentElement.scrollHeight;
      const dWidth = document.documentElement.scrollWidth;
      if (dHeight <= wHeight || fullWin) {
        if (scrollShowY) {
          verticalScroll.style.display = "none";
        }
        scrollShowY = false;
      } else {
        verticalScroll.style.display = "block";
        verticalScroll.style.opacity = "1";
        verticalScroll.style.pointerEvents = "none";
        scrollShowY = true;
      }
      if (dWidth <= wWidth || fullWin) {
        if (scrollShowX) {
          horizontalScroll.style.display = "none";
        }
        scrollShowX = false;
      } else {
        horizontalScroll.style.display = "block";
        horizontalScroll.style.opacity = "1";
        horizontalScroll.style.pointerEvents = "none";
        scrollShowX = true;
      }
      const scrollHeight = Math.max(wHeight / dHeight * wHeight, 30);
      const scrollWidth = Math.max(wWidth / dWidth * wWidth, 30);
      const top = (document.documentElement.scrollTop || document.body.scrollTop) / (dHeight - wHeight) * (wHeight - scrollHeight);
      verticalScroll.style.top = `${top}px`;
      verticalScroll.style.height = `${scrollHeight}px`;
      const left = (document.documentElement.scrollLeft || document.body.scrollLeft) / (dWidth - wWidth) * (wWidth - scrollWidth);
      horizontalScroll.style.left = `${left}px`;
      horizontalScroll.style.width = `${scrollWidth}px`;
      wsxVerticalTimeout = setTimeout(() => {
        verticalScroll.style.opacity = "0";
        verticalScroll.style.pointerEvents = "none";
        scrollShowY = false;
      }, timeoutSec);
      wsxHorizontalTimeout = setTimeout(() => {
        horizontalScroll.style.opacity = "0";
        horizontalScroll.style.pointerEvents = "none";
        scrollShowX = false;
      }, timeoutSec);
    }
    const initInterval = 200;
    setInterval(() => {
      if (changeY !== content.scrollHeight || changeX !== content.scrollWidth) {
        changeY = content.scrollHeight;
        changeX = content.scrollWidth;
        upScrollHeight();
      }
    }, initInterval);
    window.addEventListener("scroll", upScrollHeight);
    window.addEventListener("resize", upScrollHeight);
    let alwaysY;
    let alwaysX;
    let mousedownY = false;
    let mousedownX = false;
    let startY;
    let Y;
    let startX;
    let X;
    window.addEventListener("mousemove", (event) => {
      if (event.clientX >= 0 && event.clientY >= 0) {
        if (content.clientWidth - event.clientX < 40) {
          if (!scrollShowY) {
            upScrollHeight();
          }
          clearTimeout(wsxVerticalTimeout);
          alwaysY = true;
        } else if (alwaysY) {
          alwaysY = false;
          wsxVerticalTimeout = setTimeout(() => {
            verticalScroll.style.opacity = "0";
            verticalScroll.style.pointerEvents = "none";
            scrollShowY = false;
          }, timeoutSec);
        }
        if (content.clientHeight - event.clientY < 40) {
          if (!scrollShowX) {
            upScrollHeight();
          }
          clearTimeout(wsxHorizontalTimeout);
          alwaysX = true;
        } else if (alwaysX) {
          alwaysX = false;
          wsxHorizontalTimeout = setTimeout(() => {
            horizontalScroll.style.opacity = "0";
            horizontalScroll.style.pointerEvents = "none";
            scrollShowX = false;
          }, timeoutSec);
        }
        if (mousedownY) {
          verticalFade.style.pointerEvents = "auto";
          const endY = event.clientY;
          let top = endY - startY + Y;
          top = Math.max(0, top);
          const maxHeight = window.innerHeight - verticalScroll.offsetHeight;
          top = Math.min(maxHeight, top);
          const scrollTop = top / (window.innerHeight - verticalScroll.offsetHeight) * (document.documentElement.scrollHeight - window.innerHeight);
          document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
        }
        if (mousedownX) {
          horizontalFade.style.pointerEvents = "auto";
          const endX = event.clientX;
          let left = endX - startX + X;
          left = Math.max(0, left);
          const maxWidth = window.innerWidth - horizontalScroll.offsetWidth;
          left = Math.min(maxWidth, left);
          const scrollLeft = left / (window.innerWidth - horizontalScroll.offsetWidth) * (document.documentElement.scrollWidth - window.innerWidth);
          document.documentElement.scrollLeft = document.body.scrollLeft = scrollLeft;
        }
      }
    });
    window.addEventListener("mousedown", (event) => {
      startY = event.clientY;
      startX = event.clientX;
      Y = (document.documentElement.scrollTop || document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight) * (window.innerHeight - verticalScroll.offsetHeight);
      X = (document.documentElement.scrollLeft || document.body.scrollLeft) / (document.documentElement.scrollWidth - window.innerWidth) * (window.innerWidth - horizontalScroll.offsetWidth);
      if (content.clientWidth - event.clientX < 40 && content.clientWidth - event.clientX >= 0) {
        mousedownY = true;
        document.onselectstart = () => false;
      }
      if (content.clientHeight - event.clientY < 40 && content.clientHeight - event.clientY >= 0) {
        mousedownX = true;
        document.onselectstart = () => false;
      }
    });
    window.addEventListener("mouseup", () => {
      document.onselectstart = null;
      mousedownY = false;
      mousedownX = false;
      verticalFade.style.pointerEvents = "none";
      horizontalFade.style.pointerEvents = "none";
    });
  });

})();