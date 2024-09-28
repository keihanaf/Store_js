// Constants for API base URL and other settings
const BASE_URL = "https://fakestoreapi.com";

// Function to make a POST request to the given API endpoint with the provided data
const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    alert("An error occured!");
  }
};

const getData = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    const json = await response.json();
    return json;
  } catch (error) {
    alert("An error occured!");
  }
};

export { postData, getData };
