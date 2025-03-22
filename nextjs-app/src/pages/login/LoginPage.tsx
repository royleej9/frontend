'use client';

import { LoginForm } from '@/features/login-form';
import { pagePath } from '@/shared/lib/path';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const loginSuccess = () => {
    router.push(pagePath.dashboard());
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <LoginForm loginSuccess={loginSuccess}></LoginForm>
    </main>
  );
}
