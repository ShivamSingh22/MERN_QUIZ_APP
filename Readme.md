# Quiz Application

This is a full-stack Quiz Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create quizzes easily and stores the results of users with their marks and pass/fail status.

## Features

- Create and manage quizzes
- Take quizzes and receive immediate feedback
- Store user results with scores and pass/fail status

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/quiz_app.git
cd quiz_app
# Install server dependencies
npm install

# Navigate to the client directory and install client dependencies
cd client
npm install

#/server/.env
ATLAS_URL=your_mongodb_atlas_url
PORT=5000

#/client/.env
VITE_APP_SERVER_HOSTNAME=http://localhost:5000

#to run server
NPM START

#To run client
NPM RUN DEV
