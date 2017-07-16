/**
 * Created by 75214 on 2017/7/16.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');

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
                exclude:'./node_modules',
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    }
};
