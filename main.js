document.addEventListener("DOMContentLoaded", function(event) {
   var
      EXTENSION_ID = 'janknfkldjmmecfllmdccfcdknldkeln';

   chrome.runtime.sendMessage(EXTENSION_ID, {message: 'startRec'}, function (reply) {
      console.log(JSON.stringify(reply))
   });
});
