import { GET_VIDEOS, ERROR_POPULAR_VID } from '../types';
import VideoReducer from './VideoReducer';
import VideoContext from './VideoContext';
import { useReducer } from 'react';

const initialState = {
  videos: [],
  error: {},
};

const VideoState = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const getPopularVideos = async () => {
    const fetchData = await fetch(`${process.env.REACT_APP_POPULAR_VID}`);
    const data = await fetchData.json();

    if (data.error) dispatch({ type: ERROR_POPULAR_VID, payload: data.error });
    else if (data.items) dispatch({ type: GET_VIDEOS, payload: data });
  };

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        error: state.error,
        getPopularVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoState;
