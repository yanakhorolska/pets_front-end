import styled from 'styled-components';
import Picture from '../../images/nointerne.png';

export const Box = styled.div`
  margin: 0 auto;
  min-height: 300px;
  max-width: 500px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  text-align: center;
`;
export const Img = styled.div`
  min-height: 300px;
  max-width: 500px;
  background: url(${Picture});
  bacground-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
