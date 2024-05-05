import { FC } from 'react';
import { StyledTopic } from './styled';
import { TopicProps } from './types';
export const Topic: FC<TopicProps> = ({ hText, spanText }) => {
  return (
    <StyledTopic>
      <span>{spanText}</span>
      <h2>{hText}</h2>
    </StyledTopic>
  );
};
// Topics for you Our special gallery
