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
    <section
      className="w-full flex flex-col md:flex-row items-center justify-center py-12
      border-b border-neutral-300"
    >
      {isLoading && (
        <div className="text-center mt-32">
          <GridSpinner />
        </div>
      )}
      <Avatar image={image} highlight />
      <div className="md:ml-10 basis-1/3">
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="text-2xl md:mr-8 my-2 md:mb-0">{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className="my-4 flex gap-4">
          {info.map((item, index) => (
            <li key={index}>
              <span className="font-bold mr-1">{item.data}</span>
              {item.title}
            </li>
          ))}
        </ul>
        <p className="text-xl font-bold text-center md:text-start">{name}</p>
      </div>
    </section>
  );
}
