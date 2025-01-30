# TechMart - Multipage E-Commerce Website 🛒

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightblue)](https://techmart-theta.vercel.app/)

[![Home Screenshot](./assets/images/Screenshot.png)](https://techmart-theta.vercel.app/)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Challenges Faced](#challenges-faced)
- [Learning Outcomes](#learning-outcomes)
- [Deployment Instructions](#deployment-instructions)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Project Overview
**TechMart** is a fully responsive, multipage e-commerce website designed to showcase modern front-end development skills. The website includes three main pages: **Home**, **Cart**, and **Contact**, each with unique content and functionality. The project demonstrates proficiency in **HTML5**, **CSS3**, **JavaScript**, and deployment to a live server.

The website is designed with a **modern and minimalistic aesthetic**, ensuring a seamless user experience across all devices. It incorporates interactive elements, form validation, and dynamic content updates using JavaScript.

---

## Features

### 1. **Home Page**
- **Hero Carousel**: A responsive image slider that dynamically rotates featured product images.
- **Category Cards**: Interactive cards for browsing products by category.
- **Featured Products**: A grid of featured products with "Add to Cart" functionality.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

### 2. **Cart Page**
- **Dynamic Cart**: Products added from the homepage are dynamically displayed in the cart.
- **Quantity Control**: Users can increase or decrease the quantity of items in the cart.
- **Remove Items**: Items can be removed from the cart with a single click.
- **Order Summary**: Displays subtotal, shipping, and total price.

### 3. **Contact Page**
- **Contact Form**: A fully functional form with validation for name, email, and message fields.
- **Store Information**: Displays store address, phone number, email, and working hours.
- **Interactive Map**: An embedded Google Map showing the store's location.

### 4. **JavaScript Functionality**
- **Add to Cart**: Products are added to the cart and stored in `localStorage`.
- **Form Validation**: Ensures all required fields are filled before submission.
- **Dynamic Updates**: Cart items and totals are updated in real-time.

---

## Technology Stack
- **Frontend**:
  - **HTML5**: For structuring the website.
  - **CSS3**: For styling and responsive design.
  - **JavaScript**: For interactivity and dynamic updates.
  - **Bootstrap**: For responsive layout and pre-built components.
- **Deployment**:
  - **Vercel**: For hosting the live website.
- **Tools**:
  - **Google Fonts**: For typography.
  - **Font Awesome**: For icons.
  - **Pexels**: For high-quality images.

---

## Challenges Faced

1. **Dynamic Cart Updates**:
   - Implementing real-time updates for the cart page was challenging.
   - **Solution**: Used `localStorage` to store cart data and dynamically updated the DOM using JavaScript.

2. **Responsive Design**:
   - Ensuring the website looked great on all screen sizes.
   - **Solution**: Used Bootstrap's grid system and media queries for responsiveness.

3. **Form Validation**:
   - Validating the contact form without a backend was tricky.
   - **Solution**: Used JavaScript to validate inputs and provide real-time feedback to users.

4. **Hero Carousel Implementation**:
   - Creating an engaging, auto-rotating image slider required JavaScript logic.
   - **Solution**: Used event listeners and timers to cycle through images dynamically.

5. **Deployment**:
   - Setting up the website on a hosting platform required understanding the deployment process.
   - **Solution**: Deployed the website using **Vercel**, which provides fast and reliable hosting with seamless GitHub integration.

---

## Learning Outcomes

1. **HTML5 and Semantic Markup**:
   - Used semantic tags like `<header>`, `<main>`, `<section>`, and `<footer>` to create a well-structured website.

2. **CSS3 and Responsive Design**:
   - Created responsive layouts using **CSS Grid**, **Flexbox**, and **media queries**.
   - Implemented modern design trends like **flat design** and **minimalism**.

3. **JavaScript Interactivity**:
   - Added dynamic functionality like updating the cart and validating forms.
   - Used `localStorage` for persistent data storage.

4. **Deployment**:
   - Understood the process of deploying a website using **Vercel** for fast and efficient hosting.

---

## Deployment Instructions

### Live Website
The website is deployed and accessible at:  
[TechMart Live Demo](https://techmart-theta.vercel.app/)

### Running Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/techmart.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd techmart
   ```
3. **Open the Website**:
   - Open the `index.html` file in your browser.
   - Alternatively, use a live server extension in your code editor.

---

## Project Structure

```plaintext
techmart/
├── index.html               # Homepage
├── cart.html                # Cart Page
├── contact.html             # Contact Page
├── assets/
│   ├── images/              # Image assets
│   │   ├── Screenshot.png   # Example image file
├── css/
│   ├── styles.css           # Main stylesheet
├── js/
│   ├── main.js              # JavaScript file
├── README.md                # Project documentation
```

---

## Future Improvements
- Add a backend to handle user authentication and order processing.
- Implement a search functionality for products.
- Integrate a payment gateway for checkout.

---

## Credits
- **Images**: Pexels
- **Icons**: Font Awesome
- **Fonts**: Google Fonts

---

## License
This project is licensed under the **MIT License**. See the LICENSE file for details.
