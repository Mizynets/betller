import t from './actionsTypes';

export const initialState = {
  activeComponent: [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false },
    { id: 11, active: false },
    { id: 12, active: false },
  ],
  isShow: true,
};

export const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case t.NEXT:
      return {
        ...state,
        activeComponent: payload,
      };
    case t.PREV:
      return {
        ...state,
        activeComponent: payload,
      };
    case t.SKIP:
      return {
        ...state,
        isShow: payload,
      };
    default:
      return state;
  }
};
