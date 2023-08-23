<a name="readme-top"></a>

<!-- PROJECT LOGO -->

# Amplo : Another Habit Tracking Tool

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

## Built With

- [React (JavaScript Vite)](https://vitejs.dev/)
- [Firebase (Auth and Firestore)](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Node (Version 16+)
- NPM (Version 8+)

### Installation

Install all the required packages in the `client` directory

```
cd client && npm i
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

To run the project locally

### Prerequisites

1.  Create a `.env` file in the `/client` directory
2.  Add the following to the `.env` file

```
VITE_FIREBASE_API_KEY = {Firebase API Key}
VITE_FIREBASE_AUTH_DOMAIN = {Firebase Auth Domain}
VITE_FIREBASE_PROJECT_ID = {Firebase Project ID}
VITE_FIREBASE_STORAGE_BUCKET = {Firebase Storage Bucket}
VITE_FIREBASE_MESSAGING_SENDER_ID = {Firebase Messaging Sender ID}
VITE_FIREBASE_APP_ID = {Firebase App ID}
VITE_FIREBASE_MEASUREMENT_ID = {Firebase Measurement ID}
```

### Running the client

1. Run the command `npm run dev` at the client directory

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Resources

- [Database Schema](https://dbdiagram.io/d/6489cc7e722eb77494f57f59)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
