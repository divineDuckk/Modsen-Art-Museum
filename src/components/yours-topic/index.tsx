import { FC } from 'react';

import { ContentTopic, TopicHeader, TopicSpanText } from './styled';
import { TopicProps } from './types';

export const Topic: FC<TopicProps> = ({ hText, spanText }) => {
  return (
    <ContentTopic>
      <TopicSpanText>{spanText}</TopicSpanText>
      <TopicHeader>{hText}</TopicHeader>
    </ContentTopic>
  );
};
