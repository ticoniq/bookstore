import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from './Card';
import { fetchBooks } from '../redux/books/booksSlice';

function BookList() {
  const List = useSelector((state) => state.bookItems.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
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
    </>
  );
}

export default BookList;
