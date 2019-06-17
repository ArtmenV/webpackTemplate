const path = require('path');

module.exports = {
  // указываем абсолютный путь в entry  -  context: path.resolve(__dirname, 'src'),

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',

    watch: true,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }

//  devtool:  2 значения - 'eval' и 'source-map' показывает карты
    };

    
{/* <------------>
настройки бабеля 2 вариант
удалить файл .babelrc  и в 
rules => use: {
    loader: 'babel-loader',
    options: {
        presets: ['env']
    }
}
<------------> */}
