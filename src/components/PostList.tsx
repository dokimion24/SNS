'use client';

import { SimplePost } from '@/model/post';
import { User } from '@/model/user';
import React from 'react';
import useSWR from 'swr';

type Props = {
  user: User;
};

export default function PostList({ user: { name, username, image } }: Props) {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/posts');

  console.log(posts);

  return (
    <ul className='w-full p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px]'>
      {posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}
    </ul>
  );
}
