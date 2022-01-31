import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
`;

export const ChildrenWrapper = styled.section`
  overflow: auto;
  flex: 1 1 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0 50px;
`;

export const AddCounterWrapper = styled.section`
  position: absolute;
  bottom: 15px;
  right: 15px;
  left: 15px;
  flex: 0 0 auto;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: ${({ isSelectedItem }) => (isSelectedItem ? 'space-between' : 'flex-end')};
`;

export const DeleteWrapper = styled.div``;
