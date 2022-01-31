import React, { useContext } from 'react';
import { ModalContext } from '../../../context/modal-context';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import { Button } from '../../atoms/Button';
import * as S from './styles';

const Popup = () => {
  const [modal] = useContext(ModalContext);

  const howManyButtons = (isSingleButton) => {
    if (isSingleButton) {
      return <Button kind="raised">Dismiss</Button>;
    }
    return (
      <>
        <Button kind="raised">Cancel</Button>
        <Button kind="raised" color="danger">
          Delete
        </Button>
      </>
    );
  };

  if (modal !== null && modal?.isOpen) {
    return (
      <S.PopupBackground isModalOpened={modal?.isOpen}>
        <S.PopupWrapper>
          <Title title={modal?.title} fontSize="22px" fontWeight="600" textAlign="center" />
          <SubTitle subtitle={modal?.subtitle} />

          <S.ButtonWrapper isSingleButton={modal?.isSingleButton}>
            {howManyButtons(modal?.isSingleButton)}
          </S.ButtonWrapper>
        </S.PopupWrapper>
      </S.PopupBackground>
    );
  }
  return null;
};

export default Popup;
