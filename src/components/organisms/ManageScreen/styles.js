import styled from 'styled-components';

export const NoContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40%;
  transform: translateY(-50%);
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const NoResultsWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
