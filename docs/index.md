---
home: true
heroImage: /img/logo2.png
heroText: .NET
tagline: 🚀.Net 全栈知识体系。完全开源，欢迎一起参与共建生态
actionText: 开始使用 →
actionLink: /pages/easytool/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 完全开源
    details: 社区支持、高透明度、高灵活性、高安全性、跨平台、高可扩展性和高可靠性
  - title: 生态建设
    details: 推动.NET平台技术发展，提高.NET应用程序的质量和性能，为企业和开发者提供更好的开发体验和更广阔的市场机遇
  - title: 一起共创
    details: 邀请您一起参与共创，提高项目的质量和可靠性，促进开发者的成长和技能提升，同时帮助更多的.netor

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
notices: # 可选的
  - id: 欢迎加入.NET技术生态社群
    title: 🚀 欢迎加入.NET技术生态社群！
    content: '<div><p>🤝诚挚的邀请每一位开发者🤝</p><ul><li>一起参与开源项目</li><li>一起共建.NET生态</li><li>一起交流讨论问题</li><li>一起学习成长</li><li>🎶欢迎大家加入🎶</li></ul></div><p style="text-align: center;"><a href="/#⚡-反馈与交流">点我加入</a></p>'
    isHtmlContent: true
---

<Notice :data="$frontmatter.notices"/>

<iframe width="100%" height="400" src="https://time.graphics/embed?v=1&id=593132" frameborder="0" allowfullscreen></iframe>
<p align="center">
  <a class="become-sponsor" href="/pages/donate/">支持这个项目</a>
</p>

<style>
.home-wrapper .banner .banner-conent .hero h1 {
    /* --tw-text-opacity: 1;
    color: rgb(81 43 212 / var(--tw-text-opacity)); */

    font-size: 4.25rem;
    font-family: "Space Grotesk",Helvetica,Arial,sans-serif;
    text-decoration-thickness: initial;
    text-transform: none;
    -webkit-text-fill-color: transparent;
    background: var(--gradient-purple-magenta);
    --gradient-purple-magenta: linear-gradient(128.87deg,#512bd4 14.05%,#d600aa 89.3%);
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 36px;
    padding-top: 3rem;
}
.become-sponsor {
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>

<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/dt/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>
</p>


## 🎖快速访问
::: cardList 3
```yaml
# - name: OpenHarmony
#   desc: 开放原子开源基金会
#   link: https://docs.openharmony.cn/pages/000000/
#   bgColor: '#f1f1f1'
#   textColor: '#2A3344'
- name: .NET官网
  desc: 🚀构建新式应用和强大的云服务的免费开放源代码跨平台框架。
  link: https://dotnet.microsoft.com/zh-cn/?WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
- name: ASP.NET 文档
  desc: 使用 ASP.NET Core 创建快速、安全、跨平台和基于云的 Web 应用和服务。 
  link: https://learn.microsoft.com/zh-cn/aspnet/core/?view=aspnetcore-8.0&WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
- name: .NET 开发者社区
  desc: 建立连接!与全球数百万开发人员一起构建应用并参与 .NET。
  link: https://dotnet.microsoft.com/zh-cn/platform/community?WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
- name: .NET API 目录查询
  desc: .NET API Catalog
  link: https://apisof.net/catalog?WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
- name: .NET 在线源码
  desc: .NET Source Browser
  link: https://source.dot.net/?WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
- name: Visual Studio 文档
  desc: 宇宙第一IDE
  link: https://learn.microsoft.com/zh-cn/visualstudio/windows?WT.mc_id=DT-MVP-5004310
  bgColor: '#9415bf'
  textColor: '#ffffff'
```
:::


## ⚡ 反馈与交流

在使用过程中有任何问题和想法，请给我提 [Issue](https://github.com/bjrwx888/dotnet/issues)。
你也可以在Issue查看别人提的问题和给出解决方案。

或者加入我们的交流群：参与贡献可以榜上留名💯
<!--
<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img src="/img/qrcode/*.png" class="no-zoom" style="width:120px;margin: 10px;">
        <p>DotNET 微信群(添加我微信备注"进群")</p>
      </td>
      <td align="center" valign="middle">
        <img :src="$withBase('/img/qrcode/qqq.png')" alt="群号: " class="no-zoom" style="width:120px;margin: 10px;">
        <p>DotNET QQ群: </p>
      </td>
    </tr>
  </tbody>
</table>
-->

<!-- AD -->
<!-- <div class="wwads-cn wwads-horizontal page-wwads" data-id="136"></div> -->
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>
