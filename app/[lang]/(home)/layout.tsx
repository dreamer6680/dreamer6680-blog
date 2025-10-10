import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import LogoLight from '@/components/docs/logo';

export default async function Layout({
  params,
  children
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const lang = (await params).lang;
  return (
    <HomeLayout
      nav={{
        title: (
          <div className="flex items-center justify-center h-14">
            <h1 className="text-2xl font-bold text-blue-500 text-center">dreamer6680</h1>
          </div>
        )
      }}
      i18n
    >
      {children}
    </HomeLayout>
  );
}
