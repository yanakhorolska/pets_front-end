import styled from 'styled-components';
import Icon from 'styles/Buttons/icons/index';

const AddButtonStyled = styled.button`
  z-index:3;

  position: fixed;
 
  font-size: 12px;
  line-height:1.33;

  right: 10px;
  top: 400px;

  width: 80px;
  height: 80px;
  background-color: ${p => p.theme.color.accent};
  border: 0;
  border-radius: ${p => p.theme.radii.borderRadius.round};
  cursor: pointer;

  @media ${p => p.theme.media.tabletDesktop} {
    position: static;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    top: auto;
    right: auto;

    width: 44px;
    height: 44px;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
    transition: transform 250ms ease-out;
  }
`;

const AddSpanText = styled.span`
  display:none;
  @media ${p => p.theme.media.tabletDesktop} {
   display:block;
   margin-right: 12px;

   font-size: 20px;
    line-height: 1.35;
  }
`

const AddButtonText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  font-family: 'Manrope';
  color:${p => p.theme.color.white};
  @media ${p => p.theme.media.tabletDesktop} {
    display:none;
   }

`

const AddButtonWrapper = styled.div`
   

  @media ${p => p.theme.media.tabletDesktop} {
   display:inline-flex;
   align-items: center;
  }
`;

const StyledIconAdd = styled(Icon.Add)`
  width: 22px;
  height: 22px;
 // position: absolute;
  top: 10px;
  left: 30px;

  @media ${p => p.theme.media.tabletDesktop} {
    //position: relative;
    width: 16px;
    height: 16px;
    top: auto;
    left: auto;
  }
`;

export { AddButtonStyled, StyledIconAdd , AddButtonText, AddButtonWrapper, AddSpanText};
