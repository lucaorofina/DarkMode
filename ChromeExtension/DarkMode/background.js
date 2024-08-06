// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleDarkMode") {
    chrome.tabs.insertCSS({ file: "darkmode.css" }, function() {
      chrome.tabs.executeScript({
        code: 'document.body.classList.toggle("dark-mode");'
      });
    });
  }
});
