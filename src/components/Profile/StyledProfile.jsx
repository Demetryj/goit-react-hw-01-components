import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
`;

export const Avatar = styled.img`
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Name = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.heading};
  line-height: ${props => props.theme.lineHeights.heading};
  color: ${props => props.theme.colors.primaryText};
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const Tag = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const Location = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
`;

export const List = styled.ul`
  display: flex;
  border-top: ${props => props.theme.borders.normal};
  border-top-color: ${props => props.theme.colors.borderColor};
  background: ${props => props.theme.colors.backgroundStat};
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  &:not(:last-child) {
    border-right: ${props => props.theme.borders.normal};
    border-right-color: ${props => props.theme.colors.borderColor};
  }
`;

export const Label = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
`;

export const Quantity = styled.span`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.primaryText};
`;
