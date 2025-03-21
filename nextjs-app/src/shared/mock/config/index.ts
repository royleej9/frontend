// https://github.com/vercel/next.js/tree/canary/examples/with-msw

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

    const { server } = await import('./server');
    // addEvents(server);
    server.listen();
  } else {
    console.log(`start browser api mocking...`);

    const { worker } = await import('./browser');
    // addEvents(worker);
    worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
}

try {
  initMocks();
} catch (err) {
  console.log(err);
}

export {};
