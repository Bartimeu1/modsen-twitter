export const generateSlug = () => {
  return Math.random().toString(36).slice(2, 7);
};

export const generateImageURL = (file: File) => {
  return URL.createObjectURL(file);
};
