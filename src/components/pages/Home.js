import React from 'react';
import Sidebar from '../layout/Sidebar';

const Home = () => {
  return (
    <div className='h_container'>
      <div className='h_wrapper'>
        <div className='h_sidebar'>
          <Sidebar></Sidebar>
        </div>

        <div className='h_main'>
          <div className='home'>
            <p>Home page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
