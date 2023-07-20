import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems } from '../redux/books/booksSlice';
import Card from '../components/Card';
import AddBook from '../components/AddBook';

function Home() {
  const List = useSelector((state) => state.bookItems.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  return (
    <>
      { List ? List.map((item) => (
        <Card
          title={item.title}
          key={item.item_id}
          id={item.item_id}
          author={item.author}
          category={item.category}
        />
      )) : (
        <div>
          <h3>No Books</h3>
        </div>
      )}
      <div className="border-b-2 border-b-gray-200 pt-5" />
      <AddBook />
    </>
  );
}

export default Home;
