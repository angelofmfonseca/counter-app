import styled, { css } from 'styled-components';

export const SearchWrapper = styled.section`
  padding-bottom: 5px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 15px;
`;

export const CancelWrapper = styled.div`
  ${({ focus }) => css`
    display: ${focus ? 'flex' : 'none'};
    margin-left: ${focus && '10px'};
  `}
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (min-width: 600px) {
    width: 380px;
  }
`;
