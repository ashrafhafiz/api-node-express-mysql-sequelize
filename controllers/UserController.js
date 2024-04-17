const { User } = require("@models");

// Creates a new user into Users table
const createUser = async (req, res) => {
  const { firstName, lastName } = req.body.data;
  try {
    const user = await User.create({
      firstName,
      lastName,
    });
    return res.send({
      status: 200,
      message: `New user: ${user.firstName} ${user.lastName} has been created`,
    });
  } catch (error) {
    return;
  }
};

// fetch all the users from the database
const findAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();

    return res.send({ status: 200, data });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

module.exports = { createUser, findAllUsers };
