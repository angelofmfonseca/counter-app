import React from 'react';
import Router from './routes';
import * as S from './styles';

// const getCounters = () => fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
  // const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert();
  // const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  // React.useEffect(() => {
  //   getCounters().then(console.log, console.error);
  // }, []);

  return (
    <S.MainWrapper>
      <Router />
    </S.MainWrapper>
  );
};

export default App;
