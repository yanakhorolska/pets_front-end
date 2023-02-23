import styled from '@emotion/styled'
import bgDesk from '../../images/bgs/bgDSC.png';
import bgTabl from '../../images/bgs/bgTABL.png';
import bgMob from '../../images/bgs/bgMOB.png';
// import womenMob from '../../images/bgs/home-woman-mob-1x.png'
// import womenMobTab from '../../images/bgs/home-woman-tab-1x.png'
// import womenMobDesk from '../../images/bgs/home-woman-desk-1x.png'
export const HomeStyled = styled('section')`
   
   
     padding-top:60px;
    @media (min-width:768px){
         padding-top:88px;
    }
    @media (min-width:1280px){
        padding-top:60px;
       
        
    }
 

   
`;
export const HomeImg = styled('div')`
 height:100vh;
width:100%;
    background-image: url(${bgMob});
    background-repeat: no-repeat;
    background-size: contain;
    @media (min-width:768px){
      
        background-image: url(${bgTabl});
    }
    @media (min-width:1280px){
      background-image: url(${bgDesk});
       
        
    }
`;
export const HomeText = styled('h2')`
  
    font-family: 'Manrope';
    color:#000;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.38;
    width:100;
   
    @media (min-width:768px){
        margin-top:88px;
        width:588px;
        font-size: 68px;
        line-height: 1.47;

    }
    @media (min-width:1280px){
       margin-top:92px;
       
        
    }
`