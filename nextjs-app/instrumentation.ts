export async function register() {
  console.log('START SERVER...');
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      console.log(`NEXT_PUBLIC_API_MOCKING: enabled`);
      await import('./.mocks');
    }
  }
}
