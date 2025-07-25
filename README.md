
# URL Shortener

A web-based application that allows users to shorten long URLs and optionally create custom short URLs. The app supports full user authentication, enabling registered users to manage and track their links.





## 🛠 Tech Stack

**Client:** React.js, TanStack Router, Redux, CSS  
**Server:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** Bcrypt, Token-based Authentication  
**Tools & Libraries:** Mongoose, Dotenv
## 🔧 Features

- User Authentication: Secure login and registration system with session-based or token-based authentication.

- URL Shortening: Converts long URLs into compact, shareable short links.

- Custom URLs: Logged-in users can create custom aliases instead of random strings for their short URLs.

- User Dashboard: Displays all links created by the user, with options to view, edit, or delete them.

- Redirect Handling: Automatically redirects from a short URL to its corresponding full URL.

- Validation & Error Handling: Ensures valid URLs and prevents duplicate custom short codes.

- MongoDB Integration: Stores user data and shortened URLs in a structured, scalable format.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

