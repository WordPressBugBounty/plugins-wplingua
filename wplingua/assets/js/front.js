/*!*
 **                 _     _                         
 ** __      ___ __ | |   (_)_ __   __ _ _   _  __ _ 
 ** \ \ /\ / / '_ \| |   | | '_ \ / _` | | | |/ _` |
 **  \ V  V /| |_) | |___| | | | | (_| | |_| | (_| |
 **   \_/\_/ | .__/|_____|_|_| |_|\__, |\__,_|\__,_|
 **          |_|                  |___/             
 **
 **        -- wpLingua | WordPress plugin --
 **   Translate and make your website multilingual
 **
 **     https://github.com/julien-jacob/wplingua
 **      https://wordpress.org/plugins/wplingua/
 **              https://wplingua.com/
 **
 **/
document.addEventListener("DOMContentLoaded",function(){function n(){let l=window.innerHeight/2;document.querySelectorAll(".wplng-switcher.style-dropdown").forEach(function(e){var t,n,o;e.getBoundingClientRect().top<l?e.classList.contains("open-bottom")||(e.classList.add("open-bottom"),e.classList.remove("open-top"),o=e.querySelector(".wplng-languages"),t=e.querySelector(".wplng-language-current"),(n=e.querySelector(".switcher-content"))&&o&&t&&(n.innerHTML="",n.appendChild(t.cloneNode(!0)),n.appendChild(o.cloneNode(!0)))):e.classList.contains("open-top")||(e.classList.add("open-top"),e.classList.remove("open-bottom"),t=e.querySelector(".wplng-languages"),n=e.querySelector(".wplng-language-current"),(o=e.querySelector(".switcher-content"))&&t&&n&&(o.innerHTML="",o.appendChild(t.cloneNode(!0)),o.appendChild(n.cloneNode(!0))))})}function o(){document.querySelectorAll(".wplng-switcher.style-dropdown:not([data-wplng-initialized])").forEach(function(e){e.setAttribute("data-wplng-initialized","true"),e.addEventListener("pointerenter",function(){n()})})}document.querySelectorAll("a[data-wplng-flag][data-wplng-alt]").forEach(function(e){var t=document.createElement("img");t.src=e.getAttribute("data-wplng-flag"),t.alt=e.getAttribute("data-wplng-alt"),t.className="wplng-menu-flag",e.insertBefore(t,e.firstChild),e.insertBefore(document.createTextNode(" "),t.nextSibling),e.removeAttribute("data-wplng-flag"),e.removeAttribute("data-wplng-alt")}),document.querySelectorAll(".wplng-switcher.style-dropdown").forEach(function(e){e.addEventListener("pointerenter",function(){n()})}),n();new MutationObserver(function(e){let t=!1;e.forEach(function(e){e.addedNodes.length&&(t=!0)}),t&&(o(),n())}).observe(document.body,{childList:!0,subtree:!0}),o(),document.querySelectorAll("a[data-wplng-lang-id]").forEach(function(e){e.addEventListener("click",function(e){var t,n,o=this.getAttribute("onclick");o&&"event.preventDefault();"===o.trim()||(o=this.dataset.wplngLangId,(t=new Date).setFullYear(t.getFullYear()+1),n=window.wplngCookiePath&&"string"==typeof window.wplngCookiePath?window.wplngCookiePath:"/",document.cookie="wplingua-lang="+o+"; expires="+t.toUTCString()+"; path="+n)})});var e=document.getElementById("wplng-overloaded-close");e&&e.addEventListener("click",function(){var e=document.getElementById("wplng-overloaded-container");e&&(e.style.display="none")});try{var t,l,a=new URL(window.location.href),r=a.searchParams;let e=!1;r.has("wplng-load")&&"translated"===r.get("wplng-load")&&(r.delete("wplng-load"),e=!0),r.has("nocache")&&(r.delete("nocache"),e=!0),e&&(t=r.toString(),l=a.origin+a.pathname+(t?"?"+t:"")+(a.hash||""),history.replaceState(null,"",l))}catch(e){}});//# sourceMappingURL=front.js.map
