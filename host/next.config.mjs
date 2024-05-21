import { NextFederationPlugin} from '@module-federation/nextjs-mf'
 export default {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          remote:"remote@http://localhost:3001/_next/static/chunks/remoteEntry.js"
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react/': {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
          'next/dynamic': {
            requiredVersion: false,
            singleton: true,
          },
          'styled-jsx': {
            requiredVersion: false,
            singleton: true,
          },
          'styled-jsx/style': {
            requiredVersion: false,
            singleton: true,
          },
          'next/link': {
            requiredVersion: false,
            singleton: true,
          },
          'next/router': {
            requiredVersion: false,
            singleton: true,
          },
          'next/script': {
            requiredVersion: false,
            singleton: true,
          },
          'next/head': {
            requiredVersion: false,
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};

