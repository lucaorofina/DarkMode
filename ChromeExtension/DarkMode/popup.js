document.getElementById('toggleDarkMode').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'toggleDarkMode' });
});
