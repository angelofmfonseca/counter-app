import styled, { css } from 'styled-components';

export const SearchWrapper = styled.section`
  padding-bottom: 5px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const CancelWrapper = styled.div`
  ${({ focus }) => css`
    display: ${focus ? 'flex' : 'none'};
    margin-left: ${focus && '10px'};
  `}
`;
