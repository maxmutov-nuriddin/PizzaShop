import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({cartCount}) => {
   return (
      <div>
         <Header cartCount={cartCount} />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
