# Portfolio Tracker

A simple web application for tracking stock portfolios. This application allows users to manage their stock holdings, view portfolio performance, and track live stock prices.

## Project Overview
This project consists of a frontend and backend that allows users to:
- Add, view, edit, and delete stock holdings.
- Track total portfolio value based on real-time stock prices.
- View a dashboard displaying key portfolio metrics (e.g., total value, top-performing stock, portfolio distribution).

## Technologies Used
### Frontend:
- React (preferred framework)
- Material-UI for UI components
- Axios for API requests

### Backend:
- Java with Spring Boot for backend development
- JPA and Hibernate for database interaction
- RESTful APIs for handling stock-related operations

### Database:
- MySQL for storing stock details (stock name, ticker, quantity, buy price)

### Real-Time Data:
- Integration with free stock price APIs like Alpha Vantage to dynamically fetch and calculate portfolio value.

### Deployment:
- Backend deployed on Heroku (or AWS/Render)
- Frontend deployed on Vercel or Netlify

---

## Features
- CRUD Operations: Add, Edit, Delete, and View stocks in the portfolio.
- Real-Time Stock Prices: Fetches live stock data from a free stock API.
- Portfolio Dashboard: Displays key metrics, including the total portfolio value and the top-performing stock.
- Responsive Design: Works seamlessly across devices with a responsive UI.

---

## Setup and Installation

### Prerequisites
Make sure you have the following tools installed:
- Node.js and npm for frontend dependencies
- Java and Spring Boot for the backend
- MySQL for the database

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Umeshpatil1932/Portfolio-Tracker
   cd Portfolio-Tracker
   ```

2. Frontend Setup:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```
   - This will start the frontend on [http://localhost:3000](http://localhost:3000).

3. Backend Setup:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Build the Spring Boot application (you can use Maven or Gradle):
     ```bash
     mvn spring-boot:run
     ```
   - The backend API will be running on [http://localhost:8080](http://localhost:8080).

4. Set up the Database:
   - Create a MySQL database and update your `application.properties` file with the appropriate database connection details:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker
     spring.datasource.username=root
     spring.datasource.password=root
     ```

---

## API Endpoints
The backend exposes the following RESTful API endpoints:
- `GET /api/stocks`: Fetch all stocks in the portfolio.
- `POST /api/stocks`: Add a new stock to the portfolio.
- `PUT /api/stocks/{id}`: Update stock details.
- `DELETE /api/stocks/{id}`: Delete a stock from the portfolio.
- `GET /api/portfolio-value`: Calculate the total portfolio value using real-time stock prices.

---

## Assumptions and Limitations
- The application assumes that the quantity of each stock purchased is 1 for simplicity.
- The API integrates with real-time stock prices using a free third-party API, which may have usage limitations.
- Only 5 randomly selected stocks are assigned to each user’s portfolio at the start.

---

## Links
- **Repository:** [Portfolio Tracker GitHub](https://github.com/Umeshpatil1932/Portfolio-Tracker)
- **Deployed Frontend:** [Frontend Directory](https://github.com/Umeshpatil1932/Portfolio-Tracker/tree/main/frontend)
- **Deployed Backend:** [Backend Directory](https://github.com/Umeshpatil1932/Portfolio-Tracker/tree/main/backend)

---

## Future Enhancements
- User authentication and profile management
- Ability to add more stocks dynamically based on user preferences
- Advanced stock analytics and reporting

---

## License
This project is licensed under the MIT License - see the LICENSE file for details.

