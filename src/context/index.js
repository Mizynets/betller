import React, { useContext, createContext } from 'react';
import { initialState, rootReducer } from './reducer';
import contextProviderFactory from './contextProviderFactory';

export const RootContext = createContext(initialState);
export const useRootContext = () => useContext(RootContext);

const RawRootProvider = contextProviderFactory(RootContext);

export const RootProvider = ({ children }) => (
  <RawRootProvider initialState={initialState} reducer={rootReducer}>
    {children}
  </RawRootProvider>
);
