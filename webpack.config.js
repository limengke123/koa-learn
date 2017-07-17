/**
 * Created by 75214 on 2017/7/16.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        loaders:[
            {
                test:'/\.js$/',
                exclude:__dirname+'/node_modules',
                loader:'babel-loader'
            },
            {
                test:'/\.less$/',
                exclude:__dirname+'./node_modules',
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    devtool:'source-map',
    plugins:[
        new OpenBrowserPlugin({url:'http://localhost:3000'})
    ]
};
