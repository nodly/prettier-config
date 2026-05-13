export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.includes('release')],

  rules: {
    'footer-max-line-length': [0],
  },
};
