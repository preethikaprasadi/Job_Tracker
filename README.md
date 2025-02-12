# Job Tracker

## Overview
Job Tracker is a web application designed to help users manage and track their job applications efficiently. It provides an intuitive interface to add, update, and monitor job statuses, ensuring users stay organized throughout their job search process.

## Features
- Add and manage job applications
- Track job statuses (e.g., applied, interview, offer, rejected)
- Edit and delete job entries
- User-friendly interface with a clean UI
- Responsive design for seamless use on different devices

## Technologies Used
### Frontend:
- Next.js
- TypeScript
- React
- Tailwind CSS
- Zustand (for state management)
- Axios (for API requests)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose for database modeling)

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB

### Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/job-tracker.git
   cd job-tracker
   ```
2. **Install dependencies for the frontend and backend**
   ```sh
   cd job-tracker-frontend
   npm install
   cd ../job-tracker-backend
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env.local` file in `job-tracker-frontend` and add the following:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```
   - Create a `.env` file in `job-tracker-backend` and add:
     ```env
     MONGO_URI=mongodb://localhost:27017/job-tracker
     PORT=5000
     ```
4. **Start the backend server**
   ```sh
   cd job-tracker-backend
   npm run dev
   ```
5. **Start the frontend application**
   ```sh
   cd ../job-tracker-frontend
   npm run dev
   ```

## Usage
1. Open the application in your browser at `http://localhost:3000`
2. Start adding and managing your job applications!

## Contributing
Feel free to submit pull requests or open issues to improve the project.

## License
This project is licensed under the MIT License.
