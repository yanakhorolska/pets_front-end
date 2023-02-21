import styled from 'styled-components';

import loginWavesMob1x from '../../images/bgs/login-waves-mob-1x.png';
import loginWavesMob2x from '../../images/bgs/login-waves-mob-2x.png';
import loginWavesTab1x from '../../images/bgs/login-waves-tab-1x.png';
import loginWavesTab2x from '../../images/bgs/login-waves-tab-2x.png';
import loginWavesDesk1x from '../../images/bgs/login-waves-desk-1x.png';
import loginWavesDesk2x from '../../images/bgs/login-waves-desk-2x.png';

export const AuthContainer = styled.div`
    max-width: 100vw;
    min-height: calc(100vh - 117px)
    background-image: url(${loginWavesMob1x});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;


    @media (min-width: 768px) {
        min-height: calc(100vh - 144px);
        background-image: url(${loginWavesTab1x});
    }

    @media (min-width: 1280px) {
        min-height: calc(100vh - 15px);
        background-image: url(${loginWavesDesk1x});
    }

`;

//     @include mq(mob) {
//       @include mq(retina) {
//         background-image: url('../../images/bgs/login-waves-mob-2x.png');
//       }
//     }
//       @include mq(retina) {
//         background-image: url('../../images/bgs/login-waves-tab-2x.png');
//       }
//     }
//       @include mq(retina) {
//         background-image: url('../../images/bgs/login-waves-desk-2x.png');
//       }
//     }
//   }
