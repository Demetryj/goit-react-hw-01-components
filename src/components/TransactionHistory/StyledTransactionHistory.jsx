import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-spacing: ${props => props.theme.space[0]}px;
  box-shadow: ${props => props.theme.shadows.second};
`;

export const HeadCell = styled.th`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.heding};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;

  text-align: center;
  background-color: ${props => props.theme.colors.background};
  padding: 10px;
  height: 20px;
  :not(:last-child) {
    border-right: ${props => props.theme.borders.normal};
    border-color: ${props => props.theme.colors.white};
  }
`;

export const BodyRow = styled.tr`
  :nth-child(even) {
    background-color: ${props => props.theme.colors.backgroundStat};
  }

  :nth-child(odd) {
    background-color: ${props => props.theme.colors.backgroundMain};
  }
`;

export const BodyCell = styled.td`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.body};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.secondaryText};
  :first-child {
    text-transform: capitalize;
  }

  min-width: 200px;
  text-align: center;
  padding: 10px;
  height: 20px;

  :not(:first-child) {
    border-left: ${props => props.theme.borders.normal};
    border-bottom: ${props => props.theme.borders.normal};
    border-color: ${props => props.theme.colors.borderColor};
  }
`;

// https://idg.net.ua/blog/uchebnik-css/ispolzovanie-css/stili-dlya-tablits
