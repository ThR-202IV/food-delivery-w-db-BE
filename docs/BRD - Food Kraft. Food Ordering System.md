**Project Name:** Food Kraft. Food Ordering System

**Project Type:** End-to-End E-commerce Solution

**Role:** Business Analyst & Full-Stack Developer


### **1. Executive Summary**
The goal of this project is to bridge the gap between local restaurant operations and digital customer accessibility. I identified a need for a unified platform that handles high-traffic menu browsing for users while providing a robust, role-protected management suite for restaurant staff.
### **2. Project Scope**
Through a mock discovery phase, I identified two primary user personas with distinct pain points:
1.	The Customer: Requires seamless navigation, visual menu clarity, and payment security to ensure a friction-free ordering process.
2.	The Restaurant Admin: Needs to manage inventory in real-time and track order fulfillment cycles without technical overhead.


### **3. User Stories and Acceptance Criteria**

### 🛒 Interface 1: Customer Side
**1.	Sign-Up**
-	User Story 
    - As a new customer, I want to create an account using my email address and a unique password, so that I can save my delivery preferences and order history.
-	Acceptance Criteria
    - Validate that the email is in a proper format (e.g., name@domain.com) and that the password meets a minimum length requirement (e.g., 8 characters).
    - Verify email uniqueness in MongoDB and return a clear error message if the account already exists.
    - Secure all passwords via Bcrypt hashing; ensure no plain-text storage in the database.
    - Ensure automatic JWT authentication and redirection to the Menu page upon successful registration.

 
**2.	Login**
-	User Story
    - As a returning customer, I want to log in using my credentials, so that I can quickly access my saved payment methods and place an order.
-	Acceptance Criteria
    - Allows login via Email and Password.
    - A "Forgot Password" link must be available on the login screen.
     -Ensure password security by masking password characters (e.g., as dots or stars) while typing.
    - After 5 failed attempts, the account should be locked for 15 minutes to prevent hacking.
    - Ensure automatic JWT authentication and redirection to the Menu page upon successful login.
	
**3.	User-Facing Menu & Filtering**
-	User Story
    - As a hungry customer, I want to filter the menu by category (e.g., Drinks, Food), so that I can quickly find items to order rather than scrolling through the entire list.
-	Acceptance Criteria
    - Display all active menu items with an image, title, description, and price.
    - Filter must update the menu display instantly without a full page reload.
    - Display a "No items found" message, when a category has no items.
    - Prices must be displayed in the local currency format.

**4.	Shopping Cart & Checkout**
-	User Story
    - As a ready-to-buy customer, I want to manage my shopping cart and proceed to payment so that I can review my selections and complete my purchase securely.
-	Acceptance Criteria
    - Ability to add, remove, or adjust the quantity of items in the cart.
    - Total Amount must automatically update whenever a quantity is changed (e.g., an item is added or removed).
    - The checkout button must remain disabled if the cart is empty.
    - Ensure secure processing using Stripe API for the total amount upon clicking Pay.
    - Generate a unique Order ID and clear the cart only after a successful payment response.

### 💻 Interface 2: Admin Side
**1.	Role-Based Access**
-	User Story
    - As an Administrator, I want to log in to a protected dashboard, so that I can manage the restaurant without unauthorized users interfering.
-	Acceptance Criteria
    - Provide a login interface that requires a unique administrator email/username and a password.
    - Redirect the Administrator to the private management dashboard upon successful authentication.
    - Access to any dashboard URLs (e.g., /admin/dashboard) without an active, authenticated session must be denied and redirected back to the login page.
    - Administrator's session must automatically expire after [X] minutes of inactivity, requiring them to log in again.
    - Store all administrator passwords using a secure Bcrypt algorithm and never in plain text.

**2.	Menu Management** 
-	User Story
    - As an Admin, I want to add, edit, or delete menu items, so that the website always reflects our current food offerings.
-	Acceptance Criteria
    - Functionality to create a new item by a name, description, price, and category. 
    - Upon saving, the item is added to the database and must appear on the public menu within 2 seconds.
    - Functionality to modify any field of an existing menu item. Changes must sync across the website in real-time.
    - Functionality to remove an item from the menu. Prompt a "Confirm Delete" modal to prevent accidental removals.  
    - Functionality to upload or update an image for each menu item, with the system enforcing specific file types (e.g., .jpg, .png). 
    - Option to mark an item as "Out of Stock" or "Hidden" without permanently deleting it from the database.

**3.	Order Management & Real-Time Tracking**
-	User Story
    - As an Admin, I want to update the status of an order (e.g., "Preparing" to "Out for Delivery"), so that the customer stays informed about their food.
-	Acceptance Criteria
    - Functionality to view a list of all active and historical orders. The list must display the Order ID, Customer Name, Timestamp, and current Status (e.g., Pending, Preparing, Out for Delivery).
    - Allow to update the status of an order via a dropdown menu or toggle. Each status change must be logged with a timestamp for auditing purposes.
    - Clicking an order opens a detailed view showing the specific items, quantities, special instructions, and total price.
    - Allow to cancel an order only if the status is "Pending." A "Reason for Cancellation" note must be required before the system confirms the removal.
    - Functionality to see order status updates in real-time without needing to manually refresh the page. 
    - When an order status is marked "Out for Delivery," display the driver's name and an estimated time of arrival.
    - System must prompt an automated push notification or SMS to the customer when the order status changes to "Out for Delivery" or "Delivered."

