'use client';

import { ProfileUser } from '@/model/user';
import React from 'react';
import Avatar from './Avatar';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';

import { usePathname } from 'next/navigation';
import FollowButton from './FollowButton';

export default function UserProfile() {
  const pathname = usePathname();
  const usernamePath = pathname?.split('/')[2];
  const {
    data: user,
    isLoading,
    error,
  } = useSWR<ProfileUser>(() => `/api/user/${usernamePath}`);

  if (!user) {
    return;
  }

  const { image, username, name, followersNum, followingNum, posts } = user;
  const info = [
    { title: 'posts', data: posts },
    { title: 'followersNum', data: followersNum ?? 0 },
    { title: 'followingNum', data: followingNum ?? 0 },
  ];

  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridSpinner />
        </div>
      )}
      <Avatar image={image} highlight />
      <div>
        <h1>{username}</h1>
        <FollowButton user={user} />
        <ul>
          {info.map((item, index) => (
            <li key={index}>
              <span>{item.data}</span>
              {item.title}
            </li>
          ))}
        </ul>
        <p>{name}</p>
      </div>
    </section>
  );
}
