import { storage } from '@root/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

export const addImageIntoStorage = async (image: File) => {
  const imageRef = ref(storage, `images/${image.name + v4()}`);
  await uploadBytes(imageRef, image);

  return getDownloadURL(imageRef);
};
