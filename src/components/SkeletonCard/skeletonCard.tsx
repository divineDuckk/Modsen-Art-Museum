import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonCard: FC = (props) => (
  <ContentLoader
    speed={2}
    width={387}
    height={444}
    viewBox="0 0 387 444"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="269" y="485" rx="0" ry="0" width="0" height="1" />
    <rect x="239" y="512" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="0" ry="0" width="387" height="444" />
    <rect x="29" y="366" rx="0" ry="0" width="334" height="132" />
  </ContentLoader>
);
