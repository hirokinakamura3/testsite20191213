module.exports = {
    module: "development",
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./resources/assets/js/index.js`,

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/resources/public/js`,
        // 出力ファイル名
        filename: "main.js"
    }
};
