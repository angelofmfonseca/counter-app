import React from 'react';
import { Button } from '../components/atoms/Button';
import { IncrementIcon } from '../assets/Icons';
import Search from '../components/molecules/Search';
import * as S from './styles';

const Template = ({ children, searchFilter }) => {
  return (
    <S.TemplateWrapper>
      <Search searchFilter={searchFilter} />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      <S.AddCounterWrapper>
        <Button>
          <IncrementIcon fill="var(--white)" />
        </Button>
      </S.AddCounterWrapper>
    </S.TemplateWrapper>
  );
};

export default Template;
