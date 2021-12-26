import React, { useState, useRef, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import MenuContext from '../../context/menu/MenuContext';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const bgRef = useRef();
  const menuContext = useContext(MenuContext);

  const mobileHandleSearchModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className='n_container'>
        {/* DESKTOP STARTS */}
        <div className='container desktop'>
          <div className='row n_row'>
            <div className='col-3 laptop-left'>
              <button
                className='n_button'
                onClick={() =>
                  menuContext.handleMenuChange(menuContext.menuOpen)
                }
              >
                <img src='/menu.svg' alt='youtube_menu' width='30' />
              </button>
              <Link to='/'>
                <img src='./yt-icon.svg' alt='youtube_icon' width='125' />
              </Link>
            </div>
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

            <div className='col-3 n_right'>
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
        {/* DESKTOP ENDS */}

        <div className='mobile'>
          <div className='container'>
            <div className='row g-1 align-items-center'>
              <div className='col-5'>
                <div className='logo'>
                  <Link to='/'>
                    <img src='./yt-icon.svg' alt='youtube_icon' width='125' />
                  </Link>
                </div>
              </div>

              <div className='col-4'>
                <div className='empty'></div>
              </div>

              <div className='col-3'>
                <div className='m_right'>
                  <button onClick={mobileHandleSearchModal}>
                    <img src='./search.svg' alt='youtube_search' />
                  </button>
                  <button>
                    <img src='./account2.svg' alt='youtube_account' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className='m_modal'
            style={{ display: `${openModal ? 'inline' : 'none'}` }}
            onClick={mobileHandleSearchModal}
            ref={bgRef}
          >
            <div className='m_wrapper'>
              <div className='container'>
                <div className='row top align-items-center'>
                  <div className='col-1'>
                    <div className='back'>
                      <button onClick={mobileHandleSearchModal}>
                        <img src='./back.svg' alt='youtube_back' />
                      </button>
                    </div>
                  </div>
                  <div className='col-8'>
                    <div className='m_search'>
                      <input
                        type='text'
                        placeholder='Search'
                        aria-label='Search'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='m_right'>
                      <button>
                        <img src='./search.svg' alt='youtube_search' />
                      </button>
                      <button className='n_search_mic'>
                        <img src='./mic.svg' alt='youtube_mic' />
                      </button>
                    </div>
                  </div>
                </div>

                <div className='row m_results'>
                  <Link to='/'>react tutorial</Link>

                  <Link to='/'>nodejs complete project</Link>

                  <Link to='/'>socket.io tutorial</Link>

                  <Link to='/'>python course</Link>

                  <Link to='/'>mern stack e-commerce</Link>

                  <Link to='/'>scss learn</Link>

                  <Link to='/'>nextjs ssr</Link>
                </div>
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
