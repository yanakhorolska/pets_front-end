import styled from 'styled-components';

export const RegisterError = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: #f59256;
  letter-spacing: 0.04em;
  padding: 5px 15px;

  @media (max-width: 767px) {
    height: 28px;
    padding: 0px 15px;
  }
`;

export const RegisterErrorLast = styled.p`
  height: 20px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: #f59256;
  letter-spacing: 0.04em;
  padding: 5px 15px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    height: 28px;
    padding: 0px 15px;
    margin-bottom: 12px;
  }
`;
