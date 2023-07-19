import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/books/booksSlice';

function Card({
  id, author, title, category,
}) {
  const dispatch = useDispatch();

  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white my-4 py-10 md:py-5 px-5">
      <div className="flex flex-col mx-auto space-y-5 md:space-y-0 md:flex-row md:justify-between">
        <div className="font-robotoSlab md:w-1/2">
          <p className="text-gray-500 font-bold font-montserrat">{category}</p>
          <h2 className="text-2xl my-2 font-bold">{title}</h2>
          <p className="text-blue-500">{author}</p>
          <ul className="flex mt-4 text-blue-500">
            <button type="button" href="#">Comments</button>
            <button
              type="button"
              className="border-l-blue-500 border-r-blue-500 border-l-2 border-r-2 px-3 mx-3"
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              Remove
            </button>
            <button type="button" href="#">Edit</button>
          </ul>
        </div>
        <div className="flex gap-x-2 gap-5 justify-between flex-col space-y-0 md:w-1/2 items-center md:flex-row">
          <div className="flex flex-row gap-2 justify-start items-center ">
            <div className="w-16 h-16 border-gray-200 border-t-blue-600 border-r-blue-600 border-b-blue-600  rounded-full border-6 rotate-45 bg-none none" />
            <div>
              <h2 className="text-4xl">30%</h2>
              <p className="text-gray-400">Completed</p>
            </div>
          </div>
          <div className="inline-block w-0.5 self-stretch bg-neutral-200 opacity-200 dark:opacity-50" />
          <div className="font-robotoSlab">
            <p className="uppercase text-gray-400 mt-0">Current chapter</p>
            <p className="my-3">Chapter 1</p>
            <button type="button" className="p-2 px-3 pt-2 text-white bg-blue-500 baseline rounded-md uppercase text-sm hover:bg-blue-700 md:text-md">update progress</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  id: 'item_1',
  category: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
};

Card.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Card;
