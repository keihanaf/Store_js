// Function to validate username
const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

// Function to validate password
const validatePassword = (password) => {
  const regex = /^.{4,20}$/;
  const result = regex.test(password);
  return result;
};

// Function to validate form data and display appropriate error messages
const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult) {
    alert("Invalid username.");
  } else if (!passwordResult) {
    alert("Invalid password.");
  }
};

export default validateForm;
