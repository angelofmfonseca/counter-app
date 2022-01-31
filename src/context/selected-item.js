import React, { useState, createContext } from 'react';

export const SelectedContext = createContext([false, () => {}]);

export const SelectedContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return <SelectedContext.Provider value={[state, setState]}>{children}</SelectedContext.Provider>;
};
