import { Routes, Route } from 'react-router-dom';
import GlobalPages from './pages/GlobalPagse';
import Layout from './layouts/Layouts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // длительность анимации в миллисекундах
      once: true,     // анимация срабатывает только один раз
    });
  }, []); // пустой массив, чтобы инициализация была один раз при монтировании

  return (
    <Routes>
      <Route path="/" element={<Layout cartCount={cartCount} />}>
        <Route index element={<GlobalPages setCartCount={setCartCount} />} />
      </Route>
    </Routes>
  );
};

export default App;
