import styled from 'styled-components';
import Icon from 'styles/Buttons/icons/index';

const AddButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.color.accent};
  border: 0;
  border-radius: ${p => p.theme.radii.borderRadius.round};
  cursor: pointer;
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
    transition: transform 250ms ease-out;

`;

const AddButtonTitle = styled.span`
  font-size: 20px;
  color: ${p => p.theme.color.text};
`;

const AddButtonWrapper = styled.div`
display: flex;
width: 128px;
height: 40px
gap: 12px;
align-items: baseline;
justify-content: space-between;

`;

const StyledIconAdd = styled(Icon.Add)`
  width: 16px;
  height: 16px;
  
`;

export { AddButtonStyled, AddButtonTitle, AddButtonWrapper, StyledIconAdd };
