import styled from 'styled-components';
import Icon from 'styles/Buttons/icons/index';

const AddButtonStyled = styled.button`
//   width: 40px;
//   height: 40px;
//   background-color: ${p => p.theme.color.accent};
//   border: 0;
//   border-radius: ${p => p.theme.radii.borderRadius.round};
//   cursor: pointer;

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
// //   position: absolute;
// //   left: 10px;
// //   top: 40px;
//   color: ${p => p.theme.color.black};

//   pointer-events: none;

//   &:hover,
//   &:focus {
//     z-index: 1;
//   }

//   @media ${p => p.theme.media.tabletDesktop} {
//     position: static;
//     color: ${p => p.theme.color.text};
//   }
`;

const AddButtonWrapper = styled.div`
// display: flex;
// width: 128px;
// height: 40px;
//     gap: 12px;
//     align-items: center;
// //   position: fixed;
// //   right: 10px;
// //   top: 400px;

//   @media ${p => p.theme.media.tabletDesktop} {
//     // position: static;
//     display: flex;
//     gap: 12px;
//     align-items: center;
//     // top: auto;
//     // right: auto;
//   }
`;

const StyledIconAdd = styled(Icon.Add)`
//   width: 40px;
//   height: 40px;
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
