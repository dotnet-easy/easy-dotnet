const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "Easy-DotNET",
  description: '.Net 全栈知识体系',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '.net,c#,doc,easy,tool' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '🏠首页', link: '/' },
      {
        text: '🎖️最全工具类', link: '/pages/52d5c3/', items: [
          { text: '设计初衷', link: '/pages/52d5c3/' },
          { text: '克隆', link: '/pages/dc4434/' },
          { text: '类型转关', link: '/pages/24d03b/' },
          { text: '日期时间', link: '/pages/cb98e6/' },
          { text: 'IO流', link: '/pages/d17650/' },
          { text: '工具类', link: '/pages/403561/' },
          { text: '语言特性', link: '/pages/a84b63/' },
          { text: '集合类', link: '/pages/987eb4/' },
          { text: 'Codec编码', link: '/pages/d68ded/' },
          { text: '文本操作', link: '/pages/b8a1fd/' },
          { text: '数学', link: '/pages/237e90/' },
          { text: '图片', link: '/pages/af25d7/' },
          { text: '网络', link: '/pages/5f9ee1/' },
          { text: 'Emoji表情', link: '/pages/ebac98/' },
        ]
      },
      {
        text: '🌈C#教程', link: '/pages/9d25e7/', items: [
          { text: 'C# 12', link: '/pages/bc24ee/' },
          { text: 'C# 11', link: '/pages/e03472/' },
          { text: 'C# 10', link: '/pages/51af19/' },
          { text: 'C# 9.0', link: '/pages/e6969f/' },
          { text: 'C# 8.0', link: '/pages/9199c7/' },
          { text: 'C# 早期版本', link: '/pages/43ca11/' },
          { text: 'C# 教程', link: '/pages/9d25e7/' },
        ]
      },
      {
        text: '🎉.NET生态', link: '/pages/b87c52/', items: [
          { text: 'ORM', link: '/pages/0ebd02/' },
          { text: '定时任务', link: '/pages/4e1237/' },
          { text: '日志', link: '/pages/e6f01f/' },
          { text: '认证与授权', link: '/pages/b457f0/' },
          { text: 'Swagger', link: '/pages/32e832/' },
          { text: '对象映射', link: '/pages/93c122/' },
          { text: '熔断重试限流', link: '/pages/965d57/' },
          { text: '缓存', link: '/pages/52cbcd/' },
          { text: '注册发现', link: '/pages/a499f8/' },
          { text: '网关', link: '/pages/a6a3ef/' },
          { text: 'GraphQL', link: '/pages/c05a45/' },
          { text: '更多', link: '/pages/f04f14/' },
        ]
      },
      { text: '🚀架构', link: '/pages/f8be69/' },
      { text: '🛠️工具|部署', link: '/pages/798a98/' },
      {
        text: '🌎开源项目', link: '/pages/614647/', items: [
          { text: '全部', link: '/pages/614647/' },
          { text: 'C#', link: '/pages/34d5ae/' },
          { text: 'Java', link: '/pages/bc455d/' },
          { text: 'Golang', link: '/pages/3cfb64/' },
          { text: 'Python', link: '/pages/e60064/' },
          { text: 'PHP', link: '/pages/a6e9c3/' },
          { text: 'Rust', link: '/pages/6a3ff4/' },
          { text: 'Nodejs', link: '/pages/613b26/' },
          { text: 'Deno', link: '/pages/7b5e0c/' },
          { text: 'CSS', link: '/pages/0ab226/' },
          { text: 'Dart', link: '/pages/96c3f5/' },
          { text: 'Shell', link: '/pages/a9ac3e/' },
          { text: 'Docker', link: '/pages/102f47/' },
          { text: 'C++', link: '/pages/71fa89/' },
          { text: 'React', link: '/pages/fcca74/' },
          { text: 'Vue', link: '/pages/56df7c/' },
          { text: '小程序', link: '/pages/7f90dd/' },
          { text: 'TypeScript', link: '/pages/900af8/' },
          { text: 'JavaScript', link: '/pages/308114/' },
          { text: '其他', link: '/pages/b25dff/' },
        ]
      },
      {
        text: '💯面试宝典', link: '/pages/86a4e2/', items: [
          { text: 'AspNetCore面试题', link: '/pages/86a4e2/' },
          { text: 'Elasticsearch面试题', link: '/pages/a567cd/' },
          { text: 'MongoDB面试题', link: '/pages/5201b9/' },
          { text: 'MySql面试题', link: '/pages/43b4dd/' },
          { text: 'Nginx面试题', link: '/pages/27153d/' },
          { text: 'RabbitMQ面试题', link: '/pages/d74e41/' },
          { text: 'Redis面试题', link: '/pages/97e5f1/' },
          { text: '设计模式', link: '/pages/51830e/' },
          { text: '微服务', link: '/pages/11e99f/' },
        ]
      },
      { text: '🧑‍💻.NET Blog', link: '/pages/a03e5f/' },
      { text: '💖赞助', link: '/pages/347fdd/' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: '786744873/easy-dotnet', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: '一个大西瓜', // 必需
      href: 'https://github.com/786744873/easy-dotnet' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:786744873@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/786744873/easy-dotnet'
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/ygdxg/easy-dotnet'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: '一个大西瓜 | MIT License | <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023013501号</a>', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode || 'd9b44aca91c27e070324d5276deedc0a'
      }
    ],

    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
