'use client';

import { useEffect, useState } from 'react';

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
  const [mockStarted, setMockStarted] = useState(false);

  useEffect(() => {
    if (enabledMocking) {
      (async () => {
        await import('./config')
          .then((module) => module.startMock())
          .then(() => setMockStarted(true));
      })();
    }
  }, [enabledMocking]);

  if (enabledMocking && !mockStarted) {
    return <div>Mock 초기화 중</div>;
  }

  return <>{children}</>;
}
