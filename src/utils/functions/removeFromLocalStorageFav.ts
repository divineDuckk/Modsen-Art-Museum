export const removeFromLocalStorageFav = (id: number) => {
  localStorage.removeItem(String(id));
};
