export const getArtistDate = (artist_display: string): string => {
  const matchResult = artist_display.match(/(\d{4}(?:–\d{2})?)/);
  if (!matchResult || !matchResult.length) return 'No date info';
  return matchResult[1];
};
