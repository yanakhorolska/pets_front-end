import styled from 'styled-components';

import loginWavesMob1x from '../../images/bgs/login-waves-mob-1x.png';
import loginWavesMob2x from '../../images/bgs/login-waves-mob-2x.png';
import loginWavesTab1x from '../../images/bgs/login-waves-tab-1x.png';
import loginWavesTab2x from '../../images/bgs/login-waves-tab-2x.png';
import loginWavesDesk1x from '../../images/bgs/login-waves-desk-1x.png';
import loginWavesDesk2x from '../../images/bgs/login-waves-desk-2x.png';

export const AuthContainer = styled.div`
  max-width: 100vw;
  min-height: calc(100vh - 56px);
  background-image: url(${loginWavesMob1x});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (-moz-min-device-pixel-ratio: 2),
    screen and (-o-min-device-pixel-ratio: 2/1),
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${loginWavesMob2x});
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 64px);
    background-image: url(${loginWavesTab1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${loginWavesTab2x});
    }
  }

  @media (min-width: 1280px) {
    min-height: calc(100vh - 70px);
    background-image: url(${loginWavesDesk1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (-moz-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 2/1),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${loginWavesDesk2x});
    }
  }
`;
