'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const exactMap: Record<string, string> = {
};

const prefixMap: Record<string, string> = {
};

const fallbackRedirect = '/docs/study-note';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (exactMap[pathname]) {
        window.location.replace(exactMap[pathname]);
        return;
      }

      for (const [oldPrefix, newPrefix] of Object.entries(prefixMap)) {
        if (pathname.startsWith(oldPrefix)) {
          const rest = pathname.slice(oldPrefix.length);
          window.location.replace(newPrefix + rest);
          return;
        }
      }

      try {
        const basePath = pathname.replace(/\/$/, '');
        const res = await fetch(`/api/meta?path=${basePath}`);
        console.log('res', res);

        if (!res.ok) throw new Error('meta API not found');

        const validPage = await res.json();

        if (validPage) {
          console.log('validPage', validPage);
          window.location.replace(validPage);
          return;
        }
      } catch (e) {
        console.warn('meta.json fallback failed:', e);
      }

      window.location.replace(fallbackRedirect);
    })();
  }, [pathname, router]);

  return null;
}
