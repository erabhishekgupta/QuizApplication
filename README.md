
# Quiz Application 


The Quiz Application is an interactive web-based platform designed to provide an engaging quiz experience. Built with a Spring Boot backend and a React.js frontend, the application supports multiple-choice questions with various media types, including text, images, audio, and video. Users can securely authenticate, attempt quizzes, and receive instant feedback on their answers. The application is designed to be scalable, responsive, and user-friendly, making it ideal for educational and training purposes.


## Acknowledgements

I would like to express my gratitude to the company that provided this assignment as an opportunity to apply my skills in Spring Boot and React.js. This project allowed me to work on a real-world scenario involving RESTful APIs, authentication, and frontend integration.

I appreciate the learning experience this assignment provided and the chance to improve my understanding of backend development, API design, and frontend interaction. Special thanks to the open-source community for the valuable resources and frameworks that made this implementation efficient.

## Installation

### Backend (Spring Boot)

###### Prerequisites
- Java 17+ (JDK Installed)

- Maven (For dependency management)

- MySQL Database

- Spring Tool Suite (STS) or IntelliJ IDEA (Recommended for development)

#### Steps to Set Up Backend
1. Clone the Repository:

``git clone https://github.com/your-repo/quiz-app.git``
``cd quiz-app/backend``

2. Configure Database:

Open ``application.properties`` and update the MySQL database credentials:

``spring.datasource.url=jdbc:mysql://localhost:3306/quizdb``
``spring.datasource.username=root``
``spring.datasource.password=yourpassword``
``spring.jpa.hibernate.ddl-auto=update``

3. Build and Run the Application:

``mvn clean install``
``mvn spring-boot:run``


4. Backend will start on:

``http://localhost:8080``
###  Frontend (React.js)
###### Prerequisites
- Node.js (16+) installed

- npm or yarn installed

- VS Code or any code editor

#### Steps to Set Up Frontend
1. Navigate to frontend directory:

``cd quiz-app/frontend``

2. Install Dependencies:

``npm install``

3. Configure API URL:

Open ``.env`` file in the frontend directory and set:

``REACT_APP_API_URL=http://localhost:8080/api``
4. Start the React App:

``npm run dev``

5. Frontend will be available at:

``http://localhost:5173``
### Project badges

![Java](https://img.shields.io/badge/Java-17+-blue?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0+-brightgreen?style=for-the-badge&logo=spring)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=for-the-badge&logo=mysql)
![REST API](https://img.shields.io/badge/REST%20API-Backend-red?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)




### RoadMap QuizApplication

This roadmap outlines the planned enhancements and features for the Quiz Application to improve user experience, security, and scalability.

#### Phase 1: Core Functionality (MVP)
✔️ Build Spring Boot backend with REST API\
✔️ Develop React frontend with basic UI\
✔️ Implement CRUD operations for quiz questions\
✔️ Store quiz data in MySQL database\
✔️ Basic authentication and authorization using SpringBoot with Manually authentication & authorization

#### Phase 2: Advanced Features
🔹 Multimedia Support: Enable images, audio, and video questions\
🔹 User Authentication: Can Implement JWT-based authentication

#### Future Plans or Future Enhancements
🔹 Multilingual Support for global accessibility\
🔹 AI-powered Quiz Recommendations based on user performance\
🔹 Timer Feature: Can Add countdown timer for each quiz\
🔹 Score Calculation: Display user scores after quiz completion\
🔹 Leaderboard:Can Store and display top scorers\



## Tech Stack

The Quiz Application is built using modern technologies for both backend and frontend to ensure scalability, security, and a smooth user experience.

#### Frontend (React)
- React.js – Frontend UI framework

- Axios – API communication

- React Router – Navigation & routing

- Tailwind CSS / Bootstrap – Styling & responsiveness

#### Backend (Spring Boot)
- Spring Boot – RESTful API development

- Spring Security – Authentication & authorization

- Spring Data JPA (Hibernate) – ORM for database management

- MySQL – Relational database for storing quiz data

#### Database
- MySQL – Stores quiz questions, answers, and user data

#### API & Communication
RESTful APIs – To fetch questions and submit answers

### Api Endpoints

This document provides an overview of the API endpoints available in the Quiz Application backend, built using Spring Boot.

##### Base URL

The API is accessible at:\
``http://localhost:8080/api``

##### User Authentication API

1. Register a New User
``POST /addUser``\
Description:\
Registers a new user in the system.
Request Body:\
``{
  "username": "exampleUser",
  "password": "examplePass"
}``
Response:\
``{
  "id": 1,
  "username": "exampleUser",
  "password": "hashed_password"
}``

2. User Login
Endpoint:\
``POST /loginUser``

Description:\
Authenticates a user.
Request Body:\
``{
  "username": "exampleUser",
  "password": "examplePass"
}``

Response:\
``true``\
(Returns true if login is successful, otherwise false.)

#### Quiz API

3. Get Random Quiz Questions
Endpoint:\
``GET /api/quiz/questions``\
Description:
Fetches a set of randomly shuffled quiz questions.
Response:\
``[
  {
    "id": 1,
    "question_text": "What is Java?",
    "optiona": "A programming language",
    "optionb": "A coffee brand",
    "optionc": "A type of car",
    "optiond": "An island",
    "correct_answer": "A programming language",
    "media_type": "none",
    "media_url": ""
  },
  ...
]``

#### Frontend Route Mapping

The frontend (React) routes are mapped as follows:
- ``/`` -> home page 
- ``/quiz`` -> quiz page 
- ``/login`` -> login page 
- ``/register`` -> register page

Notes

- The API is CORS-enabled to allow requests from http://localhost:5173.

- The database used is MySQL, and authentication is managed using a basic login system.

- Future improvements include JWT-based authentication, score tracking, and leaderboard functionality.

## ScreenShots for better understanding

- This is the homepage 
![Image](https://github.com/user-attachments/assets/00c384cf-3686-49d4-a6e7-d5bcc1d4ab43)
- When we click on start quiz it popup's for login
![Image](https://github.com/user-attachments/assets/2d254c80-5256-4c8c-bdda-3202b3034c93)
- If not have account then register
![Image](https://github.com/user-attachments/assets/f0a1933a-e421-41c1-bb42-f6a1324375a8)
- This is the login page 
![Image](https://github.com/user-attachments/assets/c3bf71fc-f6e5-4722-a66b-c2567deaee1c)
- This is simple multiple choice questions 
![Image](https://github.com/user-attachments/assets/b6183970-a6eb-49ec-9c8a-bc0debf15668)
- This is image based question
![Image](https://github.com/user-attachments/assets/5924dccc-7ca5-4906-8e40-9cc0aa47f24e)
- This is audio based question
![Image](https://github.com/user-attachments/assets/2d6c28f9-3045-4fe4-9951-b74a19ff5c7c)
- This is video based question
![Image](https://github.com/user-attachments/assets/29387090-39d4-4026-a42a-e4b19c94e516)
- Quiz completed and you got yor score 
![Image](https://github.com/user-attachments/assets/7fdad3ed-1907-47e8-9151-5d37390838d2)



