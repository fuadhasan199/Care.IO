# Care.io 🏥

**Care.io** is a modern healthcare service and appointment booking platform built with **Next.js**. It helps users explore healthcare services, book required care, and manage their activities through a simple and user-friendly interface.

The platform also includes an **admin dashboard** for managing users, services, and platform activities.

## 🌐 Live Website

[Care.io](https://care-io-roan.vercel.app)

---

## ✨ Key Features

- 🏥 Browse different healthcare services
- 📋 View detailed information about individual services
- 📅 Book healthcare services
- 🔐 User authentication with **NextAuth.js**
- 🔑 Email/password authentication
- 🌐 Google authentication
- 👤 User profile and session management
- 🛡️ Protected routes with middleware
- 👨‍💼 Admin dashboard
- 👥 Manage users from admin dashboard
- ⭐ Make users admin
- 🚫 Block/unblock users
- 🧰 Manage services (add / update / delete)
- 💬 User & guest messaging system with admin reply
- 📊 Admin-focused management interface
- 📧 Email functionality using **Nodemailer**
- 🗄️ MongoDB database integration
- 📱 Responsive user interface
- 🌙 Clean and modern healthcare-focused UI

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React.js
- JSX
- JavaScript
- Tailwind CSS
- DaisyUI
- Lucide React
- React Icons
- SweetAlert2

### Backend

- Next.js API Routes
- Next.js Server Actions
- Node.js
- MongoDB
- MongoDB Atlas

### Authentication & Security

- NextAuth.js
- Google OAuth
- Credentials Authentication
- JWT-based sessions
- Next.js Middleware
- bcrypt

### Other Tools

- Nodemailer
- Vercel
- Git & GitHub

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/fuadhasan199/Care.IO.git
```

Install dependencies:

```bash
npm install
```

## 🔑 Authentication

Care.io uses **NextAuth.js** for authentication and session management.

Supported authentication methods include:

- Email & Password
- Google Sign-In

Role-based access is also implemented so that administrative functionality is available only to authorized users.

---

## 👨‍💼 Admin Dashboard

The admin dashboard provides management functionality for the platform.

Admins can:

- View and manage users
- Make users administrators
- Block or unblock users
- Add, update, and delete services
- View and reply to user/guest messages
- Access protected administrative routes

Protected routes are handled using **Next.js Middleware** and authentication tokens.

---

## 📧 Email System

The project uses **Nodemailer** for sending emails from the application, including admin replies to user messages.

---

## 📱 Responsive Design

Care.io is designed to provide a clean experience across different screen sizes, including:

- Desktop
- Tablet
- Mobile

The UI is built using **Tailwind CSS** and **DaisyUI**.

---

## 📦 Main Dependencies

Some of the major packages used in this project:

```bash
next
react
next-auth
mongodb
bcrypt
nodemailer
tailwindcss
daisyui
lucide-react
react-icons
sweetalert2
```

---

## 🚀 Deployment

The application is deployed using **Vercel**.

Live project: [https://care-io-roan.vercel.app](https://care-io-roan.vercel.app)

---

## 🎯 Project Goal

The main goal of Care.io is to build a practical healthcare platform where users can easily discover healthcare services and manage their bookings, while administrators can efficiently manage users and platform operations.

This project was also developed as a practical learning project to gain hands-on experience with **Next.js, authentication, MongoDB, server-side functionality, API development, and role-based access control**.

---

## 👨‍💻 Developer

**Khandokar Fuad Hasan**
Frontend & MERN Stack Developer

Portfolio: [https://fuad-portfolio-ten.vercel.app](https://fuad-portfolio-ten.vercel.app)

Built with ❤️ using Next.js.