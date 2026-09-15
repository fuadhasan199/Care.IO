# Care.io 🏥

**Care.io** is a modern healthcare service and appointment booking platform built with **Next.js**. It allows users to explore healthcare services, book required care, make secure payments, and manage their activities through a simple and user-friendly interface.

The platform also includes a full **admin dashboard** for managing users, services, bookings, and customer messages, along with automated email notifications.

---

## 🌐 Live Website

🚀 **[Visit Care.io](https://care-io-roan.vercel.app)**

---

## ✨ Key Features

### 👤 User Side

- 🏥 Browse healthcare services with detailed descriptions
- 📋 View individual service details including features, coverage, and pricing
- 📅 Book healthcare services
- 💳 Make secure payments through Stripe
- 🔐 Sign up / Sign in with Email & Password or Google
- 👤 Manage profile information and profile picture
- 💬 Send messages to support through the contact page
- 📱 Fully responsive across desktop, tablet, and mobile devices

### 👨‍💼 Admin Side

- 📊 Dedicated admin dashboard
- 👥 View, promote, and block/unblock users
- 🧰 Add, update, and delete healthcare services
- 🖼️ Upload service images
- 📨 View user and guest messages
- 📧 Reply to user messages directly via email
- 🛡️ Role-based access control for admin-only routes

### ⚙️ Platform

- 💳 Stripe payment integration
- 📧 Automated email notifications using Nodemailer
- 🗄️ MongoDB database
- 🔐 Secure authentication and authorization
- 🛡️ Protected routes using Next.js Middleware
- 📱 Responsive and modern UI

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | Next.js, React, JavaScript, Tailwind CSS, DaisyUI |
| **UI & Icons** | Lucide React, React Icons, SweetAlert2 |
| **Backend** | Next.js Server Actions, Next.js API Routes, Node.js |
| **Database** | MongoDB, MongoDB Atlas |
| **Authentication** | NextAuth.js, Credentials Authentication, Google OAuth, JWT, bcrypt |
| **Payments** | Stripe Checkout |
| **Email** | Nodemailer, Gmail SMTP |
| **Deployment** | Vercel |

---

## 🔐 Authentication & Authorization

Care.io uses **NextAuth.js** for authentication and session management.

### Authentication Methods

- Email & Password
- Google Sign-In
- Password hashing with bcrypt
- JWT-based sessions

### Role-Based Access

Users are assigned roles such as:

- `user`
- `admin`

Protected routes are handled using **Next.js Middleware**, ensuring that admin-only pages are accessible only to authorized administrators.

---

## 👨‍💼 Admin Dashboard

The admin dashboard provides centralized management of the Care.io platform.

### Manage Users

- View all registered users
- Promote users to admin
- Block / unblock users
- Manage user access

### Manage Services

- Add new healthcare services
- Edit existing services
- Delete services
- Upload service images
- Manage pricing, features, and service coverage

### Messages

- View messages submitted by users and guests
- Read customer inquiries
- Reply directly through email

---

## 💳 Payment System

Care.io integrates **Stripe Checkout** to provide a secure payment experience for service bookings.

Users can select a healthcare service, complete the booking process, and make payments through Stripe.

---

## 📧 Email System

**Nodemailer** is integrated with Gmail SMTP to support email communication from the admin dashboard.

Admins can reply directly to customer messages through email.

---

## 📱 Responsive Design

Care.io is designed with a mobile-first approach using **Tailwind CSS** and **DaisyUI**.

The application provides a consistent experience across:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

---

## 🎯 Project Goal

Care.io was built as a practical full-stack project to gain hands-on experience with modern web development technologies and real-world application architecture.

The project focuses on:

- Next.js App Router
- React component development
- Server Actions and API Routes
- Authentication and authorization
- Role-based access control
- Stripe payment integration
- MongoDB database operations
- CRUD functionality
- Email communication
- Responsive UI development
- Production deployment

---

## 🚀 Deployment

Care.io is deployed on **Vercel** and can be accessed directly through the live website.

👉 **[Open Care.io](https://care-io-roan.vercel.app)**

---

## 👨‍💻 Developer

### Khandokar Fuad Hasan

**Frontend Developer | MERN Stack Devloper**

- 🌐 Portfolio: [fuad-portfolio-ten.vercel.app](https://fuad-portfolio-ten.vercel.app)
- 💻 GitHub: [fuadhasan199](https://github.com/fuadhasan199)
- 🔗 LinkedIn: [Khandokar Fuad Hasan](https://www.linkedin.com/in/khandokar-fuad-hasan-656815386/)

---

Built with ❤️ using **Next.js**