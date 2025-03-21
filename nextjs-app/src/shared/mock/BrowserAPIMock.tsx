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
        return await import('./config');
      })();
    }
  }, [enabledMocking]);

  return <>{children}</>;
}
