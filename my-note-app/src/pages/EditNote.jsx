import React from 'react';
import { Link } from 'react-router-dom'; // Correct import, ensure this is not grayed out
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EditNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"> {/* Use the Link component here */}
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger">
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea rows="28" placeholder="Note details"></textarea>
      </form>
    </section>
  );
};

export default EditNote;