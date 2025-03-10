
# 🏥 Appointment Booking System (Node.js + MongoDB)

This is a **Node.js & Express** server for an **Appointment Booking System** that allows users to **view available time slots** and **book appointments**. The system is built with **MongoDB** for database storage and follows a **clean architecture**.

---

## 📌 **Installation Guide**

### **1️⃣ Install Required Tools**
Before running the project, ensure the following are installed:

#### **🔹 Install Node.js**
- Download and install **[Node.js](https://nodejs.org/)**
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

#### **🔹 Install MongoDB**
- Download and install **[MongoDB](https://www.mongodb.com/try/download/community)**
- Start MongoDB server:
  ```bash
  mongod
  ```

Alternatively, you can use **MongoDB Atlas** (Cloud-based MongoDB).

---

## 🚀 **Project Setup**
### **2️⃣ Clone the Repositories**

#### **🔹 Clone the Backend Repository**
```bash
git clone https://github.com/MuhammadAslam-K/appointment-server
cd server
```

#### **🔹 Clone the Frontend Repository**
```bash
git clone https://github.com/MuhammadAslam-K/appointment-client
cd client
```

---

## ⚙️ **Backend (Node.js Server) Setup**
### **3️⃣ Install Dependencies**
Navigate to the backend folder and install required dependencies:
```bash
npm install
```

### **4️⃣ Configure Environment Variables**
Create a **.env** file in the backend project root and add:
```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
```
*(Replace `<your_mongodb_connection_string>` with your actual MongoDB connection string.)*

### **5️⃣ Run the Backend Server**
```bash
npm run dev
```
The server will run at **`http://localhost:5000`**.

---

## 🎨 **Frontend Setup (HTML, CSS, JavaScript)**
### **6️⃣ Navigate to the Frontend Folder**
```bash
cd client
```

### **7️⃣ Open the `index.html` File**
#### **🔹 Option 1: Open Manually**
- Locate `index.html` in the project folder.
- **Double-click** the file to open it in your browser.

#### **🔹 Option 2: Open Using Live Server (Recommended)**
If you have **VS Code**, install the **Live Server** extension and:
1. Right-click `index.html`
2. Click **"Open with Live Server"**

---

## 📡 **API Documentation**
The full API documentation is available here:  
🔗 **[API Documentation](https://www.apidog.com/apidoc/shared-0d1e1cf3-6bf9-4346-ae3f-51a884c89a02/book-an-appointment-by-date-and-time-14653784e0)**  

---

## 📝 **API Endpoints**
| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| `GET`  | `/api/appointments/slots?date=YYYY-MM-DD` | Fetch available time slots      |
| `POST` | `/api/appointments/book`         | Book an appointment            |

For detailed API usage, check the **[API Documentation](https://www.apidog.com/apidoc/shared-0d1e1cf3-6bf9-4346-ae3f-51a884c89a02/book-an-appointment-by-date-and-time-14653784e0)**.

---

## 🏗 **Project Structure**
```
/appointment-booking-server
│── /controllers       # Handles API requests
│── /services          # Business logic
│── /routes            # API Routes
│── /models            # MongoDB Schemas
│── /config            # Configuration files
│── .env               # Environment Variables
│── server.js          # Entry Point
│── README.md          # Documentation
```

---

## 🛠 **Built With**
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Frontend:** HTML, CSS, JavaScript  
- **API Documentation:** API Dog  

```

---
