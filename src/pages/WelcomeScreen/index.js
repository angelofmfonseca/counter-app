import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Button } from '../../components/atoms/Button';
import * as S from './styles';

const WelcomeScreen = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.TextWrapper>
        <S.Title>Welcome to Counters</S.Title>
        <S.SubTitle>
          Capture cups of lattes, frapuccinos, or anything else that can be counted.
        </S.SubTitle>
      </S.TextWrapper>
      <Button kind="raised">Get Started</Button>
    </S.Wrapper>
  );
};

export default WelcomeScreen;
