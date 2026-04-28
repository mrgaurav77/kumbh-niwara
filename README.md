# KumbhNiwara 🏡✨

KumbhNiwara is a full-stack platform designed to help locals host pilgrims visiting the Kumbh Mela and finding accommodations, built utilizing the **React.js** library for the Frontend and **Node.js/Express/MongoDB** for the Backend API.

This guide will walk you through the process of setting up and running the KumbhNiwara project locally on your machine.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (Available locally, or create a free MongoDB Atlas Cloud account)

---

## 🚀 Setting Up the Project

This project consists of two separate applications that run synchronously: the Backend API and the React Frontend application. You will need roughly two separate terminal windows to run them concurrently.

### 1. Clone the Repository
Clone this directory and navigate into the parent folder:
```bash
# Clone the corresponding repository via Git or extract the zipper folder
cd Kumbh-Niwara
```

### 2. Backend Setup
The backend serves the API and controls database interactions.

1. **Navigate to the Backend Directory:**
   ```bash
   cd backend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env` file in the root of the `backend` folder (if it's not already supplied). You must declare your MongoDB connect credentials and a secure JWT Secret:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/kumbh-nivara?appName=Cluster0
   JWT_SECRET=supersecretkumbhniwara123
   ```
   *(Note: Ensure you replace the placeholder URL with your actual Local or MongoDB Atlas URI).*
4. **Start the Backend Server:**
   ```bash
   npm start
   # or utilizing nodemon globally
   node server.js
   ```
   *Your terminal will display "Server is running on port 5000" and connection states.*

### 3. Frontend Setup
The frontend is the visual interface clients will see.

1. **Navigate to the Frontend Directory (In a new terminal window):**
   ```bash
   # From the root of your project
   cd my-app
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
   *(Note: Because this project utilizes TailwindCSS and Lucide-React prominently, running npm install ensures all UI components load correctly out-of-the-box).*
3. **Start the Frontend Client:**
   ```bash
   npm start
   ```
   *This command will spin up the development environment, and automatically open your web app via `http://localhost:5000` in your default browser.*

---

## 🌟 Usage Instructions

Once both servers are running successfully:
- **Navigation:** Open `http://localhost:5000` to view the beautiful KumbhNiwara interface.
- **Authentication:** Explore signing up dynamic accounts or logging in via the navigation bar.
- **Host Submission:** Authenticated users can navigate to "Become a Host" and input precise property listings securely which immediately writes directly to your structured database in MongoDB.

## 📦 Tech Stack Summary

- **Frontend:** React 19, TailwindCSS, React-Router-DOM
- **Backend:** Node.js v18+, Express v5, Mongoose & MongoDB
- **Security:** bcrypt hashing protocol, JSON Web Tokens (JWT)
- **Utilities:** Multer (local image uploading storage)
