const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/books");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use("/api/books", routes);

// Connect Database
connectDB();

// Login endpoint
app.post("/api/login", (req, res) => {
  // For simplicity, let's assume hardcoded credentials
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    res.status(200).json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
