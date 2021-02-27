'use strict';

const webpack = require('webpack');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const nextConfig = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader'
    });

    return config;
  }
};

module.exports = withPlugins([withPWA(withImages({
  target: 'serverless',
  distDir: 'build'
}))], nextConfig);