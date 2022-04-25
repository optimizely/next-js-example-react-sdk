/** @type {import('next').NextConfig} */
 const withOptimizely = require('./scripts/fetch_optimizely_datafile');

module.exports = withOptimizely({
  reactStrictMode: true,
})
