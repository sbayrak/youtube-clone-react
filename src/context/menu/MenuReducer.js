import { MENU } from '../types';

const MenuReducer = (state, action) => {
  switch (action.type) {
    case MENU:
      return {
        ...state,
        menuOpen: !action.payload,
      };

    default:
      break;
  }
};

export default MenuReducer;
