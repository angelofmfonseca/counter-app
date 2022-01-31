import React, { useContext, useState } from 'react';
import { ModalContext } from '../../../context/modal-context';
import { SelectedContext } from '../../../context/selected-item';
import { deleteCounter } from '../../../services/api/delete-counter';
import Title from '../../atoms/Title';
import SubTitle from '../../atoms/SubTitle';
import { Button } from '../../atoms/Button';
import * as S from './styles';

const Popup = () => {
  const [, setLoading] = useState(false);
  const [modal, setModal] = useContext(ModalContext);
  const [selectedItem, setSelectedItem] = useContext(SelectedContext);

  const handleDelete = () => {
    deleteCounter(selectedItem?.id)
      .then(() => {
        setLoading(true);
        setModal({ isOpen: false });
        setSelectedItem(null);
      })
      .catch(() => {
        setLoading(false);
        setModal({
          title: `Couldn’t delete "${modal?.title}"`,
          subtitle: 'The Internet connection appears to be offline.',
          isOpen: true
        });
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
