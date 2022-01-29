import React, { useState } from 'react';
import Item from '../../atoms/Item';
import Number from '../../atoms/Number';
import IncrementIcon from '../../../assets/Icons/IncrementIcon';
import DecrementIcon from '../../../assets/Icons/DecrementIcon';
import ListTotal from './components/ListTotal';
import * as S from './styles';

const List = ({ count, numberOfCounters }) => {
  const [counter, setCounter] = useState(numberOfCounters);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <ListTotal count={count} />
      {count.map(({ id, title }) => (
        <S.ListWrapper key={id}>
          <S.ListItem>
            <Item title={title} />
            <S.CounterQuantity>
              <S.ButtonUI onClick={handleDecrement}>
                <DecrementIcon fill="var(--app-tint)" />
              </S.ButtonUI>
              <Number count={counter} />
              <S.ButtonUI onClick={handleIncrement}>
                <IncrementIcon fill="var(--app-tint)" />
              </S.ButtonUI>
            </S.CounterQuantity>
          </S.ListItem>
        </S.ListWrapper>
      ))}
    </>
  );
};

export default List;
