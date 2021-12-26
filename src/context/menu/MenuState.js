import MenuContext from './MenuContext';
import { MENU } from '../types';
import { useReducer } from 'react';
import MenuReducer from './MenuReducer';

const initialState = {
  menuOpen: false,
};

const MenuState = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);

  const handleMenuChange = (currentState) => {
    dispatch({
      type: MENU,
      payload: currentState,
    });
  };

  return (
    <MenuContext.Provider
      value={{
        menuOpen: state.menuOpen,
        handleMenuChange,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuState;
