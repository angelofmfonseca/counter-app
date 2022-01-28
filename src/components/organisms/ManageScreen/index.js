import React from 'react';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import * as S from './styles';

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

const ManageScreen = ({ count }) => {
  if (count?.length === 0) {
    return <>{renderNoContent()}</>;
  }
  return;
};

export default ManageScreen;
