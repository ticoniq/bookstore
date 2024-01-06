import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function Home() {
  return (
    <div className="mt-36">
      <BookList />
      <div className="border-b-2 border-b-gray-200 pt-5" />
      <AddBook />
    </div>
  );
}

export default Home;
