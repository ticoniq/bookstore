import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

function Header({ dark }) {
  return (
    <>
      <nav className="navbar bg-white dark:bg-teal-900 shadow-lg">
        <div className="container px-3 mx-auto flex justify-between items-center py-7 lg:px-20">
          <div className="flex gap-11">
            <Link to="/" className="text-3xl font-bold align-miffle text-blue-500">
              Bookstore CMS
            </Link>
            <ul className="flex items-center gap-8 uppercase dark:text-white">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn hover:text-gray-500">Books</Link>
              <Link to="/categories" className="btn btn-ghost btn-sm rounded-btn hover:text-gray-500">Categories</Link>
            </ul>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <BsFillMoonStarsFill className="cursor-pointer dark:text-white" onClick={dark} />
            <div className="p-2 border-gray-200 rounded-full border-2 bg-none none">
              <FaUser className="text-blue-500" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  dark: () => {},
};

Header.propTypes = {
  dark: PropTypes.func,
};

export default Header;
