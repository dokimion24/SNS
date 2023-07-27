'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColorButton from './ui/ColorButton';

const menu = [
  {
    href: '/',
    icons: <HomeIcon />,
    clickedIcons: <HomeFillIcon />,
  },
  {
    href: '/search',
    icons: <SearchIcon />,
    clickedIcons: <SearchFillIcon />,
  },
  {
    href: '/new',
    icons: <NewIcon />,
    clickedIcons: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instargram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcons : item.icons}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign in" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}