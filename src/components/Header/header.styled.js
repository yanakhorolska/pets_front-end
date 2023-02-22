import styled from "styled-components";


export const Head = styled("header")`
 
    width: 100%;

    display: flex;
    flex-diracion:row;
    
    align-items: center;
    justify-content: space-between;
     @media (min-width: 768px){
   
    }
      @media (min-width: 1280px){
          
    }
`;

export const HeadNav = styled("div")`
    display: flex;
    flex-diracion:row;
    align-items: center;
`;
export const BurgerMenu = styled("div")`    
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 16px 20px;
    background-color:white;
    flex-direction: column;
`;
export const BurgerLinks = styled("div")`    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:46px;
     
`;
export const ToggleButtonBurg = styled("button")`  
    
   background-color: transparent;
   border: 1px solid transparent;
   width:40px;
   height:40px;
   @media (min-width: 768px){
     margin-left:20px
    }
      @media (min-width: 1280px){
        display:none;        
    }
`;
export const MenuHeader = styled("div")`   
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonsContainer = styled("div")`   
  display:none;
  @media (min-width: 768px){
     display:block;
    }
`;
export const HeaderWrap = styled("div")`   
  display:flex;
  align-items: center;
 
`;
export const BurgerLinksWrap = styled("div")`
 @media (min-width: 768px){
       display:none;
    }
`;