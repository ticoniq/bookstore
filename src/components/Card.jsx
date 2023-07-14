/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

function Card({
  category, name, deleteBook, director, completed, chapter,
}) {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white my-4 py-6 px-5">
      <div className="flex flex-wrap gap-5 lg:flex-wrap justify-between">
        <div className="font-robotoSlab">
          <p className="text-gray-500 font-bold font-montserrat">{category}</p>
          <h2 className="text-2xl my-2 font-bold">{name}</h2>
          <a href="#" className="text-blue-500">{director}</a>
          <ul className="flex mt-4 text-blue-500">
            <a href="#">Comments</a>
            <a href="#" className="border-l-blue-500 border-r-blue-500 border-l-2 border-r-2 px-3 mx-3" onClick={deleteBook}>Remove</a>
            <a href="#">Edit</a>
          </ul>
        </div>
        <div className="flex gap-8 justify-between overflow-hidden">
          <div className="flex gap-2 justify-start items-center ">
            <div className="w-20 h-20 border-gray-200 border-t-blue-600 border-r-blue-600 border-b-blue-600  rounded-full border-6 rotate-45 bg-none none" />
            <div>
              <h2 className="text-4xl">{completed}</h2>
              <p className="text-gray-400">Completed</p>
            </div>
          </div>
          <div className="border-r-2 border-gray-200" />
          <div className="font-robotoSlab">
            <p className="uppercase text-gray-400">Current chapter</p>
            <p className="my-3">{chapter}</p>
            <a className=" text-white uppercase bg-blue-500 rounded-l py-1.5 text-sm px-4">update progress</a>
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
