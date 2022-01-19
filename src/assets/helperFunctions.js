export const wasImageLiked = (id) => {
  const res = Boolean(localStorage.getItem(id));
  return res;
};

export const textClamp = (str, maxLen) => {
  return str.length > maxLen ? str.substring(0, maxLen) + '...' : str;
};
