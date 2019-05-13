var
   tabStream;

window.addEventListener('onSourceId', function (sourceId) {
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
      }
   )
});