const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  f_Id: {
    type: String,
    required: true,
  },
  f_Image: {
    type: String,
    required: true,
  },
  f_Name: {
    type: String,
    required: true,
  },
  f_Email: {
    type: String,
    required: true,
  },
  f_Mobile: {
      type: String,
      required: true,
  },
  f_Designation: {
      type: String,
      required: true,
  },
  f_gender: {
      type: String,
      required: true,
  },
  f_Course: {
      type: String,
      required: true,
  },
  f_Createdate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);