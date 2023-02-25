import styled from 'styled-components';

export const LearnMoreBtn = styled.button`
 
  padding: 8px 79px;
  background: ${p => p.theme.color.secondatyBtnText};
  border: 2px solid ${p => p.theme.color.accent};
  border-radius: 40px;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  color: ${p => p.theme.color.accent};

  &:hover {
    color: ${p => p.theme.color.hoverBtn};
    border: 2px solid  ${p => p.theme.color.hoverBtn};
  }
`;
