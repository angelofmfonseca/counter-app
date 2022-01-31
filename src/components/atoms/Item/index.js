import React from 'react';
import * as S from './styles';

const Item = ({ title, onClick }) => {
  return <S.CountName onClick={onClick}>{title}</S.CountName>;
};

export default Item;
