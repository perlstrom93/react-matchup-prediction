const signin = (req, res) => {
  try {
    const userToSignin = req.body.username;
    if (userToSignin === 'error') throw('Sorry, you can\'t signin with the username \'error\' I am using it for testing :)');
    res.send({ message: `Will sigin the user \'${userToSignin}\', just when I get around to making a DB...` });
  } catch (err) {
    res.status(500).send({ message: err});
  }
}

module.exports = signin;