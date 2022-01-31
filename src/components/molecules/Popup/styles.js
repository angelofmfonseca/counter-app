import styled, { css } from 'styled-components';

export const PopupBackground = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  ${({ isModalOpened }) => css`
    animation: ${isModalOpened ? 'fadeIn' : 'fadeOut'} 0.8s;
    background: ${isModalOpened ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'};
    ${isModalOpened &&
    css`
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    `};
  `}
  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.6);
    }
  }
  @keyframes fadeOut {
    0% {
      background: rgba(0, 0, 0, 0.6);
    }
    100% {
      background: rgba(0, 0, 0, 0);
    }
  }
`;

export const PopupWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background: #fff;
  z-index: 3;
  width: 310px;
  height: 210px;
  transition: transform 0.45s cubic-bezier(0, 0, 0.3, 1);
  will-change: transform;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  ${({ isSingleButton }) => css`
    justify-content: ${isSingleButton ? 'center' : 'space-evenly'};
  `}
`;
