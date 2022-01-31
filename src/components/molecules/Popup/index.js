import React, { useContext } from 'react';
import { ModalContext } from '../../../context/modal-context';
import { SelectedContext } from '../../../context/selected-item';
import { deleteCounter } from '../../../services/api/delete-counter';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import { Button } from '../../atoms/Button';
import { StateContext } from '../../../context/state-context';
import * as S from './styles';

const Popup = () => {
  const [modal, setModal] = useContext(ModalContext);
  const [selectedItem, setSelectedItem] = useContext(SelectedContext);
  const [state, setState] = useContext(StateContext);

  const handleDelete = () => {
    deleteCounter(selectedItem?.id)
      .then(() => {
        setModal({ isOpen: false });
        setSelectedItem(null);
      })
      .catch(() => {
        setModal({
          title: `Couldn’t delete "${modal?.title}"`,
          subtitle: 'The Internet connection appears to be offline.',
          isOpen: true
        });
      })
      .finally(() => {
        setState({ ...state, get: true });
      });
  };

  const handleCancel = () => {
    setModal({ isOpen: false });
    setSelectedItem(null);
  };

  const howManyButtons = (isSingleButton) => {
    if (isSingleButton) {
      return (
        <Button kind="raised" onClick={handleCancel}>
          Dismiss
        </Button>
      );
    }
    return (
      <>
        <Button kind="raised" onClick={handleCancel}>
          Cancel
        </Button>
        <Button kind="raised" color="danger" onClick={handleDelete}>
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
