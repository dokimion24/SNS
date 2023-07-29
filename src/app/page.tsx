import Avatar from '@/components/ui/Avatar';
import FollowingBar from '@/components/ui/FollowingBar';
import PostList from '@/components/ui/PostList';
import SideBar from '@/components/ui/SideBar';
import { User } from '@/model/user';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  console.log('유저', user);

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section className='flex  flex-col md:flex-row w-full max-w-[850px] p-4'>
      <div className='w-full basis-3/4'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4'>
        <SideBar user={user} />
      </div>
    </section>
  );
}
