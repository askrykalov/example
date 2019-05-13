var
   tabStream;

window.addEventListener('onSourceId', function (event) {
   var constraints = {
      audio: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: event.sourceId
         }
      },
      video: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: event.sourceId
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
