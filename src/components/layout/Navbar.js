import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='n_container'>
        <div className='container'>
          <div className='row n_row'>
            <div className='col-2'>
              <button className='n_button'>
                <img src='/menu.svg' alt='youtube_menu' width='30' />
              </button>
              <Link to='/'>
                <img src='./yt-icon.svg' alt='youtube_icon' width='125' />
              </Link>
            </div>
            <div className='col-1'></div>
            <div className='col-6'>
              <div className='n_search-wrapper'>
                <div className='n_search'>
                  <input
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                    aria-describedby='basic-addon1'
                  />
                  <button>
                    <img src='./search.svg' alt='youtube_search' />
                  </button>
                  {/* <div className='results'>
                    <div className='wrapper'>
                      <Link to='/'>
                        RESULT <span>match</span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                      <Link to='/'>
                        RESULT <span></span>
                      </Link>
                    </div>
                  </div> */}
                </div>
                <button className='n_search_mic'>
                  <img src='./mic.svg' alt='youtube_mic' />
                </button>
              </div>
            </div>
            <div className='col-1'></div>

            <div className='col-2 n_right'>
              <div className='left'>
                <button>
                  <img src='./camera.svg' alt='youtube.svg' />
                </button>
                <button>
                  <img src='./apps.svg' alt='youtube_apps' />
                </button>
                <button>
                  <img src='./bell.svg' alt='youtube_notifications' />
                </button>
              </div>
              <div className='right'>
                <button>
                  <img src='./account2.svg' alt='youtube_account' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
