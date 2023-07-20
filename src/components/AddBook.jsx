import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [btnDissable, setBtnDissable] = useState(true);
  const [message, setMessage] = useState('');

  const names = [
    'John',
    'Jane',
    'Michael',
    'Emily',
    'David',
    'Sarah',
    'Matthew',
    'Olivia',
    'Daniel',
    'Sophia',
    'James',
    'Isabella',
    'William',
    'Ava',
    'Ethan',
    'Mia',
    'Benjamin',
    'Amelia',
    'Alexander',
    'Harper',
  ];

  function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

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
    // const newId = uuidv4();
    if (text.trim().length > 2) {
      const newTodo = {
        id: uuidv4(),
        title: text,
        author: getRandomName(),
        category,
      };

      dispatch(addNewBook(newTodo));
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
            className="py-2 px-4 w-full bg-white shadow-lg"
          />
        </div>
        <div className="inline-block w-full md:w-7/12">
          <select onChange={handleCategory} className="py-2 text-gray-400 bg-white w-full px-2 shadow-lg">
            <option value="Catigories">Catigories</option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <button type="submit" disabled={btnDissable} className="w-full md:w-5/12 bg-blue-500 py-2 text-white rounded-md hover:bg-blue-700 shadow-lg">Add</button>
      </form>
      {message && <div className="messages text-center mt-3">{message}</div>}
    </div>
  );
}

export default AddBook;
