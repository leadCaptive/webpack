# 一般文件目录
* dist是最终文件生成的目录
* lib 一些公共的类库
* node_modules目录是通过npm安装的一些模块的目录所在，如jquery，vue等一些框架
* src 是源码目录，开发时的文件都放在此目录下
* index.html 应用入口页面
* package.json项目描述文件
* README.md 项目说明文件
* webpack.config.js wepack工具的配置文件
* .babelrc 我的babel配置在这里

### loaders之 预处理
css-loader 处理css中路径引用等问题
style-loader 动态把样式写入css
sass-loader scss编译器
less-loader less编译器
postcss-loader scss再处理

``` bash
npm install --save -dev css-loader style-loader sass-loader less-loader postcss-loader
```
``` js
module: {
  loaders: [
    {test: /\.css$/, loader: "style!css?sourceMap!postcss"},
    {test: /\.less$/, loader: "style!css!less|postcss"},
    {test: /\.scss$/, loader: "style!css!sass|postcss"}
  ]
}
```

### loaders之 js处理
babel-loader
jsx-loader
``` bash
npm install --save-dev babel-core babel-preset-es2015 babel-loader jsx-loader
```
新建一个名字为.babelrc的文件
``` js
{
  "presets": ["es2015","react"],
  "plugins":["antd"]
}
```

### loaders之 图片处理
url-loader
``` bash
npm install --save-dev url-loadr
```
``` js
module: {
  loaders: [
    {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
  ]
}
```
### loaders之 文件处理
file-loader
``` bash
npm install --save-dev file-loader
```
``` js
module: {
  loaders: [
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
      },
  ]
}
```
### loaders之 json处理
json-loader
``` bash
npm install --save-dev json-loader
```
``` js
module: {
  loaders: [
    { test: /\.html$/,loader: 'raw'},
  ]
}
```
