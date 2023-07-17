/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

function Card({
  category, name, deleteBook, director, completed, chapter,
}) {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white my-4 py-10 md:py-5 px-5">
      <div className="flex flex-col mx-auto space-y-5 md:space-y-0 md:flex-row md:justify-between">
        <div className="font-robotoSlab md:w-1/2">
          <p className="text-gray-500 font-bold font-montserrat">{category}</p>
          <h2 className="text-2xl my-2 font-bold">{name}</h2>
          <a href="#" className="text-blue-500">{director}</a>
          <ul className="flex mt-4 text-blue-500">
            <a href="#">Comments</a>
            <a href="#" className="border-l-blue-500 border-r-blue-500 border-l-2 border-r-2 px-3 mx-3" onClick={deleteBook}>Remove</a>
            <a href="#">Edit</a>
          </ul>
        </div>
        <div className="flex gap-x-2 justify-between flex-row space-y-0 md:w-1/2 items-center">
          <div className="flex flex-row gap-2 justify-start items-center ">
            <div className="w-16 h-16 border-gray-200 border-t-blue-600 border-r-blue-600 border-b-blue-600  rounded-full border-6 rotate-45 bg-none none" />
            <div>
              <h2 className="text-4xl">{completed}</h2>
              <p className="text-gray-400">Completed</p>
            </div>
          </div>
          <div className="inline-block w-0.5 self-stretch bg-neutral-200 opacity-200 dark:opacity-50" />
          <div className="font-robotoSlab">
            <p className="uppercase text-gray-400 mt-0">Current chapter</p>
            <p className="my-3">{chapter}</p>
            <a className="p-3 px-6 pt-2 text-white bg-blue-500 baseline rounded-md uppercase text-sm hover:bg-blue-700 md:text-md">update progress</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  category: 'Action',
  name: 'The Hunger Games',
  director: 'Suzanne Collins',
  completed: '64%',
  chapter: 'Chapter 17',
  deleteBook: () => {},
};

Card.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  director: PropTypes.string,
  completed: PropTypes.string,
  chapter: PropTypes.string,
  deleteBook: PropTypes.func,
};

export default Card;
