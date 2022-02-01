import styled from 'styled-components';

export const TooltipBox = styled.div`
  height: 120px;
  width: 250px;
  box-shadow: 10px 24px 38px rgba(0, 0, 0, 0.2);
  background: #fafafa;
  position: absolute;
  bottom: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px;
`;

export const TooltipTriangle = styled.div`
  width: 0;
  border-top: 20px solid #fafafa;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 40px;
  left: 100px;
`;
