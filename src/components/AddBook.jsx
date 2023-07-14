import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useState } from 'react';

function AddBook({ handleAdd }) {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [btnDissable, setBtnDissable] = useState(true);
  const [message, setMessage] = useState('');

  const handleText = (e) => {
    if (text === '') {
      setBtnDissable(true);
      setMessage(null);
    } else {
      setMessage(null);
      setBtnDissable(false);
    }
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    if (text === 'Catigories') {
      setBtnDissable(true);
      setMessage('Please select category');
    } else {
      setMessage(null);
      setBtnDissable(false);
    }
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 2) {
      const newTodo = {
        id: uuidv4(),
        category,
        name: text,
        director: 'Suzanne Collins',
        completed: '0%',
        chapter: 'Introduction',
      };

      handleAdd(newTodo);
      setMessage(null);
      setText('');
    } else {
      setMessage('Text must be at least 3 characters');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  return (
    <div className="py-5">
      <h2 className="text-2xl text-gray-500 font-bold">Add new book</h2>
      <form className="py-5 flex gap-5 flex-col justify-between items-center md:flex-row :mdlex-wrap" onSubmit={handleSubmit}>
        <div className="w-full">
          <input
            type="text"
            onChange={handleText}
            value={text}
            placeholder="Book title"
            className="py-2 px-4 w-full"
          />
        </div>
        <div className="inline-block w-full md:w-7/12">
          <select onChange={handleCategory} className="py-2 text-gray-400 w-full px-2">
            <option value="Catigories">Catigories</option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <button type="submit" disabled={btnDissable} className="w-full md:w-5/12 bg-blue-500 py-2 text-white rounded-l hover:bg-blue-700">Add</button>
      </form>
      {message && <div className="messages text-center mt-3">{message}</div>}
    </div>
  );
}

AddBook.defaultProps = {
  handleAdd: () => {},
};

AddBook.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddBook;
