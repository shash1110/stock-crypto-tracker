const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
