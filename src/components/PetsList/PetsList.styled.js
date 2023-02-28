import styled from 'styled-components';

// export const Box = styled.div`
// margin: 20px auto;
// `

export const PetBox = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 16px 20px 40px;
  width: 280px;
  background: ${p => p.theme.color.cards};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border-radius: 20px;
  @media ${p => p.theme.media.tabletDesktop} {
    display: flex;
    gap: 32px;
    margin: 24px auto;
    padding: 20px;
    width: 704px;
    border-radius: 40px;
  }
  @media ${p => p.theme.media.desktop} {
    width: 821px;
  }
`;

export const PetPhoto = styled.img`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: contain;
  filter: drop-shadow(${p => p.theme.shadows.boxShadow});
  
  @media ${p => p.theme.media.tabletDesktop} {
    margin-bottom: 0;
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PetDescripton = styled.div`
  display: block;
  align-items: center;
  width: 235px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  overflow-wrap: break-word;
  color: ${p => p.theme.color.text};
  
  @media ${p => p.theme.media.tabletDesktop} {
    width: 470px;
    font-size: 16px;
    line-height: 1.38;
  }
  @media ${p => p.theme.media.desktop} {
    width: 580px;
  }
`;

export const Span = styled.span`
  margin-right: 5px;
  font-weight: 500;
  color: ${p => p.theme.color.text};
`;

export const Button = styled.button`
  position: absolute;
  top: 272px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: ${p => p.theme.color.buttonOW};
  backdrop-filter: blur(2px);
  transition: background-color transform scale3d 0.25s
    cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: rotate(-45deg) scale3d(1.1, 1.1, 1.1);
    background-color: #f59256;
  }
  @media ${p => p.theme.media.tabletDesktop} {
    top: 20px;
    right: 20px;
  }
`;

export const Cat = styled.img`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 250px;
  object-fit: contain;
`;
