import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowBookDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/books/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };

  const BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
        <tr>
    <th scope='row'>1</th>
    <td>Employee ID</td>
    <td>{book.f_Id}</td>
</tr>
    <tr>
        <th scope='row'>2</th>
        <td>Name</td>
        <td>{book.f_Name}</td>
    </tr>
    <tr>
        <th scope='row'>3</th>
        <td>Email</td>
        <td>{book.f_Email}</td>
    </tr>
    <tr>
        <th scope='row'>4</th>
        <td>Mobile</td>
        <td>{book.f_Mobile}</td>
    </tr>
    <tr>
        <th scope='row'>5</th>
        <td>Designation</td>
        <td>{book.f_Designation}</td>
    </tr>
    <tr>
        <th scope='row'>6</th>
        <td>Gender</td>
        <td>{book.f_gender}</td>
    </tr>
    <tr>
        <th scope='row'>7</th>
        <td>Course</td>
        <td>{book.f_Course}</td>
    </tr>
    <tr>
        <th scope='row'>8</th>
        <td>Joining Date</td>
        <td>{book.f_Createdate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Employee's Record</h1>
            <p className='lead text-center'>View Employee's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{BookItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(book._id);
              }}
            >
              Delete 
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-book/${book._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBookDetails;