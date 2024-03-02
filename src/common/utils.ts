export const getCartFromLS = () => {
  const data = localStorage.getItem('favorite');
  return data ? JSON.parse(data) : [];
};
