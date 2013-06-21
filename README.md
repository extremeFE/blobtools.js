#blobtools.js

blobtools.js used for creating and uploading blob object.

###How to use

```javascript
var sHTML = "<img src='data:image/png;base64,iVBORw0KGgoA...'>"; // img tag which contains base64 data
var data = sHTML.match(/base64,(\S+)"/)[1]; // base64 data ex) iVBORw0KGgoA...
var contentType = sHTML.match(/src="data:(\S+);base64/)[1]; // content type ex) image/png

// 01. create blob from base64(data and contentType)
var blob = blobtools.b64toBlob(data, contentType);

// 02. upload blob to server
blobtools.uploadBlob({ // upload blob
  blob: blob,
  url: uploadUrl, // upload url
  fileName : 'paste_image.png' // upload file name
  callback: callback // callback after upload
});
```

###dependency
blobtools.js is dependent on jQuery.
