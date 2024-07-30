function getColorAt(x, y) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1;
    canvas.height = 1;
    ctx.drawImage(document.documentElement, -x, -y);
    const pixel = ctx.getImageData(0, 0, 1, 1).data;
    return {
      r: pixel[0],
      g: pixel[1],
      b: pixel[2],
      a: pixel[3]
    };
  }
  
  function luminance(r, g, b) {
    const a = [r, g, b].map(function (v) { //map function applies a transformation to each value
      v /= 255; //Normalize colors from range of 0-255 to a range of 0-1
      
      //gamma correction to linearize the sRGB value
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    // Computes  brightness of the color using the weighted sum 
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  
  function isDarkColor(r, g, b) {
    return luminance(r, g, b) < 0.5;
  }
  
const bgColor = getColorAt(0, 0); // Get color at top-left corner
const darkMode = isDarkColor(bgColor.r, bgColor.g, bgColor.b);


function applyDarkMode() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
      }
      a {
        color: #bb86fc !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  function applyLightMode() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      a {
        color: #1a73e8 !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  if (darkMode) {
    applyDarkMode();
  } else {
    applyLightMode();
  }
  

function detectAndApplyMode() {
  const bgColor = getColorAt(0, 0); // Sample color
  const darkMode = isDarkColor(bgColor.r, bgColor.g, bgColor.b);
  
  if (darkMode) {
    applyDarkMode();
  } else {
    applyLightMode();
  }
}

window.addEventListener('load', detectAndApplyMode);
