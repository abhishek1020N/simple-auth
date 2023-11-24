module.exports = [
  {
    method: 'POST',
    path: '/auth',
    handler: 'auth.count',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/token',
    handler: 'auth.token',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/refresh-token',
    handler: 'auth.refreshToken',
    config: {
      policies: [],
      auth: false,
    },
  },
];
