import React from 'react';
import WelcomeScreen from './pages/WelcomeScreen';

// const getCounters = () => fetch('/api/v1/counter', { method: 'get' }).then((res) => res.json());

const App = () => {
  // const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert();
  // const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  // React.useEffect(() => {
  //   getCounters().then(console.log, console.error);
  // }, []);

  return (
    <main style={{ padding: '32px' }}>
      <WelcomeScreen />
    </main>
  );
};

export default App;
