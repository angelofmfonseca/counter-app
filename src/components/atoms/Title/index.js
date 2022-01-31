import React from 'react';
import * as S from './styles';

const Title = ({ textAlign, color, title, fontSize, fontWeight }) => {
  return (
    <S.TitleText textAlign={textAlign} color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {title}
    </S.TitleText>
  );
};

export default Title;
