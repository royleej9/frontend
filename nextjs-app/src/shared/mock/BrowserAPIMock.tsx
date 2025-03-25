'use client';

import { useEffect } from 'react';

/**
 * 브라우저에서 사용하는 api 요청 mocking
 * @param param0
 * @returns
 */
export function BrowserAPIMock({
  enabledMocking,
  children,
}: {
  enabledMocking: boolean;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (enabledMocking) {
      (async () => {
        const { startMock } = await import('./config');
        startMock().catch(console.log);
      })();
    }
  }, [enabledMocking]);

  return <>{children}</>;
}
