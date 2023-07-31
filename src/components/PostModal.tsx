'use client';

import React from 'react';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}>
      <button className='fixed top-0 right-0 p-8 text-white' onClick={onClose}>
        X
      </button>
      {children}
    </section>
  );
}
