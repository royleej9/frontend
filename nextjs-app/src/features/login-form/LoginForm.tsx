'use client';

import * as Form from '@radix-ui/react-form';

import { Box, Button, Card, Flex, Heading, Link, Text } from '@radix-ui/themes';
import { authSchemas, AuthService, authTypes } from '@/shared/apis/auth';
import { useForm } from 'react-hook-form';
import { CTextField } from '@/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

type LoginFormProps = {
  /** 로그인 성공 */
  loginSuccess?: () => void;

  /** 로그인 실패 */
  loginFail?: () => void;
};

function ErrorMessage({ errors }: { errors?: string }) {
  return (
    <Box mb="10px" className={'mt-1 bg-red-50'}>
      <Box className="rounded-md border border-red-500 p-2">
        <Text size="2" color="red">
          {errors}
        </Text>
      </Box>
    </Box>
  );
}

export function LoginForm({ loginSuccess, loginFail }: LoginFormProps) {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<authTypes.LoginUserDto>({
    mode: 'onSubmit',
    resolver: zodResolver(authSchemas.LoginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loginError, setLoginError] = useState<string | undefined>(undefined);

  const onSubmit = async ({ email, password }: authTypes.LoginUserDto) => {
    await AuthService.login({ email, password })
      .then(loginSuccess)
      .catch(() => {
        if (loginFail) {
          loginFail();
        } else {
          setLoginError('로그인 실패');
        }
      });
  };

  return (
    <>
      <Form.Root onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex flexShrink="0" gap="6" direction="column" width="416px">
          <Card size="4">
            <Heading as="h3" size="6" trim="start" mb="5">
              Sign up
            </Heading>

            <Box mb="5">
              <Flex mb="1">
                <Text as="label" htmlFor="email" size="2" weight="bold">
                  Email address
                </Text>
                {errors.email && (
                  <p style={{ color: 'red' }}>{errors.email.message}</p>
                )}
              </Flex>
              <CTextField
                control={control}
                name="email"
                placeholder="Email"
                disabled={isSubmitting}
              />
            </Box>

            <Box mb="5" position="relative">
              <Flex align="baseline" justify="between" mb="1">
                <Text as="label" size="2" weight="bold" htmlFor="password">
                  Password
                </Text>
                {errors.password && (
                  <p style={{ color: 'red' }}>{errors.password.message}</p>
                )}
              </Flex>
              <CTextField
                control={control}
                name="password"
                placeholder="Password"
                type="password"
                disabled={isSubmitting}
              />
              <Link href="#" size="2" onClick={(e) => e.preventDefault()}>
                Forgot password?
              </Link>
            </Box>

            {loginError && <ErrorMessage errors={loginError} />}

            <Flex mt="6" justify="end" gap="3">
              <Button variant="outline">Create an account</Button>
              <Button type="submit" disabled={isSubmitting}>
                Sign in
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Form.Root>
    </>
  );
}
