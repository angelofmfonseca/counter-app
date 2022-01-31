import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  padding: 10px;
  ${({ isSelectedItem }) =>
    css`
      background: ${isSelectedItem && 'rgba(255, 149, 0, 0.2)'};
      border-radius: ${isSelectedItem && '6px'};
    `}
`;

export const ListItem = styled.span`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonUI = styled.div`
  ${({ disabled }) =>
    css`
      ${disabled &&
      css`
        pointer-events: none;
      `}
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const CounterQuantity = styled.div`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
