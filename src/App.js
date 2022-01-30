import React from 'react';
import { CreateContextProvider } from './context/CreateCounter';
import Router from './routes';
import * as S from './styles';

const App = () => {
  return (
    <S.MainWrapper>
      <CreateContextProvider>
        <Router />
      </CreateContextProvider>
    </S.MainWrapper>
  );
};

export default App;
