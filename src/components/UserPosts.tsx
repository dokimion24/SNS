'use client';

import { ProfileUser } from '@/model/user';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';

export default function UserPosts() {
  const pathname = usePathname();
  const usernamePath = pathname?.split('/')[2];
  const [tab, setTab] = useState('posts');
  const {
    data: user,
    isLoading,
    error,
  } = useSWR<ProfileUser>(() => `/api/user/${usernamePath}`);

  if (!user) {
    return;
  }

  console.log(user.posts);

  return <div></div>;
}
