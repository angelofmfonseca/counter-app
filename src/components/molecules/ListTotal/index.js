import React from 'react';
import { getTotalTimes } from '../../../utils/get-total-times';
import * as S from './styles';

const ListTotal = ({ count }) => {
  return (
    <S.TotalWrapper>
      <S.TotalItems>{count?.length} items</S.TotalItems>
      <S.TotalCounters>{getTotalTimes(count)} times</S.TotalCounters>
    </S.TotalWrapper>
  );
};

export default ListTotal;
