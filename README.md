# 🩸 Blood Bank Management System

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/2300030811/bloodbank-app)
![GitHub stars](https://img.shields.io/github/stars/2300030811/bloodbank-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/2300030811/bloodbank-app?style=social)
![License](https://img.shields.io/badge/license-Educational-blue)

### A Smart Blood Donation & Management Platform

Connecting **donors**, **hospitals**, and **blood banks** to save lives efficiently during emergencies.

</div>

---

# 📌 Introduction

The **Blood Bank Management System** is a full-stack healthcare platform designed to digitize and simplify blood donation and blood inventory management.

This system enables:

- Donors to register and donate blood
- Hospitals to request blood during emergencies
- Blood banks to monitor and manage inventory
- Admins to oversee the complete system

The project focuses on improving:
- ⚡ Emergency response time
- 📊 Inventory tracking
- 🔍 Blood availability visibility
- 🤝 Coordination between donors and hospitals

---

# ✨ Key Features

## 👤 Donor Module
- Donor registration & login
- Blood group management
- Donation history tracking
- Eligibility verification
- Profile management

---

## 🏥 Hospital Module
- Request blood units
- View available blood stock
- Emergency request handling
- Track request status

---

## 🩸 Blood Bank Module
- Manage blood inventory
- Add/update blood stock
- Monitor shortages
- Approve or reject requests

---

## 🔐 Authentication & Security
- Secure user authentication
- Role-based access control
- Admin authorization
- Protected routes

---

## 📊 Dashboard & Analytics
- Blood stock statistics
- Donor activity overview
- Request analytics
- Inventory monitoring

---

# 🚀 Why This Project Matters

Every second matters during medical emergencies.

Traditional blood management systems are often:
- Slow
- Unorganized
- Difficult to track in real-time

This project aims to provide:
- Faster blood availability checks
- Better coordination
- Improved healthcare efficiency
- Digital transformation for blood banks

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Structure |
| CSS | Styling |
| JavaScript | Frontend Logic |
| Node.js | Backend Runtime |
| Express.js | API & Server |
| MongoDB / MySQL | Database |
| Git & GitHub | Version Control |

> Update the stack section if your actual technologies are different.

---

# 📂 Project Structure

```bash
bloodbank-app/
│
├── frontend/              # Frontend source code
├── backend/               # Backend APIs and server
├── database/              # Database configuration
├── controllers/           # Request handlers
├── routes/                # API routes
├── models/                # Database models
├── public/                # Static assets
├── assets/                # Images/icons
├── middleware/            # Authentication & validations
├── package.json
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/2300030811/bloodbank-app.git
```

---

## 2️⃣ Navigate to the Project Folder

```bash
cd bloodbank-app
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_database_url
JWT_SECRET=your_secret_key
```

---

## 5️⃣ Start the Application

```bash
npm start
```

---

# 🖥️ System Workflow

```text
Donor Registration
        ↓
Blood Donation
        ↓
Blood Inventory Updated
        ↓
Hospital Requests Blood
        ↓
Blood Bank Approves Request
        ↓
Emergency Fulfilled
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

---

## Blood Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/blood` | Get blood inventory |
| POST | `/api/blood/add` | Add blood stock |
| PUT | `/api/blood/update/:id` | Update stock |

---

## Requests

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/request` | Create blood request |
| GET | `/api/request/all` | View requests |

---

# 🔥 Future Enhancements

- 📍 GPS-based nearby blood bank finder
- 📱 Mobile application
- 📩 SMS & Email alerts
- 🤖 AI donor recommendation system
- 📡 Real-time emergency notifications
- 🌐 Multi-language support
- ☁️ Cloud deployment

---

# 🎯 Real-World Applications

This project can be used in:

- Hospitals
- Blood donation camps
- Emergency healthcare systems
- Government healthcare platforms
- NGO blood donation drives

---

# 🧠 Learning Outcomes

Through this project, concepts such as:

- Full-stack development
- RESTful APIs
- Database management
- Authentication systems
- Role-based access control
- System design

were implemented and explored.

---

# 🌟 Support the Project

If you found this project useful:

⭐ Star the repository  
🍴 Fork the project  
🐛 Report issues  
🚀 Contribute improvements

---

# 📜 License

This project is developed for:

- Educational purposes
- Academic learning
- Portfolio showcase

---

# 📬 Contact

## Developer

**Mahesh Sai**

- GitHub: [2300030811](https://github.com/2300030811)
- Email: 2300030811cser@gmail.com

---

<div align="center">

## ❤️ Donate Blood, Save Lives

_"A single donation can save multiple lives."_

</div>
