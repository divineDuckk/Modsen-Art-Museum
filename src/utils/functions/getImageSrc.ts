export const getImageSrc = (imageId: string | null): string => {
  if (imageId === null)
    return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  return `https://www.artic.edu/iiif/2/${imageId}/full/451,/0/default.jpg`;
};
