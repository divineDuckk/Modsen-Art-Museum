import styled from 'styled-components';

import { PADD_PERSENT } from '@/constants/constants';

const FOOTER_HEIGHT = 127;

const MARGIN_PERSENT = 16.66;

const WRAPPER_MAX_WIDTH = 1280;

export const ContentFooter = styled.footer`
  padding: 0 ${PADD_PERSENT}%;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${FOOTER_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors['white']};
  flex: 0 0 auto;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      padding: 0;
      justify-content: space-around;
    }
  }
`;
export const Wrapper = styled.div`
  margin: 0 ${MARGIN_PERSENT}%;
  max-width: ${WRAPPER_MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 auto;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints[0]}px) {
    & {
      margin: 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.img``;
export const ModsenLogo = styled.img``;
