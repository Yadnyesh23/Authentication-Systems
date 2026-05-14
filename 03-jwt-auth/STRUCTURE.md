# STRUCTURE.md
## 03 - JWT Authentication System

---

# 📂 Project Structure

```
02-jwt-auth/
│
├── server.js
├── app.js
│
├── config/
│   ├── db.js
│   └── env.js
│
├── modules/
│       ├── register/
│       │   ├── register.route.js
│       │   ├── register.controller.js
│       │   ├── register.service.js
│       │   └── register.model.js
│       │
│       ├── login/
│       │   ├── login.route.js
│       │   ├── login.controller.js
│       │   ├── login.service.js
│       │   └── login.model.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── utils/
│   ├── asyncHandler.js
│   ├── ApiError.js
│   ├── ApiResponse.js
│   └── jwt.js
│
├── database/
│   └── schema.sql
│
├── .env
└── package.json
```

---

# 🧠 Folder Responsibilities

## config/
- DB connection
- environment variables setup

---

## modules/
Feature-based structure:
- register logic
- login logic
- future: logout, refresh token

---

## middlewares/
- JWT authentication check
- protected route security

---

## utils/
Reusable utilities:
- asyncHandler → error handling
- ApiError → custom errors
- ApiResponse → standard response format
- jwt.js → token generation/verification

---

## database/
- schema.sql → table creation scripts

---

# 🔐 Authentication Flow

## Register Flow
```
Route → Controller → Service → Model → DB
```

## Login Flow
```
Route → Controller → Service → Model → JWT → Response
```

## Protected Route Flow
```
Request → Middleware → Verify Token → Controller
```

---

# 🚀 Architecture Style

- Modular architecture
- Feature-based folder structure
- Clean separation of concerns
- Scalable backend design
```