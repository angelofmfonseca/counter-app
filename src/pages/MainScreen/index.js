import React, { useState, useEffect } from 'react';
import Template from '../../template';
import { getCounter } from '../../services/api/get-counter';
import ManageScreen from '../../components/organisms/ManageScreen';
import { Loading } from '../../components/atoms/Loading';
import { Navigate } from 'react-router-dom';
import * as S from './styles';

const MainScreen = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [filterValue, setFilterValue] = useState([]);

  const searchFilter = (value) => {
    if (count !== null) {
      const regexSearch = new RegExp(value, 'gi');
      const filter = count?.data.filter(({ title }) => title.match(regexSearch) !== null);
      setFilterValue(filter?.length === 0 ? null : filter);
    }
  };

  useEffect(() => {
    setFilterValue(count?.data);
  }, [count]);

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

  if (count?.status !== 200 && count !== null) {
    return <Navigate to="/error" />;
  }
  if (loading) {
    return (
      <Template>
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      </Template>
    );
  }
  return (
    <Template searchFilter={searchFilter}>
      <ManageScreen list={filterValue} count={count} loading={loading} error={error} />
    </Template>
  );
};

export default MainScreen;
