import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import MenuContext from '../../context/menu/MenuContext';

const Home = () => {
  const menuContext = useContext(MenuContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    });
  }, [window.innerWidth]);
  console.log(screenWidth);

  return (
    <div className='h_container'>
      <div className='h_wrapper'>
        <div
          className={`h_sidebar${menuContext.menuOpen ? ' active' : ''}`}
          style={{ width: `${screenWidth < 500 ? '0%' : '15%'}` }}
        >
          <Sidebar></Sidebar>
        </div>

        <div
          className={`h_main${menuContext.menuOpen ? ' active' : ''}`}
          style={{ width: `${screenWidth < 500 && '100%'}` }}
        >
          <div className='home'>
            <p>Home page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
