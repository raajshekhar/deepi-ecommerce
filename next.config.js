'use strict';

const webpack = require('webpack');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader'
    });

    return config;
  }
};

module.exports = withPlugins([withImages({
  target: 'serverless',
  distDir: 'build'
})], nextConfig);