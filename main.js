var
   EXTENSION_ID = 'janknfkldjmmecfllmdccfcdknldkeln',
   tabStream;

chrome.runtime.sendMessage(EXTENSION_ID, {message: 'startRec'}, function (sourceId) {
   var constraints = {
      audio: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: sourceId
         }
      },
      video: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: sourceId
         }
      }
   };
   navigator.getUserMedia(constraints,
      function (stream) {
         tabStream = stream;
      },
      function (err) {
      })
});
