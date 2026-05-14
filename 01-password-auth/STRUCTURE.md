01-password-auth/
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   │
│   │   ├── modules/
│   │   │   │
│   │   │   ├── register/
│   │   │   │   ├── register.route.js
│   │   │   │   ├── register.controller.js
│   │   │   │   ├── register.service.js
│   │   │   │   ├── register.model.js
│   │   │   │   ├── register.validator.js
│   │   │   │   └── register.schema.js
│   │   │   │
│   │   │   └── login/
│   │   │       ├── login.route.js
│   │   │       ├── login.controller.js
│   │   │       ├── login.service.js
│   │   │       ├── login.model.js
│   │   │       ├── login.validator.js
│   │   │       └── login.schema.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │   │
│   │   ├── utils/
│   │   │   ├── hashPassword.js
│   │   │   ├── comparePassword.js
│   │   │   ├── apiResponse.js
│   │   │   └── constants.js
│   │   │
│   │   ├── database/
│   │   │   ├── schema.sql
│   │   │   ├── seed.sql
│   │   │   └── queries.sql
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── auth.api.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── RegisterForm.jsx
│   │   │   └── LoginForm.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── README.md
│
├── notes/
│   ├── password-hashing.md
│   ├── mysql-with-nodejs.md
│   ├── authentication-flow.md
│   └── validation.md
│
├── diagrams/
│   ├── register-flow.png
│   └── login-flow.png
│
├── FLOW.md
├── TODO.md
└── README.md