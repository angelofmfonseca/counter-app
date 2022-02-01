import React, { useEffect, useState } from 'react';
import { Input } from '../../atoms/Input';
import SearchIcon from '../../../assets/Icons/SearchIcon';
import { Button } from '../../atoms/Button';
import { useDebounce } from '../../../services/hooks/useDebounce';
import * as S from './styles';

const Search = ({ searchFilter }) => {
  const [focus, setFocus] = useState(false);
  const [term, setTerm] = useState('');

  const delay = !term ? 0 : 200;

  const debouncedValue = useDebounce(term, delay);

  useEffect(() => {
    searchFilter(debouncedValue);
  }, [debouncedValue]);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <S.SearchWrapper>
      <S.InputWrapper>
        <S.IconWrapper>
          <SearchIcon fill="var(--grey)" />
        </S.IconWrapper>
        <Input
          value={term}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Search Counters"
          style={{ paddingLeft: '40px' }}
        />
      </S.InputWrapper>
      <S.CancelWrapper focus={focus}>
        <Button
          onClick={() => setTerm('')}
          kind="raised"
          color="white"
          style={{
            background: '#FBFBFB',
            color: 'var(--black)',
            fontWeight: 600,
            fontZise: '17px',
            height: '44px'
          }}>
          Cancel
        </Button>
      </S.CancelWrapper>
    </S.SearchWrapper>
  );
};

export default Search;
