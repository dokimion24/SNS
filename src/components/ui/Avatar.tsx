import React from 'react';

type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = 'normal',
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image ?? undefined} alt='profile' />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean) {
  const baseStyle = 'rounded-full';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500'
    : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}
