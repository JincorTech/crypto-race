import jwtDecode from 'jwt-decode';

export const getId = () => localStorage.getItem('id') || '';


export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token') || '';

export const getEmail = () => {
  const token = getToken();

  if (token) {
    const decoded = jwtDecode(token);
    return decoded.login;
  }

  return null;
};

export const isAuth = () => {
  const token = getToken();

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const expireDate = parseInt(decoded.exp, 10);
      return Date.now() < expireDate * 1000;
    } catch (e) {
      removeToken();
    }
  }

  return false;
};

export const removeToken = () => {
  localStorage.removeItem('token');
};
