import React, { useState, useContext, useEffect } from 'react';
import ModalTop from '../../molecules/ModalTop';
import ModalContent from '../../molecules/ModalContent';
import { Loading } from '../../atoms/Loading';
import { CreateCounterContext } from '../../../context/CreateCounter';
import { postCounter } from '../../../services/api/post-counter';
import * as S from './styles';

const CreateScreen = ({ isModalOpened, setIsModalOpened }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [addedItem, setAddedItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useContext(CreateCounterContext);

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
