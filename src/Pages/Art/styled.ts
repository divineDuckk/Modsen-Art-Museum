import styled from 'styled-components';
import { AddToFavButton } from '../../components/CardArt/styled';

export const StyledArtPage = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.margins[8]}px;
  gap: ${({ theme }) => theme.gaps[7]}px;
`;
export const ImageWithButton = styled.div`
  position: relative;
  img {
    max-width: 500px;
    height: 570px;
  }
`;
export const AddToFavButtonAbsolutePos = styled(AddToFavButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const ArtistName = styled.p`
  font-family: 'Lexend Deca';
  color: ${({ theme }) => theme.colors['pOrange']};
  line-height: ${({ theme }) => theme.lineHeights[5]}px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-bottom: ${({ theme }) => theme.margins[2]}px;
`;
export const ArtistDate = styled.p`
  font-family: 'Lexend Deca';
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  margin-bottom: ${({ theme }) => theme.margins[9]}px;
`;
export const Info = styled.section`
  color: ${({ theme }) => theme.colors['primary']};
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleWrapper = styled.div`
  overflow: hidden;
`;
export const TitleInfo = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  line-height: ${({ theme }) => theme.lineHeights[6]}px;
  margin-bottom: ${({ theme }) => theme.margins[4]}px;
  max-width: 640px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Description = styled.p`
  font-family: 'Lexend Deca';
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  color: ${({ theme }) => theme.colors['primary']} !important;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  margin-bottom: ${({ theme }) => theme.margins[2]}px;
  margin-top: 0;
  span {
    color: ${({ theme }) => theme.colors['pOrange']};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
