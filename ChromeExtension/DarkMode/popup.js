document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('darkModeToggle');

  // Initialize the checkbox state based on the current page's dark mode status
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.classList.contains("dark-mode")'
    }, function(results) {
      if (results[0]) {
        checkbox.checked = true;
      }
    });
  });

  // Add event listener to toggle dark mode
  checkbox.addEventListener('change', function() {
    chrome.runtime.sendMessage({ action: "toggleDarkMode" });
  });
});

