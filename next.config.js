/** @type {import('next').NextConfig} */
 const withOptimizelyDatafile = require('./scripts/with_optimizely_datafile');

module.exports = withOptimizelyDatafile({
  reactStrictMode: true,
})
