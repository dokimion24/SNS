import React from 'react';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeadertIcon from './ui/icons/HeartIcon';
import { parseDate } from '@/util/date';
import { SimplePost } from '@/model/post';

type Props = {
  likes: string[];
  createdAt: string;
  text: string;
  username: string;
};

export default function ActionBar({ likes, createdAt, text, username }: Props) {
  return (
    <>
      <div className='flex justify-between my-2 px-4'>
        <BookmarkIcon />
        <HeadertIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>
          {`${likes?.length ?? 0}`} 좋아요
        </p>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>
        <p className='text-xs text-neutral-500 uppercase my-4'>
          {parseDate(createdAt)}
        </p>
      </div>
    </>
  );
}
