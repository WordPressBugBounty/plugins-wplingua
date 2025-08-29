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
jQuery(document).ready(function(a){function n(){let o=a(window).height()/2;a(".wplng-switcher.style-dropdown").each(function(n){var t,e;a(this).offset().top-a(window).scrollTop()<o?a(this).hasClass("open-bottom")||(a(this).addClass("open-bottom"),a(this).removeClass("open-top"),e=a(".wplng-languages",this).prop("outerHTML"),t=a(".wplng-language-current",this).prop("outerHTML"),a(".switcher-content",this).html(t+e)):a(this).hasClass("open-top")||(a(this).addClass("open-top"),a(this).removeClass("open-bottom"),t=a(".wplng-languages",this).prop("outerHTML"),e=a(".wplng-language-current",this).prop("outerHTML"),a(".switcher-content",this).html(t+e))})}if(a("a[data-wplng-flag][data-wplng-alt]").each(function(){var n="",n=(n=(n=(n+="<img")+(' src="'+a(this).attr("data-wplng-flag")+'" '))+(' alt="'+a(this).attr("data-wplng-alt")+'" '))+' class="wplng-menu-flag"'+"> ";a(this).html(n+a(this).html()),a(this).removeAttr("data-wplng-flag"),a(this).removeAttr("data-wplng-alt")}),a(window).scroll(function(){n()}),a("#wplng_style").on("input",function(){n()}),n(),a("#wplng-in-progress-container").length){var e=a("#wplng-in-progress-container").attr("data-wplng-url-load");let t=a("#wplng-in-progress-container").attr("data-wplng-url-reload");e&&""!==e.trim()?a.ajax({url:e,method:"GET",success:function(n){t&&""!==t.trim()?(-1===t.indexOf("?wplng-load=")&&-1===t.indexOf("&wplng-load=")&&(a("#wplng-in-progress-percent").html("100"),a("#wplng-progress-bar-value").animate({width:"100%"},500)),window.location.href=t):console.log("wpLingua ERROR: Load in progress - Invalid reload URL")}}):console.log("wpLingua ERROR: Load in progress - Invalid load URL")}function t(){var n=parseInt(a("#wplng-in-progress-percent").html());n<99&&(n++,a("#wplng-in-progress-percent").html(n),a("#wplng-progress-bar-value").animate({width:n.toString()+"%"},500))}t(),a("#wplng-in-progress-percent").length&&setInterval(t,2e3),a("#wpadminbar").length&&a("#wplng-in-progress-container").length&&a("#wpadminbar").hide(),a("#wplng-overloaded-close").on("click",function(){a("#wplng-overloaded-container").hide()})});//# sourceMappingURL=front.js.map
