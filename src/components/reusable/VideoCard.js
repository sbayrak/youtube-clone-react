import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ item }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const moreVertical = (
    <ul>
      <li>
        <Link to='/'>
          <img src='./addqueue.svg' alt='youtube_add_queue' />{' '}
          <span>Add to queue</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <img src='./watchlater.svg' alt='youtube_watch_later' />{' '}
          <span>Save to Watch later</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <img src='./playlistsave.svg' alt='youtube_playlist_save' />{' '}
          <span>Save to playlist</span>
        </Link>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <Link to='/'>
          <img src='./notinterested.svg' alt='youtube_not_interested' />{' '}
          <span>Not interested</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <img src='./dontrecommend.svg' alt='youtube_dont_recommend' />{' '}
          <span>Don't recommend channel</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <img src='./report.svg' alt='youtube_report' /> <span>Report</span>
        </Link>
      </li>
    </ul>
  );
  return (
    <div className='v_container'>
      <div className='v_wrapper'>
        <div className='v_card'>
          <div className='v_img'>
            <Link to={`/watch?v=${item.id}`}>
              <img
                src='./thumbnail.jpg'
                alt='youtube_thumbnail'
                className='thumbnail'
              />

              {/* <div className='hoverItems'>
                <div className='item'>
                  <span className='s_hover'>WATCH LATER</span>
                  <img src='./watchlater_white.svg' alt='youtube_watchlater' />
                </div>
                <div className='item'>
                  <span className='s_hover'>ADD TO QUEUE</span>
                  <img src='./library_white.svg' alt='youtube_library' />
                </div>
              </div> */}

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
                    <Link to='/'>{item.snippet.title}</Link>
                  </div>
                </div>
                <div className='col-2 d-flex justify-content-center align-content-center position-relative'>
                  <div className='v_dropdown'>
                    <button
                      className='v_btn-dropdown'
                      onClick={() => setOpenDropdown(!openDropdown)}
                    >
                      <img src='./morevert.svg' alt='youtube_morevert' />
                    </button>
                    {openDropdown && moreVertical}
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-2'></div>
                <div className='col-10 bottomTypo'>
                  <Link to='/'>{item.snippet.channelTitle}</Link>
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
