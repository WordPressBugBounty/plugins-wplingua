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
jQuery(document).ready(function(l){function t(){let e=l(window).height()/2;l(".wplng-switcher.style-dropdown").each(function(t){var a,n;l(this).offset().top-l(window).scrollTop()<e?l(this).hasClass("open-bottom")||(l(this).addClass("open-bottom"),l(this).removeClass("open-top"),n=l(".wplng-languages",this).prop("outerHTML"),a=l(".wplng-language-current",this).prop("outerHTML"),l(".switcher-content",this).html(a+n)):l(this).hasClass("open-top")||(l(this).addClass("open-top"),l(this).removeClass("open-bottom"),a=l(".wplng-languages",this).prop("outerHTML"),n=l(".wplng-language-current",this).prop("outerHTML"),l(".switcher-content",this).html(a+n))})}l("a[data-wplng-flag][data-wplng-alt]").each(function(){var t="",t=(t=(t=(t+="<img")+(' src="'+l(this).attr("data-wplng-flag")+'" '))+(' alt="'+l(this).attr("data-wplng-alt")+'" '))+' class="wplng-menu-flag"'+"> ";l(this).html(t+l(this).html()),l(this).removeAttr("data-wplng-flag"),l(this).removeAttr("data-wplng-alt")}),l(window).scroll(function(){t()}),l("#wplng_style").on("input",function(){t()}),t(),l("a[data-wplng-lang-id]").on("click",function(t){var a,n=l(this).attr("onclick");n&&"event.preventDefault();"===n.trim()||(n=l(this).data("wplng-lang-id"),(a=new Date).setFullYear(a.getFullYear()+1),document.cookie="wplingua-lang="+n+"; expires="+a.toUTCString()+"; path=/")}),l("#wplng-overloaded-close").on("click",function(){l("#wplng-overloaded-container").hide()});try{var a,n,e=new URL(window.location.href),o=e.searchParams;let t=!1;o.has("wplng-load")&&"translated"===o.get("wplng-load")&&(o.delete("wplng-load"),t=!0),o.has("nocache")&&(o.delete("nocache"),t=!0),t&&(a=o.toString(),n=e.origin+e.pathname+(a?"?"+a:"")+(e.hash||""),history.replaceState(null,"",n))}catch(t){}});//# sourceMappingURL=front.js.map
