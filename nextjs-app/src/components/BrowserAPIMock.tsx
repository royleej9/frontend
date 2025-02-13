'use client';

import { useEffect } from 'react';

/**
 *
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
        return await import('../../.mocks');
      })();
    }
  }, [enabledMocking]);

  return <>{children}</>;
}
