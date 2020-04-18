module.exports = {
  projects: [
    {
      displayName: 'Browser',
      testEnvironment: 'jsdom',
      testMatch: ['**/test/*.test.js']
    },
    {
      displayName: 'Node',
      testEnvironment: 'node',
      testMatch: [
        '**/test/*.test.js',
        '**/test/*.spec.js',
      ]
    },
  ],
}
