// 本地存储token的一些操作

// 添加到本地存储
export const setToken = (token) => localStorage.setItem('TOKEN',token);

// 获取token
export const getToken = () => localStorage.getItem('TOKEN');

// 清除token
export const removeToken = () => localStorage.removeItem('TOKEN');