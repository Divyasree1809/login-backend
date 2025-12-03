

# 🚀 **Login Backend – Node.js + Express + MongoDB + JWT Authentication**

This is the backend for a secure authentication system built using:

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT Authentication**
* **Bcrypt Password Hashing**
  

---

## 📁 **Project Structure**

```
login-backend/
│── config/
│   └── db.js
│── controllers/
│   └── authController.js
│── models/
│   └── User.js
│── routes/
│   └── authRoutes.js
│── middleware/
│   └── authMiddleware.js
│── .env
│── server.js
│── package.json
│── README.md
```

---

## 🔧 **Technologies Used**

* **Express.js** (API framework)
* **MongoDB & Mongoose** (database)
* **JWT (jsonwebtoken)** for login authentication
* **Bcrypt.js** for password hashing
* **Nodemailer** (if email OTP/verification added)
* **CORS** for frontend connection
* **Dotenv** for environment variables

---

## ⚙️ **Installation**

### **1. Clone the repository**

```
git clone https://github.com/Divyasree1809/login-backend.git
cd login-backend
```

### **2. Install dependencies**

```
npm install
```

---

## 🔐 **Environment Variables**

Create a `.env` file in the root folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```

⚠️ **Never push your `.env` file to GitHub!**

Make sure your `.gitignore` includes:

```
.env
node_modules/
```

---

## ▶️ **Run the Server**

### **Development**

```
npm run dev
```

### **Production**

```
npm start
```

Server runs by default on:

```
http://localhost:5000
```

---

## 📌 **API Endpoints**

### **1. Register User**

**POST** `/api/auth/register`

**Body:**

```json
{
  "email": "example@gmail.com",
  "password": "yourpassword"
}
```

---

### **2. Login User**

**POST** `/api/auth/login`

**Body:**

```json
{
  "email": "example@gmail.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

---

### **3. Get User Profile (Protected Route)**

**GET** `/api/auth/me`

Header:

```
Authorization: Bearer <token>
```

---

## 🛡️ **Security Features**

✔ Password hashing using **bcrypt**
✔ JWT-based authentication
✔ Protected routes using middleware
✔ Validation & error handling


---



