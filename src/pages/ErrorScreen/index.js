import React from 'react';
import { useNavigate } from 'react-router';
import Template from '../../template';
import { Button } from '../../components/atoms/Button';
import * as S from './styles';

const ErrorScreen = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <S.ErrorWrapper>
        <S.Title>Couldn’t load the counters</S.Title>
        <S.SubTitle>The Internet connection appears to be offline.</S.SubTitle>
        <Button kind="raised" color="white" onClick={() => navigate('/')}>
          Retry
        </Button>
      </S.ErrorWrapper>
    </Template>
  );
};

export default ErrorScreen;
