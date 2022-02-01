import React, { useState, useContext } from 'react';
import { Button } from '../../atoms/Button';
import Title from '../../atoms/Title';
import { SelectedContext } from '../../../context/selected-item';
import * as S from './styles';

const ShareTooltip = () => {
  const [selectedItem] = useContext(SelectedContext);
  const [copied, setCopy] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedItem?.title);
    setCopy(`Counter copied`);
  };

  return (
    <>
      <S.TooltipBox>
        <Title
          title="Share counter"
          textAlign="center"
          color="#000"
          fontSize="22px"
          fontWeight="600"
        />
        <Button kind="raised" color="white" onClick={copyToClipboard}>
          {copied ? copied : 'Copy'}
        </Button>
      </S.TooltipBox>
      <S.TooltipTriangle></S.TooltipTriangle>
    </>
  );
};

export default ShareTooltip;
