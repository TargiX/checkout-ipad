
import React, {createContext, useReducer} from 'react';

const initialState = {
   user: '',
   parent: '',
   bookingId: ''
   
};


const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'setBookingData':
        return {
           ...state,
           user: action.user,
           bookingId: action.bookingId
        };

        case 'setParent':
          return {
             ...state,
             parent: action.parent
          };
        
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }