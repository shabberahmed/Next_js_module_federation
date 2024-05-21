import { NextFederationPlugin } from '@module-federation/nextjs-mf';

export default {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        remotes: {
          host:"host@http://localhost:3000/_next/static/chunks/remoteEntry.js"

        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './button': './pages/Button.tsx',
          // Expose the Button component from your remote module
        },
        shared: {
          // Specify any shared dependencies if needed
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
          // Add other shared dependencies as needed
        },
      })
    );

    return config;
  },
};
