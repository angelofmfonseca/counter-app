import React from 'react';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import ListItem from '../../molecules/ListItem';
import ListTotal from '../../molecules/ListTotal';
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

const renderContent = (count) => {
  return (
    <S.ContentWrapper>
      <ListTotal count={count} />
      {count.map((eachCount) => (
        <ListItem key={eachCount.id} eachCount={eachCount} count={count} />
      ))}
    </S.ContentWrapper>
  );
};

const renderNoResults = () => {
  return (
    <S.NoResultsWrapper>
      <Title title="No Results" color=" #888B90" fontSize="22px" fontWeight="500" />
    </S.NoResultsWrapper>
  );
};

const ManageScreen = ({ list, count }) => {
  if (list === null) {
    <>{renderNoResults()}</>;
  }
  if (list?.length === 0) {
    return <>{renderNoContent()}</>;
  }
  if (count?.status === 200) {
    return <>{renderContent(list)}</>;
  }
  return null;
};

export default ManageScreen;
