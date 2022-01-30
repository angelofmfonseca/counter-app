import React from 'react';
import Title from '../../atoms/Title';
import { Input } from '../../atoms/Input';
import * as S from './styles';

const ModalContent = ({ setIsDisabledButton }) => {
  return (
    <S.Wrapper>
      <Title title="Name" fontSize="17px" fontWeight="500" />
      <Input placeholder="Cups of coffee" onChange={() => setIsDisabledButton(false)} />
      <S.ExampleLink>Give it a name. Creative block? See examples.</S.ExampleLink>
    </S.Wrapper>
  );
};

export default ModalContent;
