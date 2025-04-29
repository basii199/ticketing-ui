# 🎟️ Techember Fest Ticketing App

A modern, responsive web application for booking tickets to Techember Fest '25. Built with React, this app provides a seamless 3-step process to upload a profile photo, enter personal details, and generate a personalized digital ticket.

## 🚀 Features

- **🖼 Image Upload**: Upload or drag-and-drop a profile photo using Cloudinary integration
- **✍️ Personal Details**: Input name, email, and special requests
- **✅ Real-time Validation**: Email validation using Validator.js
- **📩 Data Persistence**: Store user data in localStorage across steps
- **🧾 Ticket Generation**: Generate and display a styled, downloadable ticket
- **🔄 Restart Process**: Option to book a new ticket after completion

## 🏗 Project Structure
src/
├── components/
│ ├── AttendeeDetails.jsx # Step 2: User fills in personal info
│ ├── Ready.jsx # Step 3: Ticket confirmation & preview
│ └── ... # Other components (e.g. Step 1 if added)
├── App.jsx # Routing setup for steps
├── index.js # React entry point
└── styles/ # Optional: CSS/SCSS files


## 🛠️ Tech Stack

- **Frontend**: React with React Router
- **Image Uploads**: Cloudinary
- **Styling**: Tailwind CSS (or utility CSS)
- **Validation**: Validator.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn
- Cloudinary account (for image uploads)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/basii199/ticketing_ui.git
   cd ticketing_ui
2. Install dependencies:
   ```bash
   npm install
3. Start development server:
   ```bash
   npm run dev