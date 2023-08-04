'use client';

import React, { FormEvent, useState } from 'react';
import useSWR from 'swr';
import GridSpinner from './ui/GridSpinner';
import Avatar from './Avatar';
import { SearchUser } from '@/model/user';
import UserCard from './UserCard';
import useDebounce from '@/hooks/useDebounce';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const debouncedSearch = useDebounce(keyword);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(() => `/api/search/${debouncedSearch}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className='w-full flex flex-col items-center max-w-2xl my-4'>
      <form onSubmit={onSubmit} className='w-full'>
        <input
          className='w-full text-xl p-3 outline-none border border-gray-400'
          type='text'
          autoFocus
          placeholder='Search'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {isLoading && (
        <div className='text-center mt-32'>
          <GridSpinner />
        </div>
      )}
      {error && <p>에러</p>}
      {!isLoading && !error && users?.length === 0 && <p>찾는 사용자가 없음</p>}
      {users && users.length > 0 && (
        <ul className='w-full p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px]'>
          {users.map((user) => (
            <li key={user.username} className='mb-4'>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
