import React, { useState } from 'react';
import Item from '../../atoms/Item';
import Number from '../../atoms/Number';
import IncrementIcon from '../../../assets/Icons/IncrementIcon';
import DecrementIcon from '../../../assets/Icons/DecrementIcon';
import { postIncrementCounter } from '../../../services/api/post-increment-counter';
import { postDecrementCounter } from '../../../services/api/post-decrement-counter';
import * as S from './styles';

const List = ({ eachCount }) => {
  const [counter, setCounter] = useState(eachCount.count);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      postDecrementCounter(eachCount.id);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    postIncrementCounter(eachCount.id);
  };

  return (
    <>
      <S.ListWrapper>
        <S.ListItem>
          <Item title={eachCount.title} />
          <S.CounterQuantity>
            <S.ButtonUI onClick={handleDecrement}>
              <DecrementIcon fill={counter > 0 ? '#ff9500' : '#dcdcdf'} />
            </S.ButtonUI>
            <Number count={counter} />
            <S.ButtonUI onClick={handleIncrement}>
              <IncrementIcon fill="var(--app-tint)" />
            </S.ButtonUI>
          </S.CounterQuantity>
        </S.ListItem>
      </S.ListWrapper>
    </>
  );
};

export default List;
