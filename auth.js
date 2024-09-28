import { postData } from "./utils/httpReq.js";
import { setCookie } from "./utils/cookie.js";
import authHandler from "./utils/authorization.js";
import validateForm from "./utils/validation.js";

// Selectors
const inputsBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

// Function to handle form submission and login logic
const submitHandler = async (event) => {
  event.preventDefault();
  const username = inputsBox[0].value;
  const password = inputsBox[1].value;
  const validation = validateForm(username, password);
  if (!validation) {
    return;
  }
  const response = await postData("auth/login", {
    username: username,
    password: password,
  });
  setCookie(response.token);
  location.assign("index.html");
};

// Initialize the application and handle authentication and authorization
const init = () => {
  authHandler();
};

// Event listeners
loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", init);
