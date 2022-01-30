import React, { useState } from 'react';
import ModalTop from '../../molecules/ModalTop';
import ModalContent from '../../molecules/ModalContent';
import * as S from './styles';

const CreateScreen = ({ isModalOpened, setIsModalOpened }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  return (
    <S.ModalBackground isModalOpened={isModalOpened}>
      <S.ModalWrapper isModalOpened={isModalOpened}>
        <ModalTop setIsModalOpened={setIsModalOpened} isDisabledButton={isDisabledButton} />
        <ModalContent setIsDisabledButton={setIsDisabledButton} />
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default CreateScreen;
