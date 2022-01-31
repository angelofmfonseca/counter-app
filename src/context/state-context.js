import React, { useState, createContext } from 'react';

export const StateContext = createContext([{ get: true, loading: false }, () => {}]);

export const StateContextProvider = ({ children }) => {
  const [state, setState] = useState({ get: true, loading: false });

  return <StateContext.Provider value={[state, setState]}>{children}</StateContext.Provider>;
};
