# 🔐 System Authentication API (Express + MySQL + JWT)

REST API untuk sistem autentikasi user menggunakan Express.js, MySQL, dan JWT dengan arsitektur MVC.

Project ini dibuat sebagai simulasi backend aplikasi internal dengan fitur authentication dan role-based access control.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MySQL
- JSON Web Token (JWT)
- bcrypt
- dotenv
- MVC Architecture

---

## 📂 Project Structure

```
src/
 ├── controllers/
 │     ├── authController.js
 │     └── userController.js
 ├── models/
 │     └── userModel.js
 ├── routes/
 │     ├── authRoutes.js
 ├── middlewares/
 │     ├── authMiddleware.js
 ├── config/
 │     └── db.js
 │── app.js
 └──server.js
```

---

## 🔑 Features

- User registration
- User login
- JWT authentication
- Password hashing using bcrypt
- Environment configuration using dotenv
  
---

## 🔐 Authentication Flow

1. User login menggunakan email dan password  
2. Server memverifikasi password  
3. Server menghasilkan JWT  
4. Client menyimpan token  
5. Token dikirim melalui header:

```
Authorization: Bearer <token>
```

6. Middleware memverifikasi token sebelum mengakses endpoint yang dilindungi  

---

## 📌 API Endpoints

### 🔹 Auth

#### Register  
`POST /api/auth/register`

Request Body:
```json
{
  "name": "Budi",
  "email": "budi@mail.com",
  "password": "123456"
}
```

---

#### Login  
`POST /api/auth/login`

Response:
```json
{
  "token": "jwt_token_here"
}
```

---

### 🔹 User

#### Get Profile (Protected)  
`GET /api/users/profile`

Header:
```
Authorization: Bearer <token>
```

---

## ⚙️ Environment Variables

Buat file `.env` di root project:

```
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=your_database

JWT_SECRET=your_super_secret_key
```

---

## 🛠️ Installation & Setup

1. Clone repository

```
git clone https://github.com/cryzepy/system-login-v1.git
cd system-login-v1
```

2. Install dependencies

```
npm install
```

3. Setup database MySQL

Buat database dan tabel `users`.

Struktur tabel:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Jalankan server

Development mode:
```
npm run dev
```

Production mode:
```
node server.js
```

---

## 🧠 Architecture Overview

- Controller → menangani HTTP request & response  
- Middleware → authentication & authorization  
- Config → konfigurasi database  

Struktur ini dibuat agar scalable, maintainable, dan mengikuti praktik backend modern.

---

## 📈 Possible Improvements

- Refresh token mechanism  
- Swagger / OpenAPI documentation  

---

## 🎯 Purpose of This Project

Project ini dibuat untuk menunjukkan pemahaman tentang:

- Arsitektur backend berbasis MVC  
- Implementasi JWT authentication  
- Middleware authorization  
- Clean separation of concerns  
- Pengelolaan environment variables  

---

## 📄 License

This project is for educational and portfolio purposes.
