import React from 'react';
import { CreateContextProvider } from './context/counter-context';
import { DeleteContextProvider } from './context/delete-item';
import { ModalContextProvider } from './context/modal-context';
import Router from './routes';
import * as S from './styles';

const App = () => {
  return (
    <S.MainWrapper>
      <CreateContextProvider>
        <ModalContextProvider>
          <DeleteContextProvider>
            <Router />
          </DeleteContextProvider>
        </ModalContextProvider>
      </CreateContextProvider>
    </S.MainWrapper>
  );
};

export default App;
