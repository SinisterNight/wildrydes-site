

// Alert on page opening
alert('Before you can view the site, complete the captcha.');

// Open a new window with the captcha overlay
const captchaWindow = window.open('', 'Captcha Window', 'width=400,height=300');

// Display the captcha image with the link you provided
const captchaImageSrc = 'https://lifewithoutmychild.com/wp-content/uploads/2018/08/IMG_4691-e1546714656195.jpg';
captchaWindow.document.write(`
  <div id="captcha-overlay" class="captcha-overlay">
    <div class="captcha-container">
      <h2>Complete the Captcha to Access the Site</h2>
      <img src="${captchaImageSrc}" alt="Captcha Image">
      <input type="text" id="captchaInput" placeholder="Enter the code">
      <button onclick="verifyCaptcha()">Submit</button>
    </div>
  </div>
`);

// Chance rate of the captcha (25%)
const randomChance = Math.random();
if (randomChance > 0.25) {
  closeCaptchaOverlay();
}

// Function to verify the captcha
function verifyCaptcha() {
  const userAnswer = captchaWindow.document.getElementById('captchaInput').value;
  const correctAnswer = 'your_correct_captcha_code'; // Replace with your actual correct answer

  if (userAnswer === correctAnswer) {
    // Correct captcha
    alert('Congratulations! Your answer is correct.');
    closeCaptchaOverlay();
  } else {
    // Incorrect captcha
    alert('Incorrect answer. Please try again.');
    captchaWindow.document.getElementById('captchaInput').value = ''; // Reset input
  }
}

// Function to close the captcha overlay
function closeCaptchaOverlay() {
  captchaWindow.close();
}
