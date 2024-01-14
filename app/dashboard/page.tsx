import Dashboard from '@/components/Dashboard/Dashboard';
import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
// import { getUserSubscriptionPlan } from '@/lib/stripe';
import { redirect } from 'next/navigation';

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect('/auth-callback?origin=dashboard');

  //   const subscriptionPlan = await getUserSubscriptionPlan();

  return <Dashboard />;
};

export default Page;
