# AI-Driven Supply Chain Management System for SMEs (Huawei Competition)

This project is a prototype for an AI-Driven Supply Chain Management System tailored to SMEs in the Retail and E-commerce sectors. The application is designed to optimize inventory management, streamline logistics, and provide valuable AI-driven demand forecasting insights. This README outlines the requirements, features, tech stack, and development plan for the project.

---

## Requirements and Features

### Authentication

- **User Access:** Only authorized SME employees can sign up within the app.
- **User Profile:**
  - Upload and update avatars.
  - Change name and password.
- **Security:** Robust authentication, including password recovery via email verification.

### Dashboard

- **Overview Metrics:** Real-time inventory levels, sales trends, low-stock alerts.
- **Quick Actions:** Frequently used features and notifications summary.

### Inventory Management

- **Inventory Overview:** Searchable list of all products with stock levels and indicators.
- **CRUD Operations:** Add, edit, delete products as needed.
- **Alerts:** Automated low-stock and expiry date notifications.

### Demand Forecasting (AI-Driven Feature)

- **Predictive Analytics:** AI-based demand predictions using historical data.
- **Visualization:** Charts, graphs, and heatmaps for seasonal trends.
- **Inventory Optimization:** AI-generated reorder quantity suggestions.

### Order Management

- **Order Tracking:** View current and past orders, update statuses.
- **Order Details:** Customer and product information, status updates.
- **Processing:** Generate invoices and packing slips.

### Supplier Management

- **Supplier Database:** Contact info and categorization of suppliers.
- **Performance Metrics:** Track delivery times and reliability.
- **Communication:** Send purchase orders and messages to suppliers.

### Logistics Management

- **Shipment Tracking:** Real-time shipment tracking and route optimization using AI.
- **Delivery Scheduling:** Assign delivery windows and optimize delivery routes.

### Reports and Analytics

- **Standard Reports:** Sales, inventory turnover, and supplier performance.
- **Custom Reports:** Export reports in PDF or Excel format.
- **Data Visualization:** Dashboards with key performance indicators.

### Notifications and Alerts

- **System Notifications:** Low-stock, shipment delays, and custom user preferences.
- **User Preferences:** Email, SMS, or in-app notifications.

### Settings

- **App Settings:** Toggle dark mode, language preferences.
- **Account Settings:** Update personal information, security settings.

### Extra Design Features

- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Optimized for desktop, tablet, and mobile.
- **Accessibility:** Compliant with accessibility standards (e.g., WCAG).

---

## Tech Stack

### Frontend

- **Framework:** React with TypeScript.
- **Routing:** React Router.
- **Styling:** Tailwind CSS.
- **Remote State Management:** React Query.
- **UI State Management:** Context API.
- **Form Management:** React Hook Form.
- **Data Visualization:** Chart.js or Recharts.
- **Maps Integration:** Leaflet or Google Maps API for logistics visualization.

### Backend

- **Database & Authentication:** Supabase (PostgreSQL, real-time capabilities, built-in user management).
- **Storage:** Supabase for user avatars and files.
- **Functions:** Supabase functions for custom backend logic.

### DevOps

- **Version Control:** GitHub for source code management.
- **Deployment:** Netlify for deployment and continuous integration.

### Testing

- **Unit Testing:** (Optional) Jest and React Testing Library.
- **End-to-End Testing:** (Optional) Cypress.

---

## Pages Breakdown

### Authentication

- Login, Sign-Up, Forgot Password, Profile Settings.

### Dashboard

- Overview of key metrics and alerts.

### Inventory Management

- Inventory list, Add/Edit Product, Product details.

### Demand Forecasting

- AI predictions and trend visualizations.

### Order Management

- Orders list, Order details, Update status.

### Supplier Management

- Suppliers list, Add/Edit Supplier, Supplier performance.

### Logistics Management

- Shipment tracking, Route optimization.

### Reports and Analytics

- Reports dashboard, Generate custom reports.

### Notifications

- Centralized notification center.

### Settings

- Application and account settings.

---

## Development Plan

### Week 1: Setup and Authentication

- Initialize the GitHub repository.
- Set up Supabase for backend, authentication, and database.
- Implement authentication flows and UI.

### Week 2: Core Features Development

- Develop dashboard with placeholder data.
- Build inventory management and product pages.
- Integrate demand forecasting with AI-generated data.

### Week 3: Advanced Features

- Complete supplier and logistics management.
- Develop reports and analytics pages.
- Finalize AI-driven features.

### Week 4: Testing and Presentation Preparation

- Test the app thoroughly.
- Optimize for performance and responsiveness.
- Prepare presentation materials for the competition.

---

## Improvements and Suggestions

- **State Management:** Consider Redux Toolkit for scalability.
- **AI Services:** Explore custom AI models using TensorFlow.js or third-party APIs for advanced AI capabilities.

---

## Conclusion

This project showcases our ability to develop a robust AI-Driven Supply Chain Management System for SMEs. The prototype will demonstrate key features such as demand forecasting, inventory management, and logistics optimization, providing a comprehensive solution for Retail and E-commerce businesses.

**Good luck with the presentation!**

Tech Stack :
HeadLess UI , react icons , tailwind , framer motion, flaticon , fontawesome
React Router
