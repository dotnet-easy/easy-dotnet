const baiduCode = require('./config/baiduCode.js'); // 百度统计hm码
const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "DotNET",
  description: '.Net 全栈知识体系',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '.net,c#,doc,easy,tool' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色

    // ['meta', { name: 'wwads-cn-verify', content: '6c4b761a28b734fe93831e3fb400ce87' }], // 广告相关，你可以去掉
    // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', type: 'text/javascript' }], // 广告相关，你可以去掉
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: '🏠首页', link: '/' },
      {
        text: '🚀知识地图', link: '/pages/f8be69/', items: [
          { text: '知识地图', link: '/pages/f8be69/' },
          {
            text: '源码脑图', link: '/pages/8448ab/', items: [
              { text: '总览', link: '/pages/8448ab/' },
              { text: 'Program', link: '/pages/372b2d/' },
              { text: 'WebApplication', link: '/pages/cb2fbc/' },
              { text: 'Host主机', link: '/pages/78c443/' },
              { text: 'WebHost主机', link: '/pages/840f86/' },
              { text: '依赖注入', link: '/pages/0d115d/' },
              { text: 'Autofac', link: '/pages/e2d1de/' },
              { text: 'Middleware中间件', link: '/pages/899977/' },
              { text: 'RateLimiter限制速率', link: '/pages/5991be/' },
              { text: '响应缓存、请求解压缩', link: '/pages/bacc57/' },
            ]
          },
        ]
      },
      {
        text: '🎖️最全工具类', link: '/pages/easytool/', items: [
          { text:'Easy-Tool',link:'/pages/easytool/',items:[
            { text: '设计初衷', link: '/pages/easytool/' },
            { text: '克隆', link: '/pages/dc4434/' },
            { text: '类型转换', link: '/pages/24d03b/' },
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
          ]},
          {text:'Util',link:'/pages/util/',items:[
            {text:'早期版本',link:'/pages/571c15/'},
            {text:'功能介绍',link:'/pages/912c9b/'},
            {text:'版本',link:'/pages/util/'},
          ]}          
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
          { text: '版本', link: '/pages/380473/' },
        ]
      },
      {
        text: '🎉.NET微服务', link: '/pages/b87c52/', items: [
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
      {
        text: '🛠️工具|部署', link: '/pages/e50dff/', items: [
          {
            text: 'Docker', link: '/pages/e50dff/', items: [
              { text: '简介', link: '/pages/e50dff/' },
              { text: 'Adminer', link: '/pages/3597e2/' },
              { text: 'Apisix', link: '/pages/fbe42b/' },
              { text: 'Apollo', link: '/pages/272684/' },
              { text: 'Cassandra', link: '/pages/01958e/' },
              { text: 'Cerebro', link: '/pages/7e58c5/' },
              { text: 'ClickHouse', link: '/pages/3b4977/' },
              { text: 'Consul', link: '/pages/3d230b/' },
              { text: 'EasyMock', link: '/pages/ca4b88/' },
              { text: 'Elasticsearch', link: '/pages/18fff0/' },
              { text: 'Emqx', link: '/pages/d93c0b/' },
              { text: 'FastDFS', link: '/pages/7bfded/' },
              { text: 'Flink', link: '/pages/53b154/' },
              { text: 'Gitlab', link: '/pages/83a3e2/' },
              { text: 'Jenkins', link: '/pages/f90f99/' },
              { text: 'Jrebel', link: '/pages/8e9d93/' },
              { text: 'MariaDB', link: '/pages/ee069d/' },
              { text: 'MySQL', link: '/pages/cff07b/' },
              { text: 'Percona', link: '/pages/862a97/' },
              { text: 'Phpmyadmin', link: '/pages/a560de/' },
              { text: 'PostgreSQL', link: '/pages/230ca1/' },
              { text: 'Redis', link: '/pages/be7f5d/' },
            ]
          },
          {
            text: 'Linux', link: '/pages/aa794b/', items: [
              { text: '查看Linux系统信息', link: '/pages/aa794b/' },
              { text: 'CentOS7调整磁盘分区', link: '/pages/2cbf35/' },
              { text: 'IO压测', link: '/pages/42cda4/' },
              { text: '图形化监控工具Cockpit', link: '/pages/71dd10/' },
            ]
          },
        ]
      },
      {
        text: '🌎生态', link: '/pages/awesome-dotnet/', items: [
          { text: '总览', link: '/pages/awesome-dotnet/' },
          { text: '列表', link: '/pages/application-frameworks/', items: [
            { text: '算法数据结构', link: '/pages/Algorithms-and-Data-Structures/' },
            { text: 'API', link: '/pages/api/' },
            { text: '应用框架', link: '/pages/application-frameworks/' },
            { text: '应用模板', link: '/pages/application-templates/' },
            { text: '操作系统', link: '/pages/os/' },
            { text: '工作流', link: '/pages/workflow/' },
            { text: '入门套件', link: '/pages/start/' },
            { text: '示例', link: '/pages/exanples/' },
            { text: '人工智能', link: '/pages/artificial-intelligence/' },
            { text: '程序集', link: '/pages/assembly-manipulation/' },
            { text: 'Assets', link: '/pages/assets/' },
            { text: '认证授权', link: '/pages/authentication-authorization/' },
            { text: 'Blazor', link: '/pages/blazor/' },
            { text: '区块链', link: '/pages/blockchain/' },
            { text: '书籍', link: '/pages/book/' },
            { text: '自动构建', link: '/pages/build-automation/' },
            { text: '报表', link: '/pages/business-intelligence/' },
            { text: '缓存', link: '/pages/caching/' },
            { text: '日历', link: '/pages/calendar/' },
            { text: '聊天', link: '/pages/chat/' },
            { text: 'CLI', link: '/pages/cli/' },
            { text: 'CLR', link: '/pages/clr/' },
            { text: 'CMS', link: '/pages/cms/' },
            { text: '代码分析和指标', link: '/pages/code-analysis-and-metrics/' },
            { text: '代码片段', link: '/pages/code-snippets/' },
            { text: '压缩', link: '/pages/compression/' },
            { text: '持续集成', link: '/pages/continuous-integration/' },
            { text: '密码学', link: '/pages/cryptography/' },
            { text: '数据库', link: '/pages/database/' },
            { text: '数据库驱动', link: '/pages/database-drivers/' },
            { text: '日期时间', link: '/pages/datetime/' },
            { text: '反编译', link: '/pages/decompilation/' },
            { text: '部署', link: '/pages/deployment/' },
            { text: 'DirectX', link: '/pages/directx/' },
            { text: '分布式计算', link: '/pages/distributed-computing/' },
            { text: 'DLR', link: '/pages/dlr/' },
            { text: '文档', link: '/pages/documentation/' },
            { text: '电商支付', link: '/pages/e-commerce-and-payments/' },
            { text: '模拟器', link: '/pages/emulators/' },
            { text: '环境管理', link: '/pages/environment-management/' },
            { text: 'ETL', link: '/pages/etl/' },
            { text: '事件消息', link: '/pages/event-aggregator-and-messenger/' },
            { text: 'Exception', link: '/pages/exceptions/' },
            { text: '扩展', link: '/pages/extensions/' },
            { text: '函数式编程', link: '/pages/functional-programming/' },
            { text: '游戏引擎', link: '/pages/game/' },
            { text: 'GIS', link: '/pages/GIS/' },
            { text: 'Git工具', link: '/pages/git-tools/' },
            { text: '绘图', link: '/pages/graphics/' },
            { text: 'GraphQL', link: '/pages/graphql/' },
            { text: 'GUI', link: '/pages/gui/' },
            { text: 'HTML-CSS', link: '/pages/html-css/' },
            { text: 'HTTP', link: '/pages/http/' },
            { text: 'IDE', link: '/pages/ide/' },
            { text: '图片处理', link: '/pages/image-processing/' },
            { text: '安装工具', link: '/pages/install-tools/' },
            { text: '交互式编程', link: '/pages/interactive-programming/' },
            { text: '国际化', link: '/pages/internationalization/' },
            { text: '互操作性', link: '/pages/interoperability/' },
            { text: 'IoC', link: '/pages/ioc/' },
            { text: 'JS引擎', link: '/pages/javascript-engines/' },
            { text: '日志', link: '/pages/logging/' },
            { text: '机器学习和数据科学', link: '/pages/machine-learning-and-data-science/' },
            { text: 'Markdown', link: '/pages/markdown/' },
            { text: '邮件', link: '/pages/mail/' },
            { text: '数学', link: '/pages/mathematics/' },
            { text: '媒体', link: '/pages/media/' },
            { text: '指标', link: '/pages/metrics/' },
            { text: '微型框架', link: '/pages/micro-framework/' },
            { text: '最小化器', link: '/pages/minification/' },
            { text: 'MVVM', link: '/pages/mvvm/' },
            { text: '网络', link: '/pages/networking/' },
            { text: '对象映射', link: '/pages/object-to-object-mapping/' },
            { text: 'Office', link: '/pages/office/' },
            { text: 'OpenAI', link: '/pages/openai/' },
            { text: 'ORM', link: '/pages/orm/' },
            { text: '包管理器', link: '/pages/package-management/' },
            { text: 'PDF', link: '/pages/pdf/' },
            { text: '性能分析工具', link: '/pages/profiler/' },
            { text: '协议', link: '/pages/protocols/' },
            { text: '推送通知', link: '/pages/push-notifications/' },
            { text: 'SQL构建器', link: '/pages/query-builders/' },
            { text: '消息队列', link: '/pages/queue/' },
            { text: 'RPC', link: '/pages/rpc/' },
            { text: '响应式编程', link: '/pages/reactive-programming/' },
            { text: '实时通信', link: '/pages/real-time-communications/' },
            { text: '正则表达式', link: '/pages/regular-expression/' },
            { text: '任务调度', link: '/pages/scheduling/' },
            { text: 'SDK和API', link: '/pages/sdk-api/' },
            { text: '搜索引擎', link: '/pages/search/' },
            { text: '序列化', link: '/pages/serialization/' },
            { text: 'SMS', link: '/pages/sms/' },
            { text: '状态机', link: '/pages/state-machines/' },
            { text: '静态站点生成', link: '/pages/static-site-generators/' },
            { text: '强命名', link: '/pages/strong-naming/' },
            { text: '风格指南', link: '/pages/style-guide/' },
            { text: '模板引擎', link: '/pages/template-engine/' },
            { text: '测试', link: '/pages/testing/' },
            { text: '工具', link: '/pages/tools/' },
            { text: '交易', link: '/pages/trading/' },
            { text: 'UI自动测试', link: '/pages/ui-automation/' },
            { text: 'Visual Studio 插件', link: '/pages/visual-studio-plugins/' },
            { text: 'Web浏览器', link: '/pages/web-browsers/' },
            { text: 'Web框架', link: '/pages/web-frameworks/' },
            { text: 'WebServers', link: '/pages/web-servers/' },
            { text: 'WebSocket', link: '/pages/websocket/' },
            { text: 'Windows服务', link: '/pages/windows-services/' },
            { text: 'WPF', link: '/pages/wpf/' },
            { text: '解析器', link: '/pages/parser-library/' },
            { text: '源码生成', link: '/pages/source-generator/' },
            { text: '其他', link: '/pages/misc/' },
            { text: '资源', link: '/pages/resources/' },
          ]
          },
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
    logo: '/img/logo2.png', // 导航栏logo
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
      name: 'bjrwx888', // 必需
      href: 'https://github.com/bjrwx888/dotnet' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:154400692@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/bjrwx888/dotnet'
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
      copyrightInfo: 'bjrwx888 | MIT License | <a href="https://beian.miit.gov.cn/" target="_blank">备案信息</a>', // 博客版权信息，支持a标签
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
