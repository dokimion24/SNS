import React from 'react';

type Props = {
  text: string;
  color: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick, color }: Props) {
  return (
    <div className='rounded-md bg-gradient-to-bl'>
      <button
        className={`text-white font-bold rounded-md py-2 px-8 leading-4 ${color}`}
        onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
