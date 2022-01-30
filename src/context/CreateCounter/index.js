import React, { useState, createContext } from 'react';

export const CreateCounterContext = createContext([false, () => {}]);
export const LoadingContext = createContext([false, () => {}]);

export const CreateContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <CreateCounterContext.Provider value={[state, setState]}>
      {children}
    </CreateCounterContext.Provider>
  );
};
