'use client';

import * as Form from '@radix-ui/react-form';

import { Box, Button, Card, Flex, Heading, Link, Text } from '@radix-ui/themes';
import { AuthService } from '@/shared/api/auth';
import { useForm } from 'react-hook-form';
import { CTextField } from '@/shared/ui/input';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    console.log(data.email);

    // await AuthService.login({ email: data.email, password: data.password })
    //   .then()
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
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
              rules={{
                required: { value: true, message: '반드시 입력해주세요' },
              }}
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
              rules={{
                required: { value: true, message: '반드시 입력해주세요' },
              }}
            />
            <Link href="#" size="2" onClick={(e) => e.preventDefault()}>
              Forgot password?
            </Link>
          </Box>

          <Flex mt="6" justify="end" gap="3">
            <Button variant="outline">Create an account</Button>
            <Button type="submit">Sign in</Button>
          </Flex>
        </Card>
      </Flex>
    </Form.Root>
  );
}
