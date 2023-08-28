export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const deleteAccessToken = () => {
  return localStorage.removeItem('access_token');
};
