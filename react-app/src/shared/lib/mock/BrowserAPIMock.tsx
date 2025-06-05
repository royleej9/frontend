import { useEffect, useState } from 'react';

interface BrowserAPIMockProps {
  enabledMocking: boolean;
  children: React.ReactNode;
}

/**
 *
 * @param {BrowserAPIMockProps} props
 * @returns
 */
export function BrowserAPIMock(props: BrowserAPIMockProps) {
  const { enabledMocking, children } = props;
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
    return <div>Initializing mocks...</div>;
  }

  return <>{children}</>;
}
