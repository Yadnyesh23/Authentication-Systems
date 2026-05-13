# Auth System

A deep-dive authentication and authorization engineering repository built with Node.js, Express.js, React, and MySQL.

The goal is not just to implement login systems — but to understand how authentication works internally, how secure systems are designed, and how production applications handle identity and access management.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Backend | Node.js, Express.js, MySQL, Prisma / Sequelize, Redis, Passport.js |
| Frontend | React, React Router, Axios |
| Auth & Security | bcrypt, jsonwebtoken, express-session, passport-google-oauth20, speakeasy, helmet, express-rate-limit |

---

## Repository Structure

```
auth-engineering/
│
├── 00-auth-fundamentals/
│   ├── http-basics
│   ├── cookies
│   ├── sessions
│   ├── cors
│   ├── same-origin-policy
│   ├── csrf
│   ├── xss
│   └── password-hashing
│
├── 01-password-auth/
│   ├── register
│   ├── login
│   ├── bcrypt-hashing
│   ├── password-validation
│   └── forgot-password-basic
│
├── 02-session-auth/
│   ├── express-session
│   ├── cookie-session
│   ├── redis-session-store
│   ├── protected-routes
│   ├── logout
│   ├── session-fixation
│   └── session-management
│
├── 03-jwt-auth/
│   ├── access-token
│   ├── jwt-middleware
│   ├── protected-api
│   ├── jwt-claims
│   ├── hs256
│   └── rs256
│
├── 04-refresh-token-auth/
│   ├── refresh-token
│   ├── token-rotation
│   ├── token-revocation
│   ├── silent-refresh
│   ├── logout-all-devices
│   └── reuse-detection
│
├── 05-cookie-jwt-auth/
│   ├── httponly-cookie
│   ├── secure-cookie
│   ├── samesite-cookie
│   ├── cookie-based-refresh-token
│   ├── access-token-in-memory
│   ├── csrf-protection
│   └── cors-with-credentials
│
├── 06-rbac-auth/
│   ├── role-based-access-control
│   ├── permission-system
│   ├── admin-routes
│   ├── ownership-checks
│   ├── resource-authorization
│   └── middleware-based-authorization
│
├── 07-oauth-auth/
│   ├── google-oauth
│   ├── github-oauth
│   ├── authorization-code-flow
│   ├── scopes
│   ├── redirect-uri
│   ├── passportjs
│   └── account-linking
│
├── 08-openid-connect/
│   ├── oidc-flow
│   ├── id-token
│   ├── userinfo-endpoint
│   ├── identity-provider
│   ├── discovery-document
│   └── oauth-vs-oidc
│
├── 09-mfa-auth/
│   ├── two-factor-authentication
│   ├── totp
│   ├── google-authenticator
│   ├── backup-codes
│   ├── qr-code-setup
│   └── recovery-flow
│
├── 10-passwordless-auth/
│   ├── magic-links
│   ├── email-otp
│   ├── phone-otp
│   ├── one-time-login-links
│   └── otp-expiration
│
├── 11-passkey-webauthn-auth/
│   ├── webauthn
│   ├── passkeys
│   ├── biometric-login
│   ├── public-private-key-auth
│   ├── fido2
│   └── device-based-authentication
│
├── 12-api-key-auth/
│   ├── api-keys
│   ├── service-authentication
│   ├── key-rotation
│   ├── request-signing
│   ├── hmac-authentication
│   └── scoped-api-access
│
├── 13-sso-auth/
│   ├── single-sign-on
│   ├── centralized-authentication
│   ├── identity-broker
│   ├── auth-provider-integration
│   └── multi-application-login
│
├── 14-saml-auth/
│   ├── saml-basics
│   ├── identity-provider
│   ├── service-provider
│   ├── saml-assertions
│   ├── enterprise-login
│   └── corporate-authentication
│
├── 15-production-auth-system/
│   ├── email-verification
│   ├── forgot-password
│   ├── reset-password
│   ├── device-tracking
│   ├── active-sessions
│   ├── audit-logs
│   ├── rate-limiting
│   ├── helmet-security
│   ├── brute-force-protection
│   ├── refresh-token-reuse-detection
│   ├── account-locking
│   ├── suspicious-login-detection
│   ├── secure-auth-architecture
│   └── production-ready-auth-flow
│
├── 16-microservice-auth/
│   ├── gateway-authentication
│   ├── service-to-service-auth
│   ├── distributed-jwt
│   ├── centralized-auth-service
│   └── auth-in-microservices
│
├── diagrams/
│   ├── session-auth-flow
│   ├── jwt-auth-flow
│   ├── refresh-token-flow
│   ├── oauth-flow
│   ├── oidc-flow
│   ├── mfa-flow
│   ├── passwordless-flow
│   └── production-auth-architecture
│
├── notes/
│   ├── authentication-vs-authorization
│   ├── stateful-vs-stateless-auth
│   ├── oauth-vs-oidc
│   ├── cookies-vs-localstorage
│   ├── csrf-notes
│   ├── xss-notes
│   ├── jwt-security
│   ├── session-security
│   ├── refresh-token-security
│   └── authentication-best-practices
│
└── README.md
```

---

## Modules

Each module is self-contained with an implementation, notes, architecture decisions, security considerations, edge cases, and diagrams.

### Tier 1 — Foundations

| Module | Topics |
|---|---|
| `00-auth-fundamentals` | HTTP basics, cookies, sessions, CORS, same-origin policy, CSRF, XSS, password hashing |
| `01-password-auth` | Register, login, bcrypt hashing, password validation, forgot-password flow |
| `02-session-auth` | express-session, Redis session store, protected routes, logout, session fixation prevention |

### Tier 2 — Token-Based Auth

| Module | Topics |
|---|---|
| `03-jwt-auth` | Access tokens, JWT middleware, protected APIs, JWT claims, HS256, RS256 |
| `04-refresh-token-auth` | Token rotation, token revocation, silent refresh, logout from all devices, reuse detection |
| `05-cookie-jwt-auth` | httpOnly / secure / sameSite cookies, CSRF protection, access token in memory, CORS with credentials |
| `06-rbac-auth` | Roles and permissions, admin routes, ownership checks, resource authorization, middleware-based authorization |
| `12-api-key-auth` | API keys, HMAC authentication, service authentication, key rotation, scoped API access |

### Tier 3 — Identity & Federation

| Module | Topics |
|---|---|
| `07-oauth-auth` | Google OAuth, GitHub OAuth, authorization code flow, scopes, redirect URI, Passport.js, account linking |
| `08-openid-connect` | OIDC flow, id_token, userinfo endpoint, discovery document, OAuth vs OIDC |
| `09-mfa-auth` | TOTP, Google Authenticator, backup codes, QR code setup, recovery flow |
| `10-passwordless-auth` | Magic links, email OTP, phone OTP, one-time login links, OTP expiration |
| `13-sso-auth` | Single sign-on, centralized authentication, identity broker, multi-application login |
| `14-saml-auth` | SAML basics, identity provider, service provider, SAML assertions, enterprise login |

### Tier 4 — Advanced & Production

| Module | Topics |
|---|---|
| `11-passkey-webauthn-auth` | WebAuthn, passkeys, FIDO2, biometric login, public/private key auth, device-based authentication |
| `15-production-auth-system` | Email verification, forgot/reset password, device tracking, active sessions, audit logs, rate limiting, brute-force protection, account locking, suspicious login detection |
| `16-microservice-auth` | Gateway authentication, service-to-service auth, distributed JWT, centralized auth service |

---

## Security Coverage

### Web Security
- CSRF — cross-site request forgery attacks and token-based protection
- XSS — injection risks, output encoding, Content Security Policy
- Same-origin policy — browser enforcement and CORS configuration
- Cookie security — `httpOnly`, `secure`, `sameSite` attributes

### Authentication Security
- Password hashing with bcrypt (salting, cost factor)
- Token expiration and short-lived access tokens
- Refresh token rotation and reuse detection
- Session hijacking and fixation prevention
- Replay attack prevention

### Production Hardening
- Rate limiting and brute-force protection (`express-rate-limit`)
- Security headers (`helmet`)
- Account locking after failed attempts
- Suspicious login detection
- Device and session tracking
- Audit logging

---

## Learning Objectives

By working through this repository, you will understand:

- Authentication vs Authorization
- Stateful vs Stateless authentication
- Session architecture and lifecycle
- JWT internals — claims, signing, verification
- Token lifecycles — issuance, rotation, revocation
- OAuth 2.0 and OIDC flows in depth
- Enterprise authentication patterns (SSO, SAML)
- Secure auth design and common attack vectors
- Production-grade auth architecture

---

## Notes

The `notes/` folder covers the conceptual comparisons that underpin every module:

| Note | What it answers |
|---|---|
| `authentication-vs-authorization` | Who you are vs what you can do |
| `stateful-vs-stateless-auth` | When to use sessions vs JWTs |
| `oauth-vs-oidc` | Authorization vs identity |
| `cookies-vs-localstorage` | Where to store tokens and why it matters |
| `csrf-notes` | How CSRF works and how each auth method handles it |
| `xss-notes` | How XSS can steal credentials and how to prevent it |
| `jwt-security` | Algorithm choices, expiry, and common JWT mistakes |
| `session-security` | Fixation, hijacking, and rotation |
| `refresh-token-security` | Rotation strategies and reuse detection |
| `authentication-best-practices` | Production-ready patterns and checklist |

---

## Roadmap

- [ ] Device fingerprinting
- [ ] Risk-based authentication
- [ ] Adaptive MFA
- [ ] Additional OAuth provider integrations
- [ ] Enterprise IAM patterns
- [ ] Zero-trust authentication
- [ ] Distributed auth services