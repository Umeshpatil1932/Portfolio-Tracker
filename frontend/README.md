# Portfolio Tracker Frontend

## Overview
The Portfolio Tracker frontend is a React application that allows users to manage their stock portfolios. Users can add, view, edit, and delete stock holdings, track portfolio performance, and view live stock prices.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive and modern web applications.
- **Axios**: A promise-based HTTP client for making API requests.

## Features
- **CRUD Operations**: Users can add, edit, delete, and view stocks in their portfolio.
- **Real-Time Stock Prices**: The application fetches live stock data from a third-party API.
- **Portfolio Dashboard**: Displays key metrics such as total portfolio value and top-performing stocks.
- **Responsive Design**: The application is designed to work seamlessly across various devices.

## Setup and Installation

### Prerequisites
- Node.js and npm must be installed on your machine.

### Steps to Run the Project Locally
1. Clone the repository:
   ```
   git clone https://github.com/Umeshpatil1932/Portfolio-Tracker
   cd Portfolio-Tracker
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install frontend dependencies:
   ```
   npm install
   ```
4. Start the frontend server:
   ```
   npm start
   ```
   The frontend will be running on [http://localhost:3000](http://localhost:3000).

## API Integration
The frontend communicates with the backend through RESTful APIs to manage stock data. Ensure the backend is running on [http://localhost:8080](http://localhost:8080) for the frontend to function correctly.

## Future Enhancements
- Implement user authentication and profile management.
- Allow users to add more stocks dynamically based on preferences.
- Provide advanced stock analytics and reporting features.

## License
This project is licensed under the MIT License - see the LICENSE file for details.