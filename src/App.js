import React from 'react';
import { CreateContextProvider } from './context/counter-context';
import { SelectedContextProvider } from './context/selected-item';
import { ModalContextProvider } from './context/modal-context';
import Router from './routes';
import * as S from './styles';

const App = () => {
  return (
    <S.MainWrapper>
      <CreateContextProvider>
        <ModalContextProvider>
          <SelectedContextProvider>
            <Router />
          </SelectedContextProvider>
        </ModalContextProvider>
      </CreateContextProvider>
    </S.MainWrapper>
  );
};

export default App;
