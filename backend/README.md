# Portfolio Tracker Backend

## Overview
The Portfolio Tracker backend is built using Java and Spring Boot. It provides RESTful APIs for managing stock portfolios, allowing users to perform CRUD operations on stock holdings and calculate the total portfolio value based on real-time stock prices.

## Technologies Used
- **Java**: Programming language for backend development.
- **Spring Boot**: Framework for building the backend application.
- **JPA & Hibernate**: For database interaction.
- **MySQL**: Database for storing stock details.
- **Maven**: Build tool for managing dependencies and building the project.

## Project Structure
```
backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── portfolio
│   │   │               ├── PortfolioTrackerApplication.java
│   │   │               ├── controller
│   │   │               │   └── StockController.java
│   │   │               ├── model
│   │   │               │   └── Stock.java
│   │   │               ├── repository
│   │   │               │   └── StockRepository.java
│   │   │               └── service
│   │   │                   └── StockService.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── data.sql
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── portfolio
│                       └── PortfolioTrackerApplicationTests.java
├── pom.xml
```

## Setup and Installation

### Prerequisites
- Java Development Kit (JDK)
- Maven
- MySQL

### Steps to Run the Project Locally
1. Clone the repository:
   ```
   git clone https://github.com/Umeshpatil1932/Portfolio-Tracker
   cd Portfolio-Tracker/backend
   ```

2. Build the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

3. The backend API will be running on `http://localhost:8080`.

4. Set up the Database:
   - Create a MySQL database named `portfolio_tracker`.
   - Update `src/main/resources/application.properties` with your database connection details.

## API Endpoints
- `GET /api/stocks`: Fetch all stocks in the portfolio.
- `POST /api/stocks`: Add a new stock to the portfolio.
- `PUT /api/stocks/{id}`: Update stock details.
- `DELETE /api/stocks/{id}`: Delete a stock from the portfolio.
- `GET /api/portfolio-value`: Calculate the total portfolio value using real-time stock prices.

## Future Enhancements
- User authentication and profile management.
- Ability to add more stocks dynamically based on user preferences.
- Advanced stock analytics and reporting.

## License
This project is licensed under the MIT License - see the LICENSE file for details.