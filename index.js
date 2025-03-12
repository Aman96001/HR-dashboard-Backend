const express = require('express');

 require('dotenv').config();
 const userrouter = require('./routes/auth');
 const candidaterouter = require('./routes/candidate');
 const emplyeerouter = require('./routes/employee');
 const grantLeaverouter = require('./routes/grantleave');
 require("./config/db").connect();
 const cors = require('cors');
 


const app = express();
app.use(cors());
  
  app.use(express.json());
  app.use('/',emplyeerouter);
app.use('/',userrouter);
app.use('/',candidaterouter);
app.use('/',grantLeaverouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


