var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
        ]
    },
    //插件数组
    plugins:[
        new htmlWebpackPlugin(),
        new CleanWebpackPlugin(
            ['../dist/*.*'],　                          //匹配删除的文件
            {
                root: path.join(__dirname, '../dist'),  //根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
}

module.exports = config