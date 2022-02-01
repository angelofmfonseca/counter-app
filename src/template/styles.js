import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  @media (min-width: 600px) {
    width: 570px;
    margin: 0 auto;
    }
  @media (min-width: 900px) {
    width: 750px;
    margin: 0 auto;
    }
  }
`;

export const ChildrenWrapper = styled.section`
  overflow: auto;
  flex: 1 1 100%;
`;

export const AddCounterWrapper = styled.section`
  position: absolute;
  bottom: 15px;
  right: 15px;
  left: 15px;
  flex: 0 0 auto;
  padding-top: 20px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: ${({ isSelectedItem }) => (isSelectedItem ? 'space-between' : 'flex-end')};
`;

export const IconWrapper = styled.div`
  width: 71px;
  height: 40px;
  margin-left: 10px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  position: relative;
`;
