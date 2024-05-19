import styled from 'styled-components';

export const ContentTopic = styled.div`
  font-family: 'Lexend Deca';
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins[5]}px;
`;
export const TopicSpanText = styled.span`
  color: ${({ theme }) => theme.colors['pOrange']};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
`;
export const TopicHeader = styled.h2`
  line-height: ${({ theme }) => theme.lineHeights[6]}px;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  color: ${({ theme }) => theme.colors['black']};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
`;
