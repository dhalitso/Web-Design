import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct import, ensure this is not grayed out
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';

import useCreateDate from '../components/useCreateDate';


const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details) {
      const Note = {id: uuid(), title, details, date}
      console.log(Note);

    }

    
  }

    return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"> {/* Use the Link component here */}
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
        <button className="btn danger">
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={{handleSubmit}}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}autoFocus />
        <textarea rows="28" placeholder="Note details..."  value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote;
