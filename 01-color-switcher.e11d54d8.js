!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",""),n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.background=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e11d54d8.js.map
