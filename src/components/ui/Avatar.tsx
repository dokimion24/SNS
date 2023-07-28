import React from 'react';

export default function Avatar({ image }: { image?: string | null }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image ?? undefined} alt='profile' />
    </div>
  );
}
