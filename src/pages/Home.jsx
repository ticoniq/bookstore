import { useState } from 'react';
import Card from '../components/Card';
import AddBook from '../components/AddBook';

function Home() {
  const [books, setBook] = useState([
    {
      id: 1,
      category: 'Action',
      name: 'The Hunger Games',
      director: 'Suzanne Collins',
      completed: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      name: 'Dune',
      director: 'Frank Herbert',
      completed: '8%',
      chapter: 'Chapter 3: A Lession',
    },
    {
      id: 3,
      category: 'Economy',
      name: 'Capital in the Century',
      director: 'Suzanne Collins',
      completed: '0%',
      chapter: 'Introduction',
    },
  ]);

  const addBook = (newBook) => {
    setBook([newBook, ...books]);
  };

  const handleDelete = (nid) => {
    setBook(books.filter((todo) => todo.id !== nid));
  };

  return (
    <>
      {books.map((todo) => (
        <Card
          key={todo.id}
          category={todo.category}
          name={todo.name}
          director={todo.director}
          completed={todo.completed}
          chapter={todo.chapter}
          deleteBook={() => handleDelete(todo.id)}
        />
      ))}
      <div className="border-b-2 border-b-gray-200 pt-5" />
      <AddBook handleAdd={addBook} />
    </>
  );
}

export default Home;
