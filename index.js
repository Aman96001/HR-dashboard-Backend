const express = require('express');
const connectDB = require('./config/db');
 require('dotenv').config();
 const userrouter = require('./routes/auth');
 const candidaterouter = require('./routes/candidate');
 const emplyeerouter = require('./routes/employee');
 const grantLeaverouter = require('./routes/grantleave');
 const cors = require('cors');
 
 
connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',  //frontend
    credentials: true             
  }));
  
  app.use(express.json());
  app.use('/',emplyeerouter);
app.use('/',userrouter);
app.use('/',candidaterouter);
app.use('/',grantLeaverouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


