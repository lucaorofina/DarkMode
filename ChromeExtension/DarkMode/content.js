// content.js
chrome.storage.sync.get('colorToggled', (data) => {
  if (data.colorToggled) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

