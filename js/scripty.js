

function verifyAnswer() {
  const userAnswer = document.getElementById('verificationAnswer').value;
  const correctAnswer = '4'; // The correct answer

  if (userAnswer === correctAnswer) {
    displayVerificationResult('Congratulations! Your answer is correct.');
   
  } else {
    displayVerificationResult('Verification failed. Please try again with the correct answer.');
   
  }
}

function displayVerificationResult(message) {
  const resultContainer = document.getElementById('verificationResult');
  resultContainer.textContent = message;
  setTimeout(() => {
    resultContainer.textContent = ''; 
  }, 3000); 
}
