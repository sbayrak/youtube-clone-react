import React from 'react';

const Skeleton = () => {
  return (
    <div className='skeleton_container'>
      <div className='skeleton_wrapper'>
        <div className='skeleton_thumbnail'>
          <img
            src='./skeleton_thumbnail.png'
            alt='youtube_skeleton_thumbnail'
            className='skeleton_thumbnail_img'
          />
        </div>
        <div className='skeleton_bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 g-0'>
                <img
                  src='./skeleton_bottom.png'
                  alt='youtube_skeleton_bottom'
                  className='skeleton_bottom_img'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
