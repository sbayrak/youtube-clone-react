import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import MenuContext from '../../context/menu/MenuContext';
import VideoCard from '../reusable/VideoCard';
import VideoContext from '../../context/video/VideoContext';
import Skeleton from '../reusable/Skeleton';

const Home = () => {
  const menuContext = useContext(MenuContext);
  const videoContext = useContext(VideoContext);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  const SkeletonQuantity = (
    <>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
      <div className='col-3'>
        <Skeleton />
      </div>
    </>
  );

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
                  {videoContext.loading
                    ? SkeletonQuantity
                    : videoContext.videos.items.map((item, index) => (
                        <div className='col-3' key={index}>
                          <VideoCard item={item} />
                        </div>
                      ))}
                  {/* {videoContext.videos.length > 0 ? (
                    videoContext.videos.items.map((item, index) => (
                      <div className='col-3' key={index}>
                        <VideoCard item={item} />
                      </div>
                    ))
                  ) : (
                    <Skeleton />
                  )} */}
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
