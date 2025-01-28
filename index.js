const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Log requests using morgan

// Start API endpoint
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}!`);
});
