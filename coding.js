  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    /* Handle CSS imports (with CSS modules)

        https://jestjs.io/docs/webpack#mocking-css-modules */
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',


  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/\\.next/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx|svg)$': ['babel-jest', { presets: ['next/babel'] }]
  },

        "@mui/icons-material": "^5.10.3",
    "@mui/material": "^5.10.3",
    "@reduxjs/toolkit": "^1.8.5",
    "axios": "^0.27.2",

const nextConfig = {
  compiler: {
    emotion: true,
    styledComponents: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io']
  },
