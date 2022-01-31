import React, { useState, createContext } from 'react';

export const DeleteContext = createContext([false, () => {}]);

export const DeleteContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return <DeleteContext.Provider value={[state, setState]}>{children}</DeleteContext.Provider>;
};
