require("jquerycookie");
require("../css/page2.css");

$.cookie('isCookieSet', 'Yes');
$("#test2").html("page2.js loaded");