import styled from 'styled-components';

export const AvatarInput = styled('input')`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: inherit;
`;
export const AvatarBox = styled.div`
  margin: 0 auto;
  margin-bottom: 34px;

  @media ${p => p.theme.media.tabletDesktop} {
    margin-right: 0;
    margin-bottom: 8px;
  }
  @media ${p => p.theme.media.desktop} {
    margin: 0 auto;
    width: 100%;
    margin-bottom: 36px;
  }
`;

export const AvatarLabel = styled('label')`
  color: ${p => p.theme.color.text};
  font-size: ${p => p.theme.fontSizes.xs};
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 12px;
  margin-left: auto;
  padding: 0;
  cursor: pointer;
`;

export const AvatarLabelText = styled.span`
&:hover{
  color: ${p =>p.theme.color.accent}
}
`;



export const AvatarImage = styled('img')`
  border-radius: 50%;
  margin-bottom: 12px;
  margin: 0 auto;
  width: 233px;
  height: 233px;
  filter: drop-shadow(${p => p.theme.shadows.boxShadow}); ;
`;
