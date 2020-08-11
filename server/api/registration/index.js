const registration = (req, res) => {
  try {
    const userToRegister = req.body.username;
    if (userToRegister === 'error') throw('Sorry, you can\'t have the username \'error\' I am using it for testing :)');
    res.send({ message: `Will register the user \'${userToRegister}\', just when I get around to making a DB...` });
  } catch (err) {
    res.status(500).send({ message: err});
  }
}

module.exports = registration;