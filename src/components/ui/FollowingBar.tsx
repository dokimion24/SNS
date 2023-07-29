'use client';

import { DetailUser } from '@/model/user';
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Link from 'next/link';
import Avatar from './Avatar';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;
  return (
    <section>
      {isLoading ? (
        <PropagateLoader size={8} />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have follwing`}</p>
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`}>
                <Avatar image={image} highlight />
                <p>{username}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
