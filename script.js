// ==============================
// Select HTML Elements
// ==============================

const signupForm = document.getElementById("signupForm");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");


// ==============================
// Show and Hide Password
// ==============================

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {

  button.addEventListener("click", function () {

    // Get the target input field
    const targetId = this.dataset.target;

    const input = document.getElementById(targetId);

    // Toggle password visibility
    if (input.type === "password") {

      input.type = "text";

      this.textContent = "Hide";

    } else {

      input.type = "password";

      this.textContent = "Show";
    }

  });

});


// ==============================
// Form Submission
// ==============================

signupForm.addEventListener("submit", function (event) {

  // Prevent page reload
  event.preventDefault();

  // Get entered password values
  const passwordValue = password.value;

  const confirmPasswordValue = confirmPassword.value;

  // Check password length
  if (passwordValue.length < 8) {

    showMessage("Password must contain at least 8 characters.", "error");

    return;
  }

  // Check whether passwords match
  if (passwordValue !== confirmPasswordValue) {

    showMessage("Passwords do not match!", "error");

    return;
  }

  // Get student name
  const studentName = document.getElementById("fullname").value.trim();

  // Display success message
  showMessage(
    `Congratulations, ${studentName}! Registration completed successfully.`,
    "success"
  );

  // Reset form after successful submission
  signupForm.reset();

  // Reset password visibility buttons
  toggleButtons.forEach(button => {
    button.textContent = "Show";
  });

});


// ==============================
// Display Messages
// ==============================

function showMessage(text, type) {

  message.textContent = text;

  message.className = "message " + type;

}