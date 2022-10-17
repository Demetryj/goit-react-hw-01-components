import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[7]}px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  width: 350px;
  background-color: ${props => props.theme.colors.backgroundMain};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  width: 300px;
  background-color: ${props => props.theme.colors.backgroundMain};
  border-radius: ${props => props.theme.borders.normal};
  box-shadow: ${props => props.theme.shadows.second};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    props.isOnline ? props.theme.colors.green : props.theme.colors.red};
  margin-right: ${props => props.theme.space[4]}px;
`;

export const NameFriend = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;

export const Avatar = styled.img`
  margin-right: ${props => props.theme.space[4]}px;
`;
