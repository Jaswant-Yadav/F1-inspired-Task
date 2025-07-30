# 🏁 F1-Inspired Streetwear E-Commerce Prototype

This project is a minimal, React-based e-commerce experience designed for an F1-inspired streetwear brand. It focuses on clean structure, great UX, and rapid development.

## 🚀 Features

### ✅ Pages & Flows

- **Home Page**
  - Hero section with brand message
  - "View All" button navigates to all products
  - Category list (5 total — only "Tees" functional)

- **Category Page**
  - Product grid for "Tees"
  - Clicking a product navigates to `/products` page

- **Product List Page**
  - Search input with filter
  - Dynamic list
  - Empty state handling when no matches are found

- **Cart Page**
  - List of added items
  - Quantity adjustment (+/-)
  - Subtotal calculation
  - Checkout button (non-functional placeholder)

- **Authentication Pages**
  - Login
  - Signup
  - Forgot Password with OTP simulation and password reset
  - Data Capture to Google Sheet (via SheetDB or custom API)


  ## 🧪 Tech Stack

- **Frontend**: React + React Router
- **Data**: Local state & static data (no DB)
- **Integration**: Optional Google Sheets capture

## 📝 Setup Instructions

```bash
git clone https://github.com/Jaswant-Yadav/F1-inspired-Task.git
cd F1-inspired-Task
npm install
npm start


## Live Server

https://f1-inspired-task.vercel.app/
