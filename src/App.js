import React from 'react';
import { CreateContextProvider } from './context/counter-context';
import { SelectedContextProvider } from './context/selected-item';
import { ModalContextProvider } from './context/modal-context';
import Router from './routes';
import * as S from './styles';
import { StateContextProvider } from './context/state-context';

const App = () => {
  return (
    <S.MainWrapper>
      <StateContextProvider>
        <CreateContextProvider>
          <ModalContextProvider>
            <SelectedContextProvider>
              <Router />
            </SelectedContextProvider>
          </ModalContextProvider>
        </CreateContextProvider>
      </StateContextProvider>
    </S.MainWrapper>
  );
};

export default App;
