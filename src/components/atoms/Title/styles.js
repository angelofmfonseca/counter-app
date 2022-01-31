import styled, { css } from 'styled-components';

export const TitleText = styled.span`
  ${({ fontSize, fontWeight, color, textAlign }) =>
    css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      text-align: ${textAlign};
      color: ${color};
    `}
  line-height: 30px;
`;
