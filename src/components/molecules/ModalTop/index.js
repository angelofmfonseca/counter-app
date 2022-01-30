import React from 'react';
import { CloseIcon } from '../../../assets/Icons';
import { Button } from '../../atoms/Button';
import Title from '../../atoms/Title';
import * as S from './styles';

const ModalTop = ({ setIsModalOpened, isDisabledButton }) => {
  const enableButton = isDisabledButton ? '0.5' : '1';
  return (
    <S.Wrapper>
      <S.IconBackground onClick={() => setIsModalOpened(false)}>
        <CloseIcon fill="var(--white)" />
      </S.IconBackground>
      <Title title="Create counter" fontSize="22px" fontWeight="600" />
      <Button style={{ opacity: enableButton }}>Save</Button>
    </S.Wrapper>
  );
};

export default ModalTop;
