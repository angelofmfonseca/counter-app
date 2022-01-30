import React, { useState } from 'react';
import { Button } from '../components/atoms/Button';
import { IncrementIcon } from '../assets/Icons';
import Search from '../components/molecules/Search';
import CreateScreen from '../components/organisms/CreateScreen';
import * as S from './styles';

const Template = ({ children, searchFilter }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <S.TemplateWrapper>
      <Search searchFilter={searchFilter} />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      <S.AddCounterWrapper>
        <Button onClick={() => setIsModalOpened(true)}>
          <IncrementIcon fill="var(--white)" />
        </Button>
      </S.AddCounterWrapper>
      <CreateScreen isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </S.TemplateWrapper>
  );
};

export default Template;
