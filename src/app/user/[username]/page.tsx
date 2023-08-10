import React from 'react';
import UserProfile from '@/components/UserProfile';
import UserPosts from '@/components/UserPosts';

export default async function UserPage() {
  return (
    <>
      <UserProfile />
      <UserPosts />
    </>
  );
}
