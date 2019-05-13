var
   tabStream;

window.addEventListener('onSourceId', function (event) {
   var constraints = {
      audio: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: event.detail
         }
      },
      video: {
         mandatory: {
            chromeMediaSource: 'tab',
            chromeMediaSourceId: event.detail
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
