import React from 'react';
import { Navigate } from 'react-router-dom';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import { Loading } from '../../atoms/Loading';
import List from '../../molecules/List';
import * as S from './styles';
import { getCounterInitialValue } from '../../../utils/get-counter-initial-value';

const renderNoContent = () => {
  return (
    <S.NoContentWrapper>
      <Title title="No counters yet" fontSize="22px" fontWeight="600" />
      <SubTitle
        subtitle="'When I started counting my blessings, my whole life turned around.'
          —Willie Nelson"
        fontSize="17px"
      />
    </S.NoContentWrapper>
  );
};

const renderLoading = () => {
  return (
    <S.LoadingWrapper>
      <Loading />
    </S.LoadingWrapper>
  );
};

const renderContent = (count, numberOfCounters) => {
  return (
    <S.ContentWrapper>
      <List count={count} numberOfCounters={numberOfCounters} />
    </S.ContentWrapper>
  );
};

const ManageScreen = ({ count, loading }) => {
  if (count?.data?.length === 0) {
    return <>{renderNoContent()}</>;
  }
  if (loading) {
    return <>{renderLoading()}</>;
  }
  if (count?.status !== 200 && count !== null) {
    return <Navigate to="/error" />;
  }
  if (count?.status === 200) {
    const numberOfCounters = getCounterInitialValue(count?.data);
    return <>{renderContent(count?.data, numberOfCounters)}</>;
  }
  return null;
};

export default ManageScreen;
