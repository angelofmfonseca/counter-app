import React, { useState, useContext, useEffect } from 'react';
import ModalTop from '../../molecules/ModalTop';
import ModalContent from '../../molecules/ModalContent';
import { Loading } from '../../atoms/Loading';
import { CreateCounterContext } from '../../../context/counter-context';
import { postCounter } from '../../../services/api/post-counter';
import { ModalContext } from '../../../context/modal-context';
import * as S from './styles';

const CreateScreen = ({ isModalOpened, setIsModalOpened }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [addedItem, setAddedItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useContext(CreateCounterContext);
  const [, setModal] = useContext(ModalContext);

  useEffect(() => {
    if (item !== null) {
      setLoading(true);
      postCounter(item)
        .then(() => {
          setLoading(false);
          setItem(null);
          setIsModalOpened(false);
        })
        .catch(() => {
          setLoading(false);
          setModal({
            title: `Couldn’t create counter.`,
            subtitle: 'The Internet connection appears to be offline.',
            isOpen: true,
            isSingleButton: true
          });
        });
    }
  }, [item]);

  return (
    <S.ModalBackground isModalOpened={isModalOpened}>
      <S.ModalWrapper isModalOpened={isModalOpened}>
        <ModalTop
          setIsModalOpened={setIsModalOpened}
          isDisabledButton={isDisabledButton}
          addedItem={addedItem}
        />
        {!loading ? (
          <ModalContent setIsDisabledButton={setIsDisabledButton} setAddedItem={setAddedItem} />
        ) : (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        )}
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default CreateScreen;
