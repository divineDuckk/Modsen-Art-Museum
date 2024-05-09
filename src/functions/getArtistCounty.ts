export const getArtistCountry = (artist_display: string): string => {
  if (artist_display.includes('('))
    return artist_display.split('(')[1].split(',')[0].trim();
  else if (artist_display.includes('\n'))
    return artist_display.split('\n')[1].split(',')[0].trim();
  else if (artist_display.includes(',')) {
    const arr = artist_display.split(',')[0];
    if (arr.includes(' ')) return arr[arr.length - 1];
    return artist_display.split(',')[0];
  }
  return artist_display;
};
