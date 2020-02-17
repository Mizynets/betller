
import t from './actionsTypes';

export const nextStep = (dispatch, payload) => dispatch({ type: t.NEXT, payload });

export const prevStep = (dispatch, payload) => dispatch({ type: t.PREV, payload });

export const skiStep = (dispatch, payload) => dispatch({ type: t.SKI, payload });
