const express = require('express');

 require('dotenv').config();
 const userrouter = require('./routes/auth');
 const candidaterouter = require('./routes/candidate');
 const emplyeerouter = require('./routes/employee');
 const grantLeaverouter = require('./routes/grantleave');
 require("./config/db").connect();
 const cors = require('cors');
 


const app = express();


// Define the list of allowed headers
const allowedHeaders = [
  "Origin",
  "Authorization",
  "X-Requested-With",
  "Content-Type",
  "Accept",
  "requestPath",
];

// Allow specific origins and headers
const corsOptions = {
  origin: ["https://hr-dashboard-frontend-ycxl.onrender.com", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: allowedHeaders.join(","), // Include the Authorization header
};
app.options("*", cors(corsOptions));

app.use(cors(corsOptions));
  
  app.use(express.json());
  app.use('/',emplyeerouter);
app.use('/',userrouter);
app.use('/',candidaterouter);
app.use('/',grantLeaverouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


