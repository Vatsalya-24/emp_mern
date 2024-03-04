import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = ({book}) => {

  return (
    <div className='card-container'>
      <img
        src='image.png'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.f_Name}</Link>
        </h2>
        <h3>{book.f_Designation}</h3>
        <h3>{book.f_Mobile}</h3>
      </div>
    </div>
  );
};

export default BookCard;