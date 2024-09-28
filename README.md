<h2 align="left">Store Website</h2>
<br>
<div  align="center">
  <img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" width="100">
</div>
<br>
<h3 align="left">Description</h3>
<p>
This is a store website built with JavaScript. The project consists of two main sections: Authorization (using JWT) and the store itself. An external API is used in this project, which will be further explained in the API section below in the README.</p>
<br>
<h4><a href="https://store-js-lemon.vercel.app/">Store site (JS)</a></h4>
<br>
<h3 align="left">About the project:</h3>
<h5>Authorization (JWT):</h5>

This section of the project handles user authentication and access control using JWT. Below are the key aspects and issues related to the Authorization module:

- Login Page Issue: The API used for login does not allow any username and password combination to be used. Instead, a fixed username and password are set up for authentication.
- User-Specific Tokens: Each user's token is unique and tied to their identity, ensuring that access is personalized and secure.
- JWT Storage in Cookies: The JWT is securely stored in cookies, enhancing security and simplifying token management during user sessions.
- Access Level Verification: The system checks user permissions on different pages, ensuring that users can only access content and actions appropriate to their role or permissions.
- Registration Form Validation: The registration form includes validation checks to ensure that all user input meets the required criteria, such as valid email formats, password strength, and other necessary fields.
<h5>Store Website</h5>

The main part of the project functions as an online store where users can browse, search, and interact with products. Here are the key functionalities of the Store section:

- User Panel and Login Button Display: The user panel button and login options are shown based on the user’s status (logged in or not).
- Product Display from API: Products are fetched from an API and displayed on the store’s pages, providing users with a dynamic and updated product catalog.
- Product Search: Users can search for specific products using keywords, making it easy to find what they are looking for.
- Product Categorization: Products can be filtered by categories, allowing users to browse items based on different classifications.
- Combined Search and Filter: Users can use both search and category filters simultaneously to refine their product selection.
- User Information Display from API: User-related information is fetched from the API and displayed appropriately, enhancing user experience by showing relevant account details.
- Logout Functionality: Users can easily log out of their accounts, ensuring secure session management and providing control over their logged-in state.

<br>
<h3 align="left">Languages and Tools:</h3>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,html,css,vscode" />
  </a>
</p>
<br>
<hr>
<h3 align="left">Api :</h3>
<p>
API Integration

The project utilizes the API provided by [Fake Store API](https://fakestoreapi.com/). This API is an outstanding creation by an Iranian developer, offering a comprehensive and well-structured solution for e-commerce applications. 

Key features of the Fake Store API include:

- Comprehensive Product Data: The API provides detailed information about various products, including descriptions, prices, images, and categories.
- User Management: It also includes endpoints for managing user data, making it easy to integrate user authentication and authorization into the store.
- Ease of Use: The API is user-friendly, allowing developers to easily fetch and manipulate data without extensive setup or configuration.

I highly recommend using this API for your projects. Personally, I plan to use it again in the future because of its completeness and reliability.
</p>
