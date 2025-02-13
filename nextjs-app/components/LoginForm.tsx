'use client';

import * as React from 'react';
import * as Form from '@radix-ui/react-form';

import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  return password !== '';
};

const login = async (email: string, password: string) => {
  return fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email: email, password: password }),
  });
};

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // form 자동 제출 방지
    event.preventDefault();

    setErrorEmail('');
    setErrorPassword('');

    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);

    if (!isEmailValid) {
      setErrorEmail('이메일 주소가 잘 못 되었습니다.');
    }

    if (!isPasswordValid) {
      setErrorPassword('패스워드를 입력하시기 바랍니다.');
    }

    if (isEmailValid && isEmailValid) {
      await login(email, password)
        .then()
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit} noValidate>
      <Flex flexShrink="0" gap="6" direction="column" width="416px">
        <Card size="4">
          <Heading as="h3" size="6" trim="start" mb="5">
            Sign up
          </Heading>

          <Box mb="5">
            <Flex mb="1">
              <Text as="label" htmlFor="emailTF" size="2" weight="bold">
                Email address
              </Text>
              {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
            </Flex>
            <TextField.Root
              placeholder="Enter your email"
              required
              id="emailTF"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onKeyDownCapture={(event) => {
                if (event.key === 'Enter') {
                  console.log('enter');
                }
              }}
            />
          </Box>

          <Box mb="5" position="relative">
            <Flex align="baseline" justify="between" mb="1">
              <Text as="label" size="2" weight="bold" htmlFor="passwordTF">
                Password
              </Text>
              {errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>}
            </Flex>
            <TextField.Root
              placeholder="Enter your password"
              id="passwordTF"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyDownCapture={(event) => {
                if (event.key === 'Enter') {
                  console.log('enter');
                }
              }}
              value={password}
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
