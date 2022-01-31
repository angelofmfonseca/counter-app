import React, { useState, createContext } from 'react';

export const ModalContext = createContext([false, () => {}]);

export const ModalContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return <ModalContext.Provider value={[state, setState]}>{children}</ModalContext.Provider>;
};
