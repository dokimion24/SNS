'use client';

import React from 'react';
import Avatar from './Avatar';
import { SearchUser } from '@/model/user';
import Link from 'next/link';

type Props = {
  user: SearchUser;
};

export default function UserCard({ user }: Props) {
  return (
    <Link
      href={`/user/${user.username}`}
      className='flex items-center w-full rounded-sm border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50'>
      <Avatar image={user.image} size='medium' />
      <div className='text-neutral-500'>
        <p className='text-black font-bold leading-4'>{user.username}</p>
        <p>{user.name}</p>
        <p className='text-sm leading-4'>
          {user.followers ?? 0} followers {user.following ?? 0} following
        </p>
      </div>
    </Link>
  );
}
