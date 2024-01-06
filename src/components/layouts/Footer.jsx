import { Link } from 'react-router-dom';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="font-montserrat bg-white shadow-lg text-primary-content text-center md:text-start dark:bg-teal-800">
      <div className="container mx-auto px-3 py-7 lg:px-40  flex flex-col justify-between items-center md:flex-row :mdlex-wrap">
        <Link to="/" className="text-3xl font-bold align-miffle text-blue-500">Bookstore CMS</Link>
        <p className="dark:text-white">
          Copyright &copy;
          {footerYear}
          {' '}
          All right reserve
        </p>
      </div>
    </footer>
  );
}

export default Footer;
