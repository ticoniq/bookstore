import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const { body } = document;
    body.setAttribute('data-theme', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <section className={darkMode ? 'dark' : ''}>
        <div className="text-black flex flex-col justify-between bg-gray-100 dark:bg-gray-900">
          <Header dark={handleDarkMode} />
          <main className="container mx-auto px-3 py-5 lg:px-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </section>
    </Router>
  );
}

export default App;
