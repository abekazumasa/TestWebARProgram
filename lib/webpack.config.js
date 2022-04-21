const path = require('path');
module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
    // ファイルの出力設定
    output: {
      // 出力ファイル名
      filename: "main.js",
      path: path.resolve(__dirname, 'dist'),
    }
  };