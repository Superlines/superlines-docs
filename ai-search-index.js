(function(){
  var img = new Image(1,1);
  var params = "tid=sl_bt_zop3jox8frowoly8nqi32ywb0o565a8g&url=" + encodeURIComponent(window.location.href);
  if (document.referrer) params += "&ref=" + encodeURIComponent(document.referrer);
  img.src = "https://api.aisearchindex.com/api/pixel?" + params;
  img.style.cssText = "position:absolute;left:-9999px;visibility:hidden";
  img.alt = "";
  document.body.appendChild(img);
})();
