import styled from '@emotion/styled'
import bgMob from '../../images/bgs/home-waves-mob-1x.png'
import bgTab from '../../images/bgs/home-waves-tab-1x.png'
import bgDesk from '../../images/bgs/home-waves-desk-1x.png'
export const HomeStyled = styled('div')`
    background-image: url(${bgMob});
    background-position: bottom;
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    
    @media (min-width:768px){
        background-image: url(${bgTab});
    }
    @media (min-width:1280px){
        background-image: url(${bgDesk});
        margin-right: 80px;
        
    }
`;