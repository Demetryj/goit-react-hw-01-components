import styled from 'styled-components';

export const HeadRow = styled.th`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heding};
  color: ${props => props.theme.colors.secondaryText};

  text-transform: uppercase;
`;

export const BodyRow = styled.td`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
`;
