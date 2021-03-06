
import React, {createContext, useReducer} from 'react';

const initialState = {
   user: '',
   parent: '',
   bookingId: '',
   location: '',
   userData: '',
   firstName: '',
   signature: '',
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
           bookingId: action.bookingId,
           firstName:  action.firstName,
           location: action.location
        };

        case 'setUserData':
          return {
             ...state,
             userData: action.userData,
          };

        case 'setParent':
          return {
             ...state,
             parent: action.parent
          };

          case 'resetState':
            return {
              user: '',
              parent: '',
              bookingId: '',
              userData: '',
              signature: '',
            };
        
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }