import { GET_VIDEOS, ERROR_POPULAR_VID, LOADING } from '../types';
import VideoReducer from './VideoReducer';
import VideoContext from './VideoContext';
import { useReducer } from 'react';

const initialState = {
  videos: [],
  error: {},
  loading: true,
};

const VideoState = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const getPopularVideos = async () => {
    const fetchData = await fetch(`${process.env.REACT_APP_POPULAR_VID}`);
    const data = await fetchData.json();

    // dispatch({ type: LOADING, payload: false });
    // if (data.error) dispatch({ type: ERROR_POPULAR_VID, payload: data.error });
    // else if (data.items) dispatch({ type: GET_VIDEOS, payload: data });

    if (data.error) {
      dispatch({ type: ERROR_POPULAR_VID, payload: data.error });
      dispatch({ type: LOADING, payload: false });
    } else if (data.items) {
      dispatch({ type: GET_VIDEOS, payload: data });
      dispatch({ type: LOADING, payload: false });
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        error: state.error,
        loading: state.loading,
        getPopularVideos,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoState;
