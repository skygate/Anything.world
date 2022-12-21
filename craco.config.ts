const config = {
  babel: {
    plugins: [
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-transform-shorthand-properties",
    ],
  },
  webpack: {
    configure: {
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks() {
            return false;
          },
        },
      },
    },
  },
};
export default config;
