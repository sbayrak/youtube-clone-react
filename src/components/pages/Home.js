import React, { useContext } from 'react';
import Sidebar from '../layout/Sidebar';
import MenuContext from '../../context/menu/MenuContext';

const Home = () => {
  const menuContext = useContext(MenuContext);

  return (
    <div className='h_container'>
      <div className='h_wrapper'>
        <div className={`h_sidebar${menuContext.menuOpen ? ' active' : ''}`}>
          <Sidebar></Sidebar>
        </div>

        <div className={`h_main${menuContext.menuOpen ? ' active' : ''}`}>
          <div className='home'>
            <p>Home page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
