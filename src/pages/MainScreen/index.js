import React, { useState, useEffect } from 'react';
import Template from '../../template';
import { getCounter } from '../../services/get-counter';
import ManageScreen from '../../components/organisms/ManageScreen';

const MainScreen = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    getCounter().then((count) => {
      return setCount(count);
    });
  }, []);

  return (
    <Template>
      <ManageScreen count={count} />
    </Template>
  );
};

export default MainScreen;
