# Ecommerce-Follow-Along
**Project Title:** ClothSelling - Your Ultimate Fashion Destination

**Project Overview:**
ClothSelling is an e-commerce platform dedicated to providing users with a seamless and enjoyable shopping experience for all their clothing needs. The app aims to bridge the gap between fashion retailers and customers by offering a wide range of products, easy navigation, personalized recommendations, and a secure checkout process. The goal is to create a user-friendly app that caters to modern consumers who value convenience, style, and affordability.

**Key Features:**
1. **User Registration and Login:** Secure authentication using email, phone, or social media accounts.
2. **Product Catalog:** An organized and filterable catalog showcasing clothing items by category, size, price, and brand.
3. **Search and Filters:** Advanced search options with filters for quick and precise results.
4. **Personalized Recommendations:** AI-driven suggestions based on user preferences, browsing history, and purchase patterns.
5. **Wishlist:** Allow users to save favorite items for future purchases.
6. **Shopping Cart and Checkout:** Simple cart management with multiple payment gateway integrations for secure transactions.
7. **Order Tracking:** Real-time tracking of orders with notifications for updates.
8. **Reviews and Ratings:** Enable customers to share feedback and rate products.
9. **Offers and Discounts:** Highlight seasonal sales, promo codes, and exclusive deals.
10. **Admin Dashboard:** Tools for managing inventory, tracking sales, and analyzing user behavior.

**Tech Stack:**
- **Frontend:** React Native (for cross-platform mobile app development)
- **Backend:** Node.js with Express.js (for handling API requests)
- **Database:** MongoDB (for storing product and user data)
- **Authentication:** Firebase Authentication
- **AI/Recommendation System:** TensorFlow.js (for personalized recommendations)
- **Payment Gateway:** Stripe and PayPal
- **Hosting:** AWS or Google Cloud (for scalability and reliability)
- **Version Control:** Git with GitHub for collaboration

**Why This Project:**
This project was chosen because it aligns with the growing trend of e-commerce and online shopping. Developing a cloth-selling app offers an opportunity to explore various aspects of software engineering, including:
- **Real-World Problem Solving:** Addressing common pain points like finding the right product or secure payments.
- **Learning Advanced Technologies:** Working with AI for personalized recommendations and secure payment integration.
- **Scalability:** Designing a platform that can handle a growing user base and inventory.
- **Entrepreneurial Skills:** Understanding the dynamics of retail and user engagement.
- **UI/UX Focus:** Building an intuitive, visually appealing, and user-centric interface.


**Milestone 2:** Frontend Development (Login Page)**
For this milestone, we successfully created the Login Page using React's Create React App (CRA). To improve the user interface and design, we will be updating the layout with Tailwind CSS for styling and incorporate React-Icons for intuitive icons. Tailwind CSS will help us streamline the design process with its utility-first classes, making the UI responsive and visually appealing.

The Login Page will include fields for the user's email and password, and will handle form validation, state management, and error handling for incorrect login attempts. React Icons will be utilized for visual appeal and ease of use, enhancing the overall experience.

**Milestone 3:** Backend Structure and Initial Setup**
At this stage, we’ve laid the foundation for the backend by setting up the directory structure for the project. The backend is structured as follows:

src/ Directory: Contains all source code files for the server.
config/: Stores environment configuration files like .env for MongoDB URL and the server port.
controllers/: Defines functions to handle incoming requests for various routes.
database/: Contains the MongoDB connection logic in db.js.
middleware/: Houses custom middleware functions such as error.js for centralized error handling.
model/: Contains Mongoose models for the database schema.
routers/: Defines route handlers for different API endpoints.
utils/: Stores utility functions, including the ErrorHandler.js to manage application-level errors.
In the index.js file, we imported Express, initialized the app, and set up basic routing and server listening. We can now handle HTTP requests through app.get and set the server to listen for incoming requests on the specified port.

**Milestone 4:** Backend Structure and Initial Setup**
creating user model, user controller and Multer support

 **Milestone 5:** Sign-Up Page Development and Form Validation
In this milestone, I focused on building the Sign-Up Page for user registration and implementing form validation.

Key Objectives:
Created the frontend UI for the Sign-Up Page, where users can register by entering their details (Name, Email, Password).
Ensured proper form validation to check if the email is in the correct format and if the password meets security requirements (e.g., minimum length).
This step ensures that users can input their information securely and accurately before submitting it to the server.

What I Learned:
Built a user-friendly and clean Sign-Up form using HTML and CSS.
Implemented form validation to ensure that only valid data is submitted.

**Milestone 6:** Backend Structure and Initial Setup** Password Encryption and User Data Storage

Password Hashing:

Implement bcrypt to hash the user's password during the signup process. Ensure that the hashed password is stored in the database instead of the plaintext version to enhance security. User Data Storage:

Save all relevant user information (e.g., name, email, etc.) in the database. Maintain the integrity and confidentiality of the password by ensuring it remains encrypted throughout the process.

**Milestone 7**
Create Login Endpoint:

Accept user credentials (email/username and password). Retrieve the corresponding user from the database. Validate Password:
Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.

**Milestone 8**
In this milestone we created two components called Home.jsx and productcard.jsx. product card.jsx is the template used in home.jsx to map out all the products and display them. We also added routes to the home.jsx to display it when the page loads. Based on the number of products the products are mapped and displayed.

**Milestone 9:** Product Form Creation
Overview

In this milestone, I created a product form designed to collect all necessary details for new products. This form is essential for inputting data that will be stored in the MongoDB database and displayed on the product page, which was made in the previous milestone.

Steps Taken

Form Development: I designed and implemented a user-friendly form that allows for the input of multiple products, images along with other relevant product details such as name price description catagory tags... etc.

For this milestone I mostly worked on the frontend of the project. I created a new file named as the productform.jsx.

**Milestone 10**
In this milestone I created a schema for products. I made this using a new js file in the Model folder named Productmodel.js. In this I used mongoose to make the schema. I also created a new file called Products.js when I have all the program for initiating a post request that will store all the data in the database. I also used the middleware Multer to process and use the image files that would be uploaded of the product.I have made the neccessary changes to the middleware folder and Index.js to work as intended.

**In Milestone 11:**
I'll be working on creating an endpoint in the backend to send all product data from MongoDB to the frontend. On the frontend, I'll write a function to fetch this data and display it dynamically by passing it to a product card component. This milestone will help me understand how to send and receive data between the backend and frontend, as well as how to display that data dynamically using components.

**In Milestone 12:**
I successfully wrote an endpoint that filters product data based on my email and sends it from MongoDB to the frontend. I also created a function on the frontend to fetch this filtered data and display it dynamically by passing it to the product card component. Through this milestone, I learned how to filter data with specific constraints and send it to the client, as well as how to dynamically display the fetched data using components.

**In Milestone 13:**
I will learn how to write an endpoint that updates existing data in MongoDB. The endpoint will receive new data and update the corresponding document in the database. On the frontend, I will add an "Edit" button to the product card. When the button is clicked, the relevant data will be sent to a form, where it will auto-fill the existing information, allowing the user to edit it. Once the changes are made, they can be saved. This milestone will help me understand how to perform update operations in detail. 

**In Milestone 14:**
I successfully wrote an endpoint that deletes a product from MongoDB using its specific ID. On the frontend, I added a "Delete" button to the product card. When clicked, the product's ID is sent to the server endpoint, which removes the product from the database. Through this milestone, I gained a deeper understanding of how to perform delete operations in detail and ensure smooth data removal from the backend.

**Milestone 15: Navigation Bar Implementation**
Navbar Creation: Developed a persistent navigation bar that appears on all pages, enhancing user navigation. NavLinks Added: Included links to Home, Product Form, Login, and Sign Up pages for easy access. Styling: Utilized Tailwind CSS to ensure a responsive and visually appealing design.

**Milestone 16: Single Product Detail Page**
SingleProduct.jsx: Developed a dedicated page to display detailed information about individual products. Routing: Configured routes to navigate to the Single Product page from the product listings. Enhancements: Made minor adjustments to improve user experience across the site.

**Milestone 17 & 18: Cart Functionality Development**
Cart Schema: Extended the existing schema to include cart details for each user. Post Request: Created an endpoint to handle adding products to the user's cart and storing them in the database. Multer Integration: Ensured image uploads function correctly within the cart system.

**Milestone 19: Cart Page Implementation**
Cart Components: Developed Cart.jsx and CartComponent.jsx to render the cart interface. Data Fetching: Implemented fetch requests to retrieve and display products in the user's cart. Quantity Management: Added functionality to adjust product quantities using increment and decrement buttons.

**Milestone 20: User Profile Page**
Profile Endpoint: Established an endpoint to retrieve and send user data to the frontend. Profile.jsx: Created a profile page to display user information, enhancing personalization.

**Milestone 21: Address Form Creation**
Address.jsx: Developed a form for users to input address details, including country, state, and pincode. State Management: Utilized useState hook to manage form inputs. Form Submission: Implemented Axios to send address data to the backend and navigate to the profile page upon submission.

**Mliestone 22:**
Create a backend endpoint to receive an address from the frontend's address form. The endpoint will add the address to the user's addresses array in the user profile stored in the database, ensuring proper data persistence.

**Milestone 23:**
I’ve completed Milestone 23 by adding a "Place Order" button in the cart page that redirects to a "Select Address" page, displaying all user addresses. I also implemented a backend endpoint to fetch and send the user’s addresses.

**Milestone 24: Order Summary and Confirmation**
Order Summary: Displayed all products included in the order along with selected delivery address and total cart value. Place Order Button: Implemented a final confirmation button to place the order, completing the purchase process.

**Milestone 25: Backend Endpoint for Placing Orders**
Created an API endpoint to receive user, product, and address details, retrieve user _id via email, and store individual product orders with the same address in the MongoDB orders collection.

**Milestone 26: Fetch User Orders Endpoint**
Built an API endpoint to fetch all orders of a user by retrieving their _id using their email and sending all associated orders in the response.

**Milestone 27: My Orders Page**
We created a "My Orders" page for the frontend of the Ecommerce-Follow-Along project. This page displays all the orders placed by the user.

**Milestone 28 - Cancel Order Feature**
Added a "Cancel Order" button in the My Orders page and created a backend endpoint to update order status to "Cancelled".
Users can cancel their orders unless they are already marked as "Cancelled".

**Milestone 29: PayPal account**
I created a PayPal Developer account by logging into the PayPal Developer Dashboard. After logging in, I created a sandbox account and saved the UserID and Client ID. On the order confirmation page, I added two payment options using radio buttons: COD (Cash on Delivery) and Online Payment (PayPal). When the "Online Payment" option is selected, the PayPal button is displayed. In the next step, I will write the code to dynamically load and use the PayPal button for online payments.
