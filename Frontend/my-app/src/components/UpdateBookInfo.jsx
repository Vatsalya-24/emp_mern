import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateBookInfo(props) {
  const [book, setBook] = useState({
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook({
          f_Id: res.data.f_Id,
          f_Name: res.data.f_Name,
          f_Email: res.data.f_Email,
          f_Mobile: res.data.f_Mobile,
          f_Designation: res.data.f_Designation,
          f_gender: res.data.f_gender,
          f_Course: res.data.f_Course,
          f_Createdate: res.data.f_Createdate          
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      f_Id: book.f_Id,
      f_Name: book.f_Name,
      f_Email: book.f_Email,
      f_Mobile: book.f_Mobile,
      f_Designation: book.f_Designation,
      f_gender: book.f_gender,
      f_Course: book.f_Course,
      f_Createdate: book.f_Createdate
      
    };

    axios
      .put(`http://localhost:8082/api/books/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateEmployeeInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Employee</h1>
            <p className='lead text-center'>Update Employee's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
            <label htmlFor='f_Name'>Name</label>
              <input
                type='text'
                placeholder='Name'
                name='f_Name'
                className='form-control'
                value={book.f_Name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_Id'>Employee ID</label>
              <input
                type='text'
                placeholder='Employee ID'
                name='f_Id'
                className='form-control'
                value={book.f_Id}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_Email'>Email</label>
              <input
                type='text'
                placeholder='Email'
                name='f_Email'
                className='form-control'
                value={book.f_Email}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_Mobile'>Mobile</label>
              <input
                type='text'
                placeholder='Mobile'
                name='f_Mobile'
                className='form-control'
                value={book.f_Mobile}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_Designation'>Designation</label>
              <input
                type='text'
                placeholder='Designation'
                name='f_Designation'
                className='form-control'
                value={book.f_Designation}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_gender'>Gender</label>
              <input
                type='text'
                placeholder='Gender'
                name='f_gender'
                className='form-control'
                value={book.f_gender}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='f_Course'>Course</label>
              <input
                type='text'
                placeholder='Course'
                name='f_Course'
                className='form-control'
                value={book.f_Course}
                onChange={onChange}
              />
              </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBookInfo;