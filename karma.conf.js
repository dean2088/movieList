const path = require('path');

const resolve = (basePath, suiteName) => {
  return path.join(basePath, '__snapshots__', suiteName + '.md');
};

module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadless'],
    colors: true,
    frameworks: ['mocha', 'snapshot', 'mocha-snapshot'],
    files: [
      '**/__snapshots__/**/*.md',
      { pattern: 'src/**/*.spec.js', watched: false }
    ],
    preprocessors: {
      '**/__snapshots__/**/*.md': ['snapshot'],
      'src/**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage-istanbul'],
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      },
      module: {
        rules: [
          {
            test: /.js?$/,
            use: [
              {
                loader: 'babel-loader',
                // options defined here -- .babelrc causes problems with hub-react-server
                options: {
                  presets: [['env', { 'modules': false, 'useBuiltIns': 'entry' }], 'react', 'stage-0'],
                  plugins: ['transform-decorators-legacy'],
                  env: {
                    'development': {
                      'plugins': ['react-hot-loader/babel']
                    }
                  }
                }
              },
              'eslint-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            exclude: /node_modules/,
            loader: 'istanbul-instrumenter-loader',
            enforce: 'post',
            options: { esModules: true },
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /node_modules/
          },
          {
            test: /global.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ],
            exclude: /node_modules/
          },
          {
            test: /^((?!global).)*scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  sourceMap: true,
                  localIdentName: '[local]___[hash:base64:5]'
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: true
                }
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'url-loader',
            options: { limit: 10240 }
          }
        ]
      },
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.json', '.js']
      }
    },
    snapshot: {
      update: !!process.env.UPDATE,
      prune: !!process.env.PRUNE,
      pathResolver: resolve
    },
    plugins: [
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-snapshot',
      'karma-mocha-snapshot'
    ],
    coverageIstanbulReporter: {
      watermarks: {
        statements: [ 50, 75 ],
        functions: [ 50, 75 ],
        branches: [ 50, 75 ],
        lines: [ 50, 75 ]
      },
      reports: [ 'text-summary' ],
    },
    webpackServer: {
      noInfo: true
    }
  });
};
