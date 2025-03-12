 
const User = require('../model/user');
 const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

 const Register = async (req,res)=>{

     try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({email});
   if(userExist) return res.status(400).json({message: ' user alread exist'})

    const user = await User.create({ name, email, password });
    const token = jwt.sign(
      { id: user._id },
     process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    res.status(200).json({
      token,
      user: { id: user._id, name, email },
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Invalid properties' });
  }
 }

 const login =  async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'user not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.json({ token, user: { id: user._id, fullName: user.fullName, email: user.email } });
};

 module.exports = {
    Register,
    login,
    
 }