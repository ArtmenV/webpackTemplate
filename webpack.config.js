const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

    entry: {
        main: './index.js',
        player: './player.js',
        vendor: ['react', 'react-dom']
    
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[chunkhash].js'
    },

    devServer: {
        port: 3000
    },
    //mode: 'development',

    watch: true,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    } 
                }
            },
            { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[name].[ext]',
                        outputPath: 'img',
                    }
                }
            }   
        ]

//  devtool:  2 значения - 'eval' и 'source-map' показывает карты
    },

    plugins:  [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Знакомство с Webpack'
        }),

    ],

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.scss', '*']
        }
    
};
{/* <------------>

создать отдельный файл babel ---> use: 'babel-loader'
настройки бабеля 2 вариант
удалить файл .babelrc  и в 
rules => use: {
    loader: 'babel-loader',
    options: {
        presets: ['env']
    }
}
<------------> */}

// { 
//     test: /\.scss$/,
//     use: ['style-loader',
//     {
//        loader: 'css-loader',
//        options: {
//            sourceMap: true
//        }
//     }, 
//     'sass-loader']
// },

// entry: './src/index.js',