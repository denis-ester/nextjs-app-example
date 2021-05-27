const pluginComposePlugins = require('next-compose-plugins');
const pluginOptimizedImages = require('next-optimized-images');
const { EnvironmentPlugin, IgnorePlugin, DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config, {buildId}) => {
    // generate hashed file names for caching & versioning purposes
    config.module.rules.push({
      test: /^public/,
      use: [
        {
          loader: 'file-loader',
          options: {
            context: '',
            outputPath: 'public',
            publicPath: '_next/public',
            name: '[path][name].[hash].[ext]',
          },
        },
      ],
    });

    config.plugins.push(
      new EnvironmentPlugin(dotenv.config().parsed),
      new IgnorePlugin(/^\.\/locale$/, /moment$/)
    );

    // on local dev runs this will be `development`
    if(buildId) {
      config.plugins.push(
        new DefinePlugin({
          'process.env.buildId': JSON.stringify(buildId),
        })
      )
    }

    return config;
  },
};

module.exports = pluginComposePlugins(
  [
    [
      pluginOptimizedImages,
      {
        optimizeImagesInDev: true,
      },
    ],
  ],
  withBundleAnalyzer(nextConfig)
);
