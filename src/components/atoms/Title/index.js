import React from 'react';
import * as S from './styles';

const Title = ({ title, fontSize, fontWeight }) => {
  return (
    <S.TitleText fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </S.TitleText>
  );
};

export default Title;
