const mongoose = require('mongoose');
require('dotenv/config');

const User = require('../models/user');

function registration(req, res)  {
  try {
    const userToRegister = req.body.username;
    if (userToRegister === 'error') throw('Sorry, you can\'t have the username \'error\' I am using it for testing :)');
    
    const user = new User({
      _id: userToRegister,
      wins: 0,
      losses: 0,
      role: 'USER',
    });
    
    const { DB_CONNECTION } = process.env;
    mongoose.connect(
      DB_CONNECTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    const db = mongoose.connection;
    db.on('error', (error) => { throw error });
    db.once('open', async function() {
      const dupeUser = await User.findById(userToRegister);
      if (dupeUser) {
        res.status(500).send({ message: `'${userToRegister}' is already taken`});
      } else {
        const savedUser = await user.save();
        if (savedUser) {
          res.send({ message: `Registered the user '${savedUser._id}'` });
        } else {
          res.status(500).send({ message: `Unable to register the user '${userToRegister}'`});
        }
      }

      mongoose.connection.close()
      
    });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = registration;