import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = () => {
  return (
    <div className='v_container'>
      <div className='v_wrapper'>
        <div className='v_card'>
          <div className='v_img'>
            <Link to='/'>
              <img
                src='./thumbnail.jpg'
                alt='youtube_thumbnail'
                className='thumbnail'
              />

              <div className='hoverItems'>
                <img src='./watchlater.svg' alt='youtube_watchlater' />
                <img src='./library.svg' alt='youtube_library' />
              </div>

              <span>10:59</span>
            </Link>
          </div>
          <div className='v_title'>
            <div className='container'>
              <div className='row d-flex justify-content-center align-content-center'>
                <div className='col-2 channelLogo'>
                  <Link to='/'>
                    <img src='./account2.svg' alt='youtube_account' />
                  </Link>
                </div>
                <div className='col-8'>
                  <div className='title'>
                    <Link to='/'>ReactJS Tutorial Full Project</Link>
                  </div>
                </div>
                <div className='col-2 d-flex justify-content-center align-content-center'>
                  <div className='card-dropdown'>
                    <div className='dropdown me-1'>
                      <button
                        type='button'
                        className='btn btn-secondary dropdown-toggle'
                        id='dropdownMenuOffset'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                        data-bs-offset='10,20'
                      ></button>
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuOffset'
                      >
                        <li>
                          <a className='dropdown-item' href='#'>
                            Action
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-2'></div>
                <div className='col-10 bottomTypo'>
                  <Link to='/'>Nick's Strength and Power</Link>
                </div>
                <div className='col-2'></div>
              </div>
              <div className='row'>
                <div className='col-2'></div>
                <div className='col-10 bottomTypo'>
                  <Link to='/'>3.5K views • 5 hours ago</Link>
                </div>
                <div className='col-2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
