import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondaryText};

  text-transform: uppercase;
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
`;

export const Percentage = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
`;
