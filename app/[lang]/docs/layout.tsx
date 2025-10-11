import { type ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/app/layout.config';
import { t } from '@/lib/i18n';
import '@/app/global.css';
import { CustomSidebarComponents } from '@/components/sideBar';
import GithubLogoLight from '@/components/docs/githubLogoLight';
import GithubLogoDark from '@/components/docs/githubLogoDark';

export default async function Layout({
  params,
  children
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  const tab = [
    {
      title: t('common:study-note', lang),
      url: lang === 'zh-CN' ? '/docs/study-note' : '/en/docs/study-note'
    },
    {
      title: t('common:eight-part-essay', lang),
      url: lang === 'zh-CN' ? '/docs/eight-part-essay' : '/en/docs/eight-part-essay'
    },
    {
      title: t('common:some-things', lang),
      url: lang === 'zh-CN' ? '/docs/some-thinks' : '/en/docs/some-thinks'
    },
    {
      title: t('common:algorithm', lang),
      url: lang === 'zh-CN' ? '/docs/algorithm' : '/en/docs/algorithm'
    },
  ];

  return (
    <DocsLayout
      {...baseOptions(lang)}
      nav={{
        title: (
          <div className="flex items-center justify-center h-14">
            <h1 className="text-2xl font-bold text-blue-500 text-center">dreamer6680</h1>
          </div>
        ),
        mode: 'top'
      }}
      links={[
        {
          type: 'icon',
          icon: (
            <div className="flex flex-row items-center gap-2">
              <div className="block dark:hidden">
                <GithubLogoLight />
              </div>
              <div className="hidden dark:block">
                <GithubLogoDark />
              </div>
            </div>
          ),
          url: 'https://github.com/dreamer6680/dreamer6680-blog',
          text: 'github'
        }
      ]}
      tree={source.pageTree[lang]}
      searchToggle={{
        enabled: true
      }}
      sidebar={{
        tabs: tab,
        collapsible: false,
        components: CustomSidebarComponents
      }}
      tabMode="navbar"
    >
      {children}
    </DocsLayout>
  );
}
