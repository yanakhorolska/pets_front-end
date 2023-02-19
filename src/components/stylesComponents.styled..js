import styled from 'styled-components';

export const Container = styled('div')`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 319px) {
    max-width: 320px;
  }
  @media (min-width: 320px) {
    width: 320px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  } ;
`;

export const LoginHeaderButton = styled('button')``;

export const registrationHeaderButton = styled('div')``;

export const FirstHeader = styled('h1')`
  font-family: 'Manrope', 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.36;
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const MainHeader = styled('h1')`
  font-family: 'Manrope', 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.37;
  @media (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const SearchField = styled('input')``;
