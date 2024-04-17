const { Assign, Book, User } = require("@models");

// Saves the userId and bookId
const assignBook = async (req, res) => {
  const { userId, bookId } = req.body.data;
  try {
    await Assign.create({ userId, bookId, returnStatus: false });
    return res.send({ statusCode: 200, message: `Book Assigned!` });
  } catch (error) {
    return res.send({ statusCode: 404, message: error.message });
  }
};

// changes returnStatus : false
const returnBook = async (req, res) => {
  const returnBook = async (req, res) => {
    try {
      await Assign.update({ returnStatus: true });
      return res.send({ statusCode: 200, message: `Returned!` });
    } catch (error) {}
  };
};

// fetchs the book and users information.

const fetchAssignedBooks = async (req, res) => {
  try {
    const assignedInfo = await Assign.findAll({
      where: {
        returnStatus: false,
      },
      include: [
        {
          model: Book,
          attributes: ["title"],
        },
        {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      ],
    });
    return res.send({ statusCode: 200, data: assignedInfo });
  } catch (error) {
    return res.send({ statusCode: error.statusCode, message: error.message });
  }
};

module.exports = { assignBook, fetchAssignedBooks, returnBook };
