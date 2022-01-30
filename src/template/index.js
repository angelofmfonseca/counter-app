import React, { useState } from 'react';
import { Button } from '../components/atoms/Button';
import { IncrementIcon, TrashBinIcon } from '../assets/Icons';
import Search from '../components/molecules/Search';
import CreateScreen from '../components/organisms/CreateScreen';
import * as S from './styles';

const Template = ({ children, searchFilter, isSelectedItem = true }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <S.TemplateWrapper>
      <Search searchFilter={searchFilter} />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
      <S.AddCounterWrapper>
        <S.BottomWrapper>
          {isSelectedItem ? (
            <S.DeleteWrapper onClick={''}>
              <Button color="white">
                <TrashBinIcon fill="var(--destructive-red)" />
              </Button>
            </S.DeleteWrapper>
          ) : null}
          <Button onClick={() => setIsModalOpened(true)}>
            <IncrementIcon fill="var(--white)" />
          </Button>
        </S.BottomWrapper>
      </S.AddCounterWrapper>
      <CreateScreen isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </S.TemplateWrapper>
  );
};

export default Template;
