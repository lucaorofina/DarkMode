chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'toggleDarkMode') {
      chrome.scripting.executeScript({
        target: { allFrames: true },
        function: toggleDarkMode
      });
    }
  });
  
  