'use client';

import { HomeUser, ProfileUser } from '@/model/user';
import useSWR from 'swr';
import React from 'react';
import ColorButton from './ui/ColorButton';

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>('/api/me');

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? 'Unfollow' : 'Follow';
  return (
    <>
      {showButton && (
        <ColorButton text={text} onClick={() => {}} color='bg-red-500' />
      )}
    </>
  );
}
