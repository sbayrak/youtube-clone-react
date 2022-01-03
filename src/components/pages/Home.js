import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import MenuContext from '../../context/menu/MenuContext';
import VideoCard from '../reusable/VideoCard';
import VideoContext from '../../context/video/VideoContext';

const Home = () => {
  const menuContext = useContext(MenuContext);
  const videoContext = useContext(VideoContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [data, setData] = useState({});

  useEffect(() => {
    videoContext.getPopularVideos();
  }, []);
  console.log(videoContext);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    });

    if (screenWidth < 500) menuContext.handleMenuChange(menuContext.menuOpen);
  }, [window.innerWidth]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  //     );

  //     const result2 = await result.json();
  //     setData(result2);
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <div className='h_container'>
      <div className='h_wrapper'>
        <div
          className={`h_sidebar${menuContext.menuOpen ? ' active' : ''}`}
          style={{
            width: `${
              screenWidth < 500
                ? menuContext.menuOpen
                  ? '5%'
                  : '0%'
                : menuContext.menuOpen
                ? '5%'
                : '15%'
            }`,
          }}
        >
          <Sidebar></Sidebar>
        </div>

        <div
          className={`h_main${menuContext.menuOpen ? ' active' : ''}`}
          style={{
            width: `${
              screenWidth < 500
                ? menuContext.menuOpen
                  ? '95%'
                  : '100%'
                : menuContext.menuOpen
                ? '95%'
                : '85%'
            }`,
          }}
        >
          <div className='home'>
            <p>Home page</p>
            <div className='v_root'>
              <div className='container-fluid gx-4'>
                <div className='row gx-3 my-5'>
                  <div className='col-3'>
                    <VideoCard></VideoCard>
                  </div>
                  <div className='col-3'>
                    <VideoCard></VideoCard>
                  </div>
                  <div className='col-3'>
                    <VideoCard></VideoCard>
                  </div>
                  <div className='col-3'>
                    <VideoCard></VideoCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
