import { useEffect,useState } from 'react';
import { Navigate,useParams } from 'react-router-dom';

import { useAppSelector } from '@root/hooks';
import { IUserData } from '@root/types/firebase';
import { getUserBySlug } from '@utils/firestore';

export const ProfilePage = () => {
  const userSlug = useAppSelector(({ user }) => user.data?.slug);
  const params = useParams();
  const paramSlug = params.userSlug;

  const [profileData, setProfileData] = useState<IUserData | null>(null);

  useEffect(() => {
    if (paramSlug) {
      getUserBySlug(paramSlug)
        .then((data) => {
          setProfileData(data);
        })
        .catch(() => {
          setProfileData(null);
        });
    }
  }, [paramSlug]);

  if (!paramSlug) {
    return <Navigate to={`/profile/:${userSlug}`} />;
  }

  return <div>{profileData?.email}</div>;
};
