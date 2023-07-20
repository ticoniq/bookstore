import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  return (
    <>
      <BookList />
      <div className="border-b-2 border-b-gray-200 pt-5" />
      <AddBook />
    </>
  );
}

export default Home;
