ZeroClipboard.version = "{{version}}";
ZeroClipboard._moviePath = 'ZeroClipboard.swf'; // URL to movie
ZeroClipboard._client = null; // The client

/*
 * Set the movie path for the flash file.
 *
 * returns nothing
 */
ZeroClipboard.setMoviePath = function (path) {
  // set path to ZeroClipboard.swf
  this._moviePath = path;
};

/*
 * Sets trusted domain to configure the flash file with.
 *
 * returns nothing
 */
ZeroClipboard.setTrustedDomain = function (obj) {
  this._trustedDomain = obj;
};

/*
 * Self-destruction and clean up everything
 *
 * returns nothing
 */
ZeroClipboard.destroy = function () {
  var query = ZeroClipboard.$("#global-zeroclipboard-html-bridge");
  if (!query.length) return;

  delete ZeroClipboard._client;
  var bridge = query[0];
  bridge.parentNode.removeChild(bridge);
};

/*
 * Simple Flash Detection
 *
 * returns true if flash is detected
 */
ZeroClipboard.detectFlashSupport = function () {

  // Assume we don't have it
  var hasFlash = false;

  try {

    // If we can create an ActiveXObject
    if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
      hasFlash = true;
    }
  } catch (error) {

    // If the navigator knows what to do with the flash mimetype
    if (navigator.mimeTypes["application/x-shockwave-flash"]) {
      hasFlash = true;
    }
  }

  return hasFlash;
};