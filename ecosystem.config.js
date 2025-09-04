module.exports = {
  apps: [
    {
      name: 'thefitbot-demo',
      script: 'server.js',
      cwd: '/home/user/webapp',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};