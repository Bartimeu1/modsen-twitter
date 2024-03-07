import { slugRegex } from '@constants/regex';

export const formatEmailToSlug = (email: string) => {
  const userName = email.split('@')[0];
  const slug = userName.toLowerCase().replace(slugRegex, '_');

  return slug;
};
