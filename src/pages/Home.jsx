// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import AddBook from '../components/AddBook';

function Home() {
  const { bookItems, count } = useSelector((book) => book.bookItems);
  if (count < 1) {
    return (
      <>
        <div className="h-screen">
          <p className="text-center ">Empty</p>
        </div>
        <AddBook />
      </>
    );
  }

  return (
    <>
      {bookItems.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          category={item.category}
        />
      ))}
      <div className="border-b-2 border-b-gray-200 pt-5" />
      <AddBook />
    </>
  );
}

export default Home;
