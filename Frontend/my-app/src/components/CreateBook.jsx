import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = (props) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/books", book)
      .then((res) => {
        setBook({
          f_Id:"",
          f_Image: "",
          f_Name: "",
          f_Email: "",
          f_Mobile: "",
          f_gender: "",
          f_Course: "",
          f_Designation:"",
          f_Createdate: ""
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Employee List
            </Link>
          </div>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Employee</h1>
            <p className="lead text-center">Create new Employee</p>
            <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <input
                  type="text"
                  placeholder="Employee ID"
                  name="f_Id"
                  className="form-control"
                  value={book.f_Id}
                  onChange={onChange}
              />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Image URL"
                      name="f_Image"
                      className="form-control"
                      value={book.f_Image}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Name"
                      name="f_Name"
                      className="form-control"
                      value={book.f_Name}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="email"
                      placeholder="Email"
                      name="f_Email"
                      className="form-control"
                      value={book.f_Email}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Mobile"
                      name="f_Mobile"
                      className="form-control"
                      value={book.f_Mobile}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Designation"
                      name="f_Designation"
                      className="form-control"
                      value={book.f_Designation}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Gender"
                      name="f_gender"
                      className="form-control"
                      value={book.f_gender}
                      onChange={onChange}
                  />
              </div>
              <br />
              <div className="form-group">
                  <input
                      type="text"
                      placeholder="Course"
                      name="f_Course"
                      className="form-control"
                      value={book.f_Course}
                      onChange={onChange}
                  />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;