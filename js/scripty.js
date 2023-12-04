alert('Before you can view the site, complete the captcha.');

// Open a new window with the captcha overlay
const captchaWindow = window.open('', 'Captcha Window', 'width=400,height=300');

const captchaImageSrc = 'https://lifewithoutmychild.com/wp-content/uploads/2018/08/IMG_4691-e1546714656195.jpg';
captchaWindow.document.write(`
  <div id="captcha-overlay" class="captcha-overlay">
    <div class="captcha-container">
      <h2>Complete the Captcha to Access the Site</h2>
      <h3>How many acorns are in this bucket?</h3>
      
      <!-- Centered Image -->
      <div style="text-align: center;">
        <img src="${captchaImageSrc}" alt="Captcha Image">
      </div>

      <!-- Input field -->
      <input type="text" id="captchaInput" placeholder="Enter your guess">
      <button onclick="verifyCaptcha()">Submit</button>
    </div>
  </div>
`);


// Chance rate of the captcha (25%)
const randomChance = Math.random();
if (randomChance > 0.25) {
  closeCaptchaOverlay();
}

function verifyCaptcha() {
  // 1% chance of correct captcha
  const isCorrectCaptcha = Math.random() <= 0.01;

  if (isCorrectCaptcha) {
    // Correct captcha
    alert('Congratulations! Your answer is correct.');
  } else {
    // Incorrect captcha
    alert('I guess you were wrong, good luck.');
  }

  closeCaptchaOverlay();
}

// Function to close the captcha overlay
function closeCaptchaOverlay() {
  captchaWindow.close();
}

document.addEventListener("DOMContentLoaded", function () {
  captchaWindow.document.getElementById("captcha-overlay").style.display = "block";
});
