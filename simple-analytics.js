// Simple Analytics - 100% privacy-first analytics
(function() {
  var script = document.createElement('script');
  script.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  script.async = true;
  document.head.appendChild(script);

  // noscript fallback (pixel for non-JS environments won't help in JS,
  // but we add the pixel as an img for additional tracking coverage)
  var img = new Image(1, 1);
  img.src = 'https://queue.simpleanalyticscdn.com/noscript.gif';
  img.alt = '';
  img.referrerPolicy = 'no-referrer-when-downgrade';
  img.style.cssText = 'position:absolute;left:-9999px;visibility:hidden';
  document.body.appendChild(img);
})();
