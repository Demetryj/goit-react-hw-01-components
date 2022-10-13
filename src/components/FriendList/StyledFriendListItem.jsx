import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    props.isOnline ? props.theme.colors.green : props.theme.colors.red};
`;

export const NameFriend = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;
