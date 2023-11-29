/* Sign in link */
const signInChange = document.getElementById("sign-in-link");

/* Sign up link */
const signUpChange = document.getElementById("sign-up-link");

/* Enter Name Input Field */
const enterName = document.getElementById("enter-name");

/* Create Password Input Field */
const createPassword = document.getElementsByName("psw");

/* Confirm Password Input Field */
const confirmPassword = document.getElementById("confirm-pswd");

/* Button for Sign Up */
const signUpButton = document.getElementById("signup-btn");

/* Sign In link */
const signInLink = document.getElementById("sign-in");

/* Sign Up link */
const signUpLink = document.getElementById("sign-up");
const signUpText = document.getElementById("sign-up-text");

const changeToSignIn = () => {
  enterName.classList.add("hidden");
  createPassword[0].placeholder = "Enter Password";
  confirmPassword.classList.add("hidden");
  signUpButton.innerHTML = "Sign in";
  signUpLink.classList.remove("hidden");
  signUpLink.classList.add("block");
  signInLink.classList.add("hidden");
  signUpText.innerHTML = "Sign in";
};

const changeToSignUp = () => {
  signInSection.remove();
  document.container.appendChild(signUpSection);
};

signInChange.addEventListener("click", function () {
  changeToSignIn();
});

signUpChange.addEventListener("click", function () {
  changeToSignUp();
});
