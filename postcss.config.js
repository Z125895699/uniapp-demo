/*
 * @Descripttion:
 * @version:
 * @Author: coderdashu
 * @Date: 2022-11-12 21:21:11
 * @LastEditors: Andy
 * @LastEditTime: 2022-11-12 22:00:21
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // "postcss-import": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      path: ['./src/*']
    },
    "postcss-px-to-viewport": {
      "viewportWidth": "375", // 视窗的宽度，对应设计稿的宽度
      // "viewportHeight": "667", // 视窗的高度
      propList:['*'],//能转化为vw的属性列表
      "unitPrecision": 5, // 指定px转换为视窗单位值的小数位数(因为无法整除)
      "viewportUnit": "vw", // 指定需要转换成的视窗单位，使用vw
      // "selectorBlackList": ['#nprogress'], // 指定不转换为视窗单位的类s
      "minPixelValue": 1, // 小于或等于1px不转换为视窗单位
      "mediaQuery": false, // 允许在媒体查询中转换px
      "exclude": /(\/|\\)(node_modules)(\/|\\)/ // 不包含node_modules文件
    },
  }
}
