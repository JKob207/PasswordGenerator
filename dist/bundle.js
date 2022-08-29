(()=>{"use strict";var e=[,(e,t,n)=>{n.r(t)},(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(3);var r=n(4),a=n(6),o=n(8),i=n(10);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,l;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("section"),t=new r.default("PASSW0RD GENERATOR","h1"),n=new r.default("PASSWORD RULES","h2"),c=new a.default,l=new i.default,s=new o.default;e.classList.add("section-main-view"),document.body.appendChild(e),e.appendChild(t.render()),e.appendChild(c.render()),e.appendChild(l.render()),e.appendChild(n.render()),e.appendChild(s.render()),document.querySelector(".generate-button").addEventListener("click",(function(){l.generatePassword(s.lowercase,s.uppercase,s.numbers,s.symbols,s.passwordLength)}))}}])&&c(t.prototype,n),l&&c(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,n)=>{n.r(t)},(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(5);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.level=n}var t,n,a;return t=e,(n=[{key:"render",value:function(){var e=document.createElement(this.level);return e.classList.add("header-style"),e.innerText=this.title,e}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,n)=>{n.r(t)},(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(7);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("input");return e.classList.add("viewer-div"),t.classList.add("viewer-input"),t.setAttribute("type","text"),t.readOnly=!0,e.appendChild(t),e}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,n)=>{n.r(t)},(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});n(9);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"changeRangeValue",(function(e){document.querySelector(".number-viewer").innerHTML=e.target.value.toString(),t.passwordLength=e.target.value})),a(this,"checkBoxchange",(function(e){switch(e.target.classList[0].split("-")[0]){case"uppercase":t.uppercase=!t.uppercase;break;case"lowercase":t.lowercase=!t.lowercase;break;case"numbers":t.numbers=!t.numbers;break;case"symbols":t.symbols=!t.symbols}})),this.lowercase=!1,this.uppercase=!1,this.numbers=!1,this.symbols=!1,this.passwordLength=8}var t,n,o;return t=e,(n=[{key:"render",value:function(){var e=this,t=document.createElement("section"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("input"),c=document.createElement("span"),l=document.createElement("div"),s=document.createElement("input"),u=document.createElement("input"),d=document.createElement("input"),p=document.createElement("input"),f=[s,u,d,p];return t.classList.add("rules-section-element"),n.classList.add("first-column"),r.classList.add("second-column"),a.classList.add("number-range-div"),o.classList.add("number-viewer"),i.classList.add("number-range"),i.setAttribute("min",8),i.setAttribute("max",18),i.value=8,i.addEventListener("input",this.changeRangeValue),l.classList.add("rules-checkboxes-div"),s.classList.add("uppercase-rule"),u.classList.add("lowercase-rule"),d.classList.add("numbers-rule"),p.classList.add("symbols-rule"),i.setAttribute("type","range"),s.setAttribute("type","checkbox"),u.setAttribute("type","checkbox"),d.setAttribute("type","checkbox"),p.setAttribute("type","checkbox"),t.appendChild(n),t.appendChild(r),n.appendChild(a),a.appendChild(o),a.appendChild(i),o.appendChild(c),c.innerHTML=8..toString(),r.appendChild(l),f.forEach((function(t){var n=document.createElement("span"),r=document.createElement("label"),a=t.classList[0].split("-")[0];r.innerHTML=a.charAt(0).toUpperCase()+a.slice(1),n.classList.add("rule-span"),t.addEventListener("change",e.checkBoxchange),n.appendChild(t),n.appendChild(r),l.appendChild(n)})),t}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,n)=>{n.r(t)},(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});n(11);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("button");return t.classList.add("generate-button"),e.classList.add("button-div"),t.innerHTML="GENERATE",e.appendChild(t),e}},{key:"generatePassword",value:function(e,t,n,r,a){console.log("Generating..."),console.log(a);var o="",i="",c="abcdefghijklmnopqrstuvwxyz",l=c.toUpperCase();e&&(i+=c),t&&(i+=l),n&&(i+="0123456789"),r&&(i+="!@#$%^&*()_+~`|}{[]:;?><,./-=");for(var s=1;s<=a;s++){var u=Math.floor(Math.random()*i.length);o+=i.charAt(u)}console.log(o.length),document.querySelector(".viewer-input").value=o}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,n)=>{n.r(t)}],t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r);n(1);(new(n(2).default)).render()})()})();