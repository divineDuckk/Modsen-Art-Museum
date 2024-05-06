import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonSmallCard: FC = (props) => (
  <ContentLoader
    speed={2}
    width={416}
    height={130}
    viewBox="0 0 416 130"
    backgroundColor="#f8c9c9"
    foregroundColor="#e6f5ee"
    {...props}
  >
    <rect x="269" y="485" rx="0" ry="0" width="0" height="1" />
    <rect x="239" y="512" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="0" ry="0" width="416" height="130" />
    <rect x="29" y="366" rx="0" ry="0" width="334" height="132" />
  </ContentLoader>
);