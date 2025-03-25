'use client';

import { LoginForm } from '@/features/login-form';
import { pagePath, PARAM_CALLBAK_URL } from '@/shared/lib/path';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const callbackUrl =
    searchparams?.get(PARAM_CALLBAK_URL) || pagePath.dashboard();

  const loginSuccess = () => {
    router.replace(callbackUrl);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm loginSuccess={loginSuccess}></LoginForm>
    </main>
  );
}
