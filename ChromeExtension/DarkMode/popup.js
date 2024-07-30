document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');

  // Load the current state from storage
  chrome.storage.sync.get(['darkModeEnabled'], function (result) {
    toggle.checked = result.darkModeEnabled;
  });

  // Listen for changes to the toggle
  toggle.addEventListener('change', function () {
    const isEnabled = toggle.checked;

    // Save the new state to storage
    chrome.storage.sync.set({ darkModeEnabled: isEnabled });

    // Send a message to the content script to update the mode
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { darkModeEnabled: isEnabled });
    });
  });
});
