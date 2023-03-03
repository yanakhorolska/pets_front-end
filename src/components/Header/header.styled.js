import styled from 'styled-components';

export const Head = styled('header')`
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-diracion: row;

  align-items: center;
  justify-content: space-between;
  @media ${p => p.theme.media.tabletDesktop} {
    padding-top: 24px;
  }
  @media (min-width: 1280px) {
    padding-top: 20px;
    height: 70px;
  }
`;

export const HeadNav = styled('div')`
 @media (min-width: 1280px) {
  display: flex;
  flex-diracion: row;
  align-items: center;
}
`;
export const BurgerMenu = styled('div')`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.color.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 17px;

  flex-direction: column;
  @media ${p => p.theme.media.tabletDesktop} {
    padding-top: 26px;
  }

  @media ${p => p.theme.media.desktop} {
    display:none;
  }
`;
export const BurgerLinks = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 46px;
`;
export const ToggleButtonBurg = styled('button')`
  fill: ${p => p.theme.color.text};
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid transparent;
 
  @media ${p => p.theme.media.tabletDesktop} {
    margin-left: 20px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const MenuHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonsContainer = styled('div')`
  display: none;
  @media ${p => p.theme.media.tabletDesktop} {
    display: block;
  }
`;
export const HeaderWrap = styled('div')`
  display: flex;
  align-items: center;
`;
export const BurgerLinksWrap = styled('div')`
  @media ${p => p.theme.media.tabletDesktop} {
    display: none;
  }
`;
