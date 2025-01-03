# E-com

Welcome to **E-com**! This guide will help you set up and run both the server and client sides of the E-coom E-Commerce application locally on your machine.

## Table of Contents

- [Project Overview](#project-overview)
- [Live URL](#live-url)
- [Features](#features)
- [Technology Used](#technology-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Running the Application](#running-the-application)

## Project Overview

**E-com** is a modern e-commerce platform designed to provide a seamless shopping experience for users, vendors, and administrators. Users can browse products, vendors can manage shops and inventories, and administrators have control over the entire platform. The system is built to be intuitive, responsive, and secure.

## Live URL

Check out the live version of the application here: [E-coom Live](https://ph-assignment-09.vercel.app/)

## Features

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Vendor Management**: Create and manage shops, add products, and track orders.
- **Product Browsing**: Search, filter, and compare products.
- **Cart Functionality**: Add products to the cart and proceed to checkout.
- **Admin Control**: Manage users, vendors, products, and categories.
- **Responsive Design**: Optimized for mobile and desktop.

## Technology Used

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT** for Authentication
- **Bcrypt** for Password Hashing
- **Dotenv**

### Frontend

- **React**
- **Tailwind CSS**

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 16 or higher)
- [npm](https://www.npmjs.com/get-npm) (version 6 or higher)

## Installation

### Server

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/e-coom
   cd e-coom/server
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

### Client

1. **Navigate to the client directory**:

   ```sh
   cd ../client
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

## Setting Up Environment Variables

Create a `.env` file in both the `server` and `client` directories and add the required environment variables:

### Server

```env
NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://<user_name>:<user_password>@cluster0.mongodb.net/e-coom?retryWrites=true&w=majority
BCRYPT_SALT_ROUNDS=12
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=30d
```

### Client

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENV=development
```

## Running the Application

### Server

To run the server in development mode with hot-reloading:

```sh
cd server
npm run start:dev
```

The server will be accessible at http://localhost:8000.

### Client

To run the client in development mode:

```sh
cd client
npm start
```

The client will be accessible at http://localhost:3000.

Thank you for using **E-coom**! Happy shopping! 🛒
