import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='s_container'>
      <div className='s_wrapper'>
        {/* S_ROWS STARTS BELOW */}
        <div className='s_rows'>
          <div className='s_row'>
            <Link to='/' className='active'>
              <img src='./home.svg' alt='youtube_home' />
              <span className='active'>Home</span>
            </Link>

            <Link to='/'>
              <img src='./compass.svg' alt='youtube_explore' />
              <span>Explore</span>
            </Link>

            <Link to='/'>
              <img src='./subscriptions.svg' alt='youtube_subscriptions' />
              <span>Subscriptions</span>
            </Link>
          </div>
          <hr />

          <div className='s_row'>
            <Link to='/'>
              <img src='./library.svg' alt='youtube_library' />
              <span>Library</span>
            </Link>

            <Link to='/'>
              <img src='./history.svg' alt='youtube_history' />
              <span>History</span>
            </Link>

            <Link to='/'>
              <img src='./videos.svg' alt='youtube_videos' />
              <span>Your videos</span>
            </Link>

            <Link to='/'>
              <img src='./watchlater.svg' alt='youtube_watchlater' />
              <span>Watch later</span>
            </Link>

            <Link to='/'>
              <img src='./liked.svg' alt='youtube_liked' />
              <span>Liked videos</span>
            </Link>
          </div>
          <hr />
          <div className='s_row'>
            <span className='title'>SUBSCRIPTIONS</span>

            <Link to='/'>
              <img src='./account.svg' alt='youtube_account' />
              <span>ReactTutorials</span>
            </Link>

            <Link to='/'>
              <img src='./account.svg' alt='youtube_account' />
              <span>ReactTutorials</span>
            </Link>

            <Link to='/'>
              <img src='./account.svg' alt='youtube_account' />
              <span>ReactTutorials</span>
            </Link>

            <Link to='/'>
              <img src='./account.svg' alt='youtube_account' />
              <span>ReactTutorials</span>
            </Link>

            <Link to='/'>
              <img src='./account.svg' alt='youtube_account' />
              <span>ReactTutorials</span>
            </Link>
          </div>

          <hr />

          <div className='s_row'>
            <span className='title'>MORE FROM YOUTUBE</span>

            <Link to='/'>
              <img src='./videos.svg' alt='youtube_videos' />
              <span>YouTube Premium</span>
            </Link>

            <Link to='/'>
              <img src='./movie.svg' alt='youtube_videos' />
              <span>Movies & Shows</span>
            </Link>

            <Link to='/'>
              <img src='./gaming.svg' alt='youtube_gaming' />
              <span>Gaming</span>
            </Link>

            <Link to='/'>
              <img src='./live.svg' alt='youtube_live' />
              <span>Live</span>
            </Link>

            <Link to='/'>
              <img src='./learning.svg' alt='youtube_learning' />
              <span>Learning</span>
            </Link>

            <Link to='/'>
              <img src='./sport.svg' alt='youtube_sport' />
              <span>Sport</span>
            </Link>

            <hr />

            <Link to='/'>
              <img src='./settings.svg' alt='youtube_settings' />
              <span>Settings</span>
            </Link>

            <Link to='/'>
              <img src='./report.svg' alt='youtube_report' />
              <span>Report history</span>
            </Link>

            <Link to='/'>
              <img src='./help.svg' alt='youtube_help' />
              <span>Help</span>
            </Link>

            <Link to='/'>
              <img src='./feedback.svg' alt='youtube_feedback' />
              <span>Send feedback</span>
            </Link>
          </div>

          {/* S_ROWS ENDS BELOW */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
