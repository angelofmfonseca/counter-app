import styled, { css } from 'styled-components';

export const ModalBackground = styled.section`
  position: fixed;
  z-index: 2;
  ${({ isModalOpened }) => css`
    animation: ${isModalOpened ? 'fadeIn' : 'fadeOut'} 0.8s;
    background: ${isModalOpened ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'};
    ${isModalOpened &&
    css`
      display: block;
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

export const ModalWrapper = styled.div`
  background: #fff;
  overflow-y: auto;
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100% - 15px);
  transition: transform 0.45s cubic-bezier(0, 0, 0.3, 1);
  will-change: transform;
  transform: translate3d(0, 100%, 0);
  border-radius: 16px 16px 0px 0px;
  ${({ isModalOpened }) => isModalOpened && 'transform: translate3d(0, 0, 0)'};
  @media (min-width: 600px) {
    width: 485px;
    height: 612px;
    border-radius: 16px;
    left: 50%;
    top: 50%;
    transform: translate3d(0, 100%, 0);
    ${({ isModalOpened }) => isModalOpened && 'transform: translate(-50%, -50%)'}
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;
