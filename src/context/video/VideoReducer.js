import { GET_VIDEOS, ERROR_POPULAR_VID, LOADING } from '../types';

const VideoReducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case ERROR_POPULAR_VID:
      return {
        ...state,
        error: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      break;
  }
};

export default VideoReducer;
