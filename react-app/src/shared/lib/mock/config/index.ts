// https://github.com/vercel/next.js/tree/canary/examples/with-msw

// import { SetupWorker } from 'msw/browser';
// import { SetupServerApi } from 'msw/node';

// function addEvents(setupMock: SetupServerApi | SetupWorker) {
//   setupMock.events.on('request:start', ({ request }) => {
//     console.log('start:', request.method, request.url);
//   });

//   setupMock.events.on('request:match', ({ request }) => {
//     console.log('match:', request.method, request.url);
//   });

//   setupMock.events.on('request:unhandled', ({ request }) => {
//     console.log('unhandled:', request.method, request.url);
//   });

//   setupMock.events.on('request:end', ({ request }) => {
//     console.log('end:', request.method, request.url);
//   });
// }

async function initMocks() {
  console.log('init mocks');

  if (typeof window === 'undefined') {
    console.log(`start server api mocking...`);
    const { serverWorker } = await import('./server-worker');
    // addEvents(server);
    // 동기
    serverWorker.listen();
  } else {
    console.log(`start browser api mocking...`);
    const { browserWorker } = await import('./browser-worker');
    // addEvents(worker);
    // 비동기
    await browserWorker.start({
      // onUnhandledRequest: 'bypass',
      onUnhandledRequest(req: Request) {
        if (req.url.endsWith('.ico')) {
          return;
        }
      },
    });
  }
}

/**
 * mocking 실행
 */
export async function startMock() {
  try {
    if (process.env.NODE_ENV === 'development') {
      await initMocks();
    }
  } catch (err) {
    return err;
  }
}
