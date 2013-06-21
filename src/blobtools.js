"use strict";

// # blobtools.js
// blobtools.js used for creating and uploading blob object
// blobtools.js is dependent on jQuery
(function(root) {
  var blobtools;

  if (typeof root.blobtools === "undefined") {
    blobtools = root.blobtools = {};
  } else {
    throw "namesapce existed!";
  }

  // support amd module
  if (typeof define === "function" && define.amd) {
    define( "blobtools", [], function () { return blobtools; } );
  }

  // ### b64toBlob
  // > create blob from base64 data
  blobtools.b64toBlob = function(b64Data, type) {
    var binary = atob(b64Data);
    var length = binary.length;
    var abf = new ArrayBuffer(length);
    var u8a = new Uint8Array(abf);
    for (var i = 0; i < length; i++) {
      u8a[i] = binary.charCodeAt(i);
    }
    return new Blob([u8a], {type: type || ''});
  };

  // ### uploadBlob
  // > upload blob
  // > data : {blob: blob, url: uploadUrl, prefixFileName: 'paste_image', callback: callback}
  blobtools.uploadBlob = function(data) {
    var formData = new FormData();
    formData.append('file', data.blob, data.fileName);

    $.ajax({
      url: data.url,
      type: "POST",
      data:formData,
      processData: false,
      contentType: false
    }).done(data.callback);
  };
})(this);