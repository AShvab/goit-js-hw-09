!function(){var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){a(t),o(n),e=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),n.addEventListener("click",(function(){o(t),a(n),clearInterval(e)}));var e=null;function a(t){t.disabled=!0}function o(t){t.disabled=!1}}();
//# sourceMappingURL=01-color-switcher.bcf2df2f.js.map
