import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(400px / 5);
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.getRandomColor()};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.secondaryText};
  margin-bottom: ${props => props.theme.space[5]}px;

  text-transform: uppercase;
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.white};
`;
