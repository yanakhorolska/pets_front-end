import styled from 'styled-components';
import Icon from 'styles/Buttons/icons/index';

const AddButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.color.accent};
  border: 0;
  border-radius: ${p => p.theme.radii.borderRadius.round};
  cursor: pointer;

//   @media ${p => p.theme.media.tabletDesktop} {
//     width: 44px;
//     height: 44px;

//     &:hover,
//     &:focus {
//       transform: scale(1.05);
//     }
//     transition: transform 250ms ease-out;
//   }
`;

const AddButtonTitle = styled.span`
font-size: 20px;
  color: ${p => p.theme.color.black};
`

const AddButtonWrapper = styled.div`
display: flex;
width: 128px;
height: 40px;
gap: 12px;
align-items: baseline;

// //   @media ${p => p.theme.media.tabletDesktop} {
// //     // position: static;
// //     display: flex;
// //     gap: 12px;
// //     align-items: center;
// //     // top: auto;
// //     // right: auto;
// //   }
`;

const StyledIconAdd = styled(Icon.Add)`
  width: 16px;
  height: 16px;
//   position: absolute;
//   top: 10px;
//   left: 30px;

//   @media ${p => p.theme.media.tabletDesktop} {
//     position: relative;
//     // width: 16px;
//     // height: 16px;
//     top: auto;
//     left: auto;
//   }
`;

export { AddButtonStyled, AddButtonTitle, AddButtonWrapper, StyledIconAdd };
