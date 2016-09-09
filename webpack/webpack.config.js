var webpack = require('webpack');

module.exports = {
 // context: __dirname,
 entry: "./src/index.js",
 output: {
   filename: "./dist/index.js"
 },
 module: {
   loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['babel-preset-stage-2', 'es2015'] 
         }
       },
      {
        test: /\.json$/,
        loader: 'json'
      }
   ]
 },
 plugins: [
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Try to dedupe duplicated modules, if any:
    new webpack.optimize.DedupePlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}