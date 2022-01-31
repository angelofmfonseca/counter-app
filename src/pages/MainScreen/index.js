import React, { useState, useEffect, useContext } from 'react';
import Template from '../../template';
import { getCounter } from '../../services/api/get-counter';
import ManageScreen from '../../components/organisms/ManageScreen';
import { Loading } from '../../components/atoms/Loading';
import { Navigate } from 'react-router-dom';
import { StateContext } from '../../context/state-context';
import * as S from './styles';

const MainScreen = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [filterValue, setFilterValue] = useState([]);
  const [state, setState] = useContext(StateContext);

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
    if (state.get) {
      setLoading(true);
      getCounter()
        .then((count) => {
          setCount(count);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
          setState({ ...state, get: false });
        });
    }
  }, [state.get]);

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
