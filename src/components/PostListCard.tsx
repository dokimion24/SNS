'use client';

import { SimplePost } from '@/model/post';
import React, { useState } from 'react';
import Avatar from './Avatar';
import Image from 'next/image';

import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import PostModal from './PostModal';
import ModalPortal from './ui/ModalPortal';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;

  const [showModal, setShowModal] = useState(false);

  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        onClick={() => setShowModal(true)}
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />

      <ActionBar
        likes={likes}
        createdAt={createdAt}
        text={text}
        username={username}
      />
      <CommentForm />
      {showModal && (
        <ModalPortal>
          <PostModal onClose={() => setShowModal(false)}>
            <p>상세페이지!!!!</p>
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
