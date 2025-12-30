import { Routes, Route } from 'react-router-dom';
import GlobalPages from './pages/GlobalPagse';
import Layout from './layouts/Layouts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout cartCount={cartCount} />}>
        <Route index element={<GlobalPages setCartCount={setCartCount} />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
