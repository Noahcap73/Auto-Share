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
const confirmPasswordInput = document.getElementsByName("cpsw");

/* Button for Sign Up */
const signUpButton = document.getElementById("signup-btn");

/* Sign In link */
const signInLink = document.getElementById("sign-in");

/* Sign Up link */
const signUpLink = document.getElementById("sign-up");
const signUpText = document.getElementById("sign-up-text");

/* Icons */
const userIcon = document.getElementById("user-icon");

const username = document.getElementsByName("name");

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
  enterName.classList.remove("hidden");
  createPassword[0].placeholder = "Create Password";
  confirmPassword.classList.remove("hidden");
  signUpButton.innerHTML = "Sign up";
  signUpLink.classList.add("hidden");
  signUpLink.classList.remove("block");
  signInLink.classList.remove("hidden");
  signUpText.innerHTML = "Sign up";
};

signInChange.addEventListener("click", function () {
  changeToSignIn();
});

signUpChange.addEventListener("click", function () {
  changeToSignUp();
});
