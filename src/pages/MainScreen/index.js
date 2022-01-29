import React, { useState, useEffect } from 'react';
import Template from '../../template';
import { getCounter } from '../../services/get-counter';
import ManageScreen from '../../components/organisms/ManageScreen';

const MainScreen = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    getCounter()
      .then((count) => {
        return setCount(count);
      })
      .catch((error) => {
        return setError(error);
      })
      .finally(() => {
        return setLoading(false);
      });
  }, []);

  return (
    <Template>
      <ManageScreen count={count} loading={loading} error={error} />
    </Template>
  );
};

export default MainScreen;
