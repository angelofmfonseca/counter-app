import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import MainScreen from './pages/MainScreen';
import ErrorScreen from './pages/ErrorScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
