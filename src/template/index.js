import React from 'react';
import { Input } from '../components/atoms/Input';
import { Button } from '../components/atoms/Button';
import { IncrementIcon } from '../assets/Icons';
import * as S from './styles';

const Template = ({ children }) => {
  return (
    <S.TemplateWrapper>
      <S.SearchWrapper>
        <Input />
      </S.SearchWrapper>
      {children}
      <S.AddCounterWrapper>
        <Button>
          <IncrementIcon fill="var(--white)" />
        </Button>
      </S.AddCounterWrapper>
    </S.TemplateWrapper>
  );
};

export default Template;
