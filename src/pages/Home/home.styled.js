import styled from 'styled-components';
import bgWomanDesk1 from '../../images/bgs/home-woman-desk-1x.png';
import bgWomanDesk2 from '../../images/bgs/home-woman-desk-2x.png';
import bgWomanTab1 from '../../images/bgs/home-woman-tab-1x.png';
import bgWomanTab2 from '../../images/bgs/home-woman-tab-2x.png';
import bgWomanMob1 from '../../images/bgs/home-woman-mob-1x.png';
import bgWomanMob2 from '../../images/bgs/home-woman-mob-1x.png';

import bgTabl1 from '../../images/bgs/home-waves-tab-1x.png';
import bgMob1 from '../../images/bgs/home-waves-mob-1x.png';
import bgDesk1 from '../../images/bgs/home-waves-desk-1x.png';
import bgTabl2 from '../../images/bgs/home-waves-tab-2x.png';
import bgMob2 from '../../images/bgs/home-waves-mob-2x.png';
import bgDesk2 from '../../images/bgs/home-waves-desk-2x.png';

export const HomeStyled = styled('section')`
  height: calc(100vh - 56px);
  background-image: url(${bgMob1});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100vw;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (-moz-min-device-pixel-ratio: 2),
    screen and (-o-min-device-pixel-ratio: 2/1),
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgMob2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgTabl1});
    height: calc(100vh - 64px);
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgTabl2});
    }
  }
  @media (min-width: 1280px) {
    background-image: url(${bgDesk1});
    background-size: 100vw;
    height: calc(100vh - 70px);
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesk2});
    }
  }
`;
export const HomeImg = styled('div')`
  width: 100%;
  //height:100%;
  height: 56vh;
  align-self: center;
  background-image: url(${bgWomanMob1});
  background-repeat: no-repeat;
  background-size: contain;

  background-position: bottom;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (-moz-min-device-pixel-ratio: 2),
    screen and (-o-min-device-pixel-ratio: 2/1),
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgWomanMob2});
  }
  @media (min-width: 768px) {
    background-image: url(${bgWomanTab1});
    height: 60vh;

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgWomanTab2});
    }
  }
  @media (min-width: 1280px) {
    background-image: url(${bgWomanDesk1});
    height: 100%;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgWomanDesk2});
    }
  }
`;

export const HomeText = styled('h2')`
  color: ${p => p.theme.color.text};
  font-weight: 700;
  font-size: 32px;
  line-height: 1.38;
  max-width: 280px;
  margin-top: 60px;

  @media (min-width: 768px) {
    align-self: flex-start;
    max-width: 588px;
    margin-top: 88px;
    text-align: left;
    font-size: 68px;
    line-height: 1.47;
  }
  @media (min-width: 1280px) {
    margin-top: 92px;
  }
`;

export const BoxHome = styled('div')`
  display: flex;
 
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: calc(100vh - 56px);
  @media (min-width: 768px) {
    height: calc(100vh - 64px);
   
  @media (min-width: 1280px) {
    height: calc(100vh - 70px);
    flex-direction: row;
  }
`;
