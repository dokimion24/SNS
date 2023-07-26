import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-md bg-gradient-to-bl">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
