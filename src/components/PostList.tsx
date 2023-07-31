'use client';

import { SimplePost } from '@/model/post';
import { User } from '@/model/user';
import React from 'react';
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';

export default function PostList() {
  const { data: posts, isLoading } = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridSpinner />
        </div>
      )}
      {posts && (
        <ul className='w-full p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px]'>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
