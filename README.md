# TaskFlow 🚀

TaskFlow is a full-stack task management application built using the MERN stack. It allows users to register, login, and manage their tasks efficiently with a clean and responsive interface.


## 📌 Features

- User Authentication (Register/Login)
- JWT Authentication & Authorization
- Create Tasks
- View All Tasks
- Update Tasks
- Delete Tasks
- Protected Routes
- Responsive UI
- MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS



## 📂 Project Structure

```bash
TaskFlow/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/taskflow.git
cd taskflow
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🔑 API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

#### Login User

```http
POST /api/auth/login
```

Request Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Tasks

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

---

## 📸 Screenshots

### Login Page

Add Screenshot Here

### Dashboard

Add Screenshot Here

### Task Management

Add Screenshot Here

---

## 🔒 Authentication

TaskFlow uses:

- JWT (JSON Web Tokens)
- Password Hashing with bcryptjs
- Protected Routes Middleware

---



## 👨‍💻 Author

Chaitanya Mungase

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, give it a star on GitHub.
