'use strict';

const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {};


module.exports = withPlugins([withImages({
  target: 'serverless'
})], nextConfig);