# TODO.md

# 01 - Password Authentication

## Project Initialization
- [x] Initialize backend project
- [ ] Initialize frontend project
- [x] Setup Express server
- [ ] Setup React application
- [ ] Setup environment variables
- [x] Setup MySQL database connection
- [x] Setup folder structure
- [x] Setup git repository
- [x] Setup .gitignore

---

# Database Setup
- [x] Create database
- [x] Create users table
- [x] Add unique constraint on email
- [x] Add timestamps to users table
- [x] Create schema.sql
- [ ] Create seed.sql
- [ ] Create queries.sql

---

# Backend Setup
- [x] Configure Express app
- [x] Setup middleware
- [x] Setup JSON parsing
- [x] Setup error handling middleware
- [x] Setup validation middleware
- [x] Setup database connection pool

---

# Healthcheck
- [x] Create healthcheck route
- [x] Verify backend is running
- [x] Verify database connection

---

# Register Module

## Register Route
- [ ] Create register endpoint

## Register Validation
- [ ] Validate required fields
- [ ] Validate email format
- [ ] Validate password length
- [ ] Validate password strength

## Register Logic
- [ ] Check if email already exists
- [ ] Hash password using bcrypt
- [ ] Store user in database
- [ ] Return proper success response

## Register Error Handling
- [ ] Handle duplicate email
- [ ] Handle validation errors
- [ ] Handle database errors

---

# Login Module

## Login Route
- [ ] Create login endpoint

## Login Validation
- [ ] Validate email
- [ ] Validate password

## Login Logic
- [ ] Find user by email
- [ ] Compare password with hashed password
- [ ] Return authentication success response
- [ ] Return invalid credentials response

## Login Error Handling
- [ ] Handle invalid email
- [ ] Handle invalid password
- [ ] Handle database errors

---

# Password Hashing
- [ ] Learn bcrypt
- [ ] Understand salting
- [ ] Understand hashing rounds
- [ ] Learn difference between hashing and encryption

---

# API Testing
- [ ] Test register API
- [ ] Test login API
- [ ] Test duplicate registration
- [ ] Test invalid login
- [ ] Test validation errors

---

# Frontend Setup
- [ ] Create Register page
- [ ] Create Login page
- [ ] Create Register form
- [ ] Create Login form
- [ ] Setup API calls
- [ ] Handle API responses
- [ ] Handle loading states
- [ ] Handle error messages

---

# Frontend + Backend Integration
- [ ] Connect register form to backend
- [ ] Connect login form to backend
- [ ] Display validation errors
- [ ] Display success messages

---

# Notes & Documentation
- [ ] Document registration flow
- [ ] Document login flow
- [ ] Document password hashing
- [ ] Document MySQL connection flow
- [ ] Document request-response lifecycle

---

# Security Concepts
- [ ] Learn SQL injection prevention
- [ ] Learn parameterized queries
- [ ] Learn why passwords should never be stored in plain text
- [ ] Learn basic authentication security principles

---

# Future Improvements
- [ ] Add session authentication
- [ ] Add JWT authentication
- [ ] Add refresh tokens
- [ ] Add cookie authentication
- [ ] Add OAuth authentication
- [ ] Add RBAC authorization