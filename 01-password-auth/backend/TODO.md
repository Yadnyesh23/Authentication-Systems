# TODO.md

# 01 - Password Authentication

## Project Setup
- [x] Initialize backend project
- [x] Setup Express server
- [x] Setup environment variables
- [x] Setup MySQL connection
- [x] Create folder structure
- [x] Setup basic middleware
- [x] Setup error handling middleware

---

# Database
- [x] Design users table
- [x] Add unique constraint on email
- [x] Add timestamps
- [x] Create database migration/schema

---

# Healthcheck
- [ ] Create healthcheck route
- [ ] Verify server and database status

---

# User Registration
- [ ] Create register route
- [ ] Validate user input
- [ ] Check if user already exists
- [ ] Hash password using bcrypt
- [ ] Store user in database
- [ ] Return proper success/error responses

---

# User Login
- [ ] Create login route
- [ ] Validate login input
- [ ] Find user by email
- [ ] Compare password with stored hash
- [ ] Return authentication success/failure response

---

# Validation
- [ ] Validate email format
- [ ] Validate password strength
- [ ] Handle empty fields
- [ ] Handle invalid input

---

# Error Handling
- [ ] Handle duplicate email registration
- [ ] Handle invalid credentials
- [ ] Handle database errors
- [ ] Handle unknown server errors

---

# Security Concepts
- [ ] Learn password hashing
- [ ] Understand salting
- [ ] Understand bcrypt cost factor
- [ ] Learn difference between hashing and encryption

---

# API Testing
- [ ] Test register API
- [ ] Test login API
- [ ] Test invalid credentials
- [ ] Test duplicate registration
- [ ] Test validation errors

---

# Documentation
- [ ] Write authentication flow
- [ ] Document registration flow
- [ ] Document login flow
- [ ] Document password hashing concepts
- [ ] Add API endpoint documentation

---

# Future Improvements
- [ ] Add JWT authentication
- [ ] Add session authentication
- [ ] Add refresh tokens
- [ ] Add OAuth authentication