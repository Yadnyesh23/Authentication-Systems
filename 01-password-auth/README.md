#  Password Authentication System (Node.js + MySQL)

A backend authentication system built using **Node.js, Express.js, and MySQL** implementing **user registration and login with password hashing (bcrypt)**.

This project is designed to understand **core authentication concepts** before moving to JWT, sessions, and OAuth.

---

#  Features

- User Registration
- User Login
- Password Hashing using bcrypt
- Password Verification
- MySQL Database Integration
- Modular Feature-Based Architecture
- Centralized Error Handling (ApiError)
- Standard API Response Format (ApiResponse)
- Async Error Handling (asyncHandler)

---

#  Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- bcrypt
- dotenv

---

#  Project Structure

```
backend/
│
├── config/
│   ├── db.js
│   
│
├── modules/
│   ├── healthcheck/
│   ├── register/
│   └── login/
│
├── utils/
│   ├── asyncHandler.js
│   ├── ApiError.js
│   └── ApiResponse.js
│
└── server.js
```

---

#  Authentication Flow

##  Register Flow

```
Client → /auth/register
        ↓
Route
        ↓
Controller
        ↓
Service
        ↓
Model
        ↓
MySQL (User Stored)
```

### Steps:
1. Validate input (name, email, password)
2. Check if user already exists
3. Hash password using bcrypt
4. Store user in database
5. Return success response

---

##  Login Flow

```
Client → /auth/login
        ↓
Route
        ↓
Controller
        ↓
Service
        ↓
Model
        ↓
Password Verification
        ↓
Response
```

### Steps:
1. Validate input (email, password)
2. Fetch user from database
3. Compare password using bcrypt
4. Return success or error response

---

#  Database Schema

```sql
CREATE DATABASE password_auth;

USE password_auth;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#  API Endpoints

## Health Check
```
GET /api/v1/healthcheck
```

## Register User
```
POST /api/v1/auth/register
```

### Request Body:
```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

---

## Login User
```
POST /api/v1/auth/login
```

### Request Body:
```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

#  Installation & Setup

```bash
# Clone repo
git clone <repo-url>

# Install dependencies
npm install

# Create .env file
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=password_auth

# Run server
npm start
```

---

#  Security Concepts Implemented

- Password hashing (bcrypt)
- No plain text password storage
- Parameterized SQL queries (prevents SQL injection)
- Centralized error handling

---

#  Learning Outcomes

By building this project, you understand:

- How Node.js connects to MySQL
- How authentication works internally
- Password hashing & verification
- Clean backend architecture (MVC + service layer)
- API design principles

---

#  Future Improvements

- JWT Authentication (Access + Refresh tokens)
- Cookie-based authentication
- Session management
- OAuth login (Google/GitHub)
- Role-Based Access Control (RBAC)

---

#  Author

Built as part of learning **backend authentication engineering with Node.js**

---