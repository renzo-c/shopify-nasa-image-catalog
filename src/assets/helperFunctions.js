export const wasImageLiked = (id) => {
  const res = Boolean(localStorage.getItem(id));
  return res;
};

