import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='s_container'>
      <div className='s_wrapper'>
        <div className='s_row'>
          <ul>
            <li>
              <Link to='/'>
                <img src='./home.svg' alt='youtube_home' /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./compass.svg' alt='youtube_explore' />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./subscriptions.svg' alt='youtube_subscriptions' />
                <span>Subscriptions</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className='s_row'>
          <ul>
            <li>
              <Link to='/'>
                <img src='./library.svg' alt='youtube_library' />
                <span>library</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./history.svg' alt='youtube_history' />
                <span>history</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./videos.svg' alt='youtube_videos' />
                <span>videos</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./watchlater.svg' alt='youtube_watchlater' />
                <span>watchlater</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./liked.svg' alt='youtube_liked' /> <span>liked</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className='s_row'>
          <span>SUBSCRIPTIONS</span>
          <div className='subs'>
            <div className='sub'>
              <Link to='/'>
                <img src='./account.svg' alt='youtube_account' />
                <span>ReactTutorials</span>
              </Link>
            </div>
            <div className='sub'>
              <Link to='/'>
                <img src='./account.svg' alt='youtube_account' />
                <span>ReactTutorials</span>
              </Link>
            </div>
            <div className='sub'>
              <Link to='/'>
                <img src='./account.svg' alt='youtube_account' />
                <span>ReactTutorials</span>
              </Link>
            </div>
            <div className='sub'>
              <Link to='/'>
                <img src='./account.svg' alt='youtube_account' />
                <span>ReactTutorials</span>
              </Link>
            </div>
            <div className='sub'>
              <Link to='/'>
                <img src='./account.svg' alt='youtube_account' />
                <span>ReactTutorials</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='s_row'>
          <span>MORE FROM YOUTUBE</span>
          <ul>
            <li>
              <Link to='/'>
                <img src='./videos.svg' alt='youtube_videos' />
                <span>YouTube Premium</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./movie.svg' alt='youtube_videos' />
                <span>Movies & Shows</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./gaming.svg' alt='youtube_gaming' />
                <span>Gaming</span>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='./live.svg' alt='youtube_live' />
                <span>Live</span>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='./learning.svg' alt='youtube_learning' />
                <span>learning</span>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='./sport.svg' alt='youtube_sport' />
                <span>sport</span>
              </Link>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <Link to='/'>
                <img src='./settings.svg' alt='youtube_settings' />
                <span>settings</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./report.svg' alt='youtube_report' />
                <span>report</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./help.svg' alt='youtube_help' />
                <span>help</span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img src='./feedback.svg' alt='youtube_feedback' />
                <span>feedback</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
