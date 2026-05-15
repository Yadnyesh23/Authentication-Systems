# TODO.md
## 03 - JWT Authentication System (Node.js + Express + MySQL)

---

#  Project Setup
- [x] Initialize Node.js project
- [x] Setup Express server
- [x] Setup MySQL connection (mysql2)
- [x] Setup environment variables (.env)
- [x] Install dependencies (express, mysql2, bcrypt, jsonwebtoken, dotenv)

---

# Database
- [x] Create database `jwt_auth`
- [x] Create `users` table
- [x] Ensure password is stored as hashed value
- [x] Add timestamps (created_at, updated_at)

---

# 🧑‍💻 Authentication - Register
- [ ] Create register route
- [ ] Validate user input
- [ ] Check if user already exists
- [ ] Hash password using bcrypt
- [ ] Store user in MySQL
- [ ] Return success response

---

# 🔐 Authentication - Login
- [ ] Create login route
- [ ] Validate user input
- [ ] Fetch user from database
- [ ] Compare password using bcrypt
- [ ] Generate JWT token
- [ ] Return token + user data

---

# 🔑 JWT Implementation
- [ ] Setup JWT utility (sign + verify)
- [ ] Add JWT_SECRET in .env
- [ ] Generate access token on login
- [ ] Set token expiry time

---

# 🛡️ Middleware
- [ ] Create auth middleware
- [ ] Extract token from Authorization header
- [ ] Verify JWT token
- [ ] Attach user to request
- [ ] Handle unauthorized access

---

# 🔒 Protected Routes
- [ ] Create /profile route
- [ ] Protect route using middleware
- [ ] Return logged-in user data

---

# 🧪 Testing
- [ ] Test register API
- [ ] Test login API (token generation)
- [ ] Test invalid login
- [ ] Test expired token
- [ ] Test protected route access

---

# 📌 Future Improvements
- [ ] Refresh token system
- [ ] Cookie-based authentication
- [ ] Role-based access control (RBAC)
- [ ] Logout functionality (token invalidation)