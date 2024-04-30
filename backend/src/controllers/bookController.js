const BookModel = require('../models/bookModel');

const createBook = async  function (req, res){
  try {
    let data=req.body
    const book = await BookModel.create(data);
    return res.status(201).send({ status: true, msg: "book created successfully", data: book })
} catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllBooks = async function (req, res) {
  try {
    const books = await BookModel.find();
    return res.status(200).send({ status: true, message: 'Books list', data: books })
} catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async function  (req, res)  {
  try {
    const id = req.params.id;
    const book = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send({ status: true, message: "Update Book Successfully", data: book })
} catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBook = async  function (req, res) {
  try {
    const id  = req.params.id;
    await BookModel.findByIdAndDelete(id);
    return res.status(200).send({ status: true, message: "delete Book Successfully"})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { createBook, getAllBooks,  updateBook, deleteBook }
