# vul-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Syntax Error: TypeError: this.getOptions is not a function
### 該錯誤是css預編譯的loader與webpack 4 不兼容導致的。嘗試升級到webpack 5 或者降級sass-loader / less-loader / postcss-loader 的版本號到上一個主版本號。
# 移除sass-loader@11
yarn remove  sass-loader -D
# 安裝上一個主版本的sass-loader
yarn add sass-loader@10.1.1 -D
