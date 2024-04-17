const { Book } = require("@models");

// Saves book into the database.
const save = async (req, res) => {
  console.log(req.body.data);
  const { title, author, description } = req.body.data;
  try {
    await Book.create({
      title,
      author,
      description,
    });
    return res.json({
      status: 200,
      message: `New book ${title} by ${author} successfully added! `,
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: error.message,
    });
  }
};

// Fetch all books from books table
const findAllBooks = async (req, res) => {
  try {
    const data = await Book.findAll();

    return res.send({ status: 200, data });
  } catch (error) {
    return res.send({ status: 404, data: error.message });
  }
};

module.exports = { save, findAllBooks };
