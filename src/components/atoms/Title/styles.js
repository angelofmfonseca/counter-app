import styled, { css } from 'styled-components';

export const TitleText = styled.span`
  ${({ fontSize, fontWeight }) =>
    css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `}
  line-height: 30px;
  margin-bottom: 20px;
`;
