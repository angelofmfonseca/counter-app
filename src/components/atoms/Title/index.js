import React from 'react';
import * as S from './styles';

const Title = ({ color, title, fontSize, fontWeight }) => {
  return (
    <S.TitleText color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </S.TitleText>
  );
};

export default Title;
