### 说明
- V3.4.2 以后 `GitBook` 类网站将自动适配
- V3.5.3 以后用户可以分享自己的网站配置到 [Steward 官方 Websites 仓库](https://github.com/Steward-launcher/steward-websites)

### Website 配置的创建与安装
你可以在设置 --> Websites 里手动创建，也可以在**页面模式**下使用 `wsm create` 来创建

`wsm install` 可以查找并安装来自 Steward 官方 Websites 仓库的 Website 配置，`wsm uninstall` 则用于卸载

#### Website 的数据结构
```javascript
{
    "author": "solobat", // required
    "version": 1, // required
    "host": "sspai.com", // required
    "icon": "https://cdn.sspai.com/sspai/assets/img/favicon/icon.ico",
    // Specify the area to extract the outline
    "outlineScope": ".article-content", // [jquery] css selector
    // Generate navigations
    "navs": "nav a", // [jquery] css selecotr
    // Supplement to `navs`
    "paths": [
        {
            "title": "首页",
            "urlPattern": "/" // path
        },
        {
            "title": "个人主页",
            "urlPattern": "/user/784469/posts"
        }
    ],
    "title": "少数派"
},
```

### 图示
**新增站点**
![Imgur](https://i.imgur.com/2DpjCf5.png)

**示例站点**
![Imgur](https://i.imgur.com/rM9ahzJ.png)

**页面模式下使用**
![Imgur](https://i.imgur.com/9xtWxcU.png)

**outline 配置**
![Imgur](https://i.imgur.com/m6OByqb.png)

**outline 使用**
![Imgur](https://i.imgur.com/qlGrypv.png)