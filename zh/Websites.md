### 说明
- V3.4.2 以后 `GitBook` 类网站将自动适配
- V3.5.3 以后用户可以分享自己的网站配置到 [Steward 官方 Websites 仓库](https://github.com/Steward-launcher/steward-websites)
- V3.6.1 以后新增全局 Action 配置[更新说明](http://bbs.oksteward.com/topic/5c1f4ab08863020a452f57bc) 

### Website 配置的创建与安装
你可以在设置 --> Websites 里手动创建，也可以在**页面模式**下使用 `wsm create` 来创建

`wsm install` 可以查找并安装来自 Steward 官方 Websites 仓库的 Website 配置，`wsm uninstall` 则用于卸载

### 操作
- navs, trigger: `/`
- outline, trigger: ``` ` ```
- anchors, trigger: `#`
- actions, trigger: `;`

#### Website 的数据结构
```javascript
{
  "author":"solobat", // required
  "host":"github.com", // required, `minimatch`
  "icon":"https://assets-cdn.github.com/favicon.ico",
  // 生成站点导航, trigger: '/' [not required]
  "navs":"header ul a",
  // 指定大纲范围, trigger: '`'
  "outlineScope":".markdown-body,.gollum-markdown-content", // [jquery] css selector
  // 对 `navs` 的补充, trigger: '/' [not required]
  "paths":[
    {
      "title":"github",
      "urlPattern":"/"
    },
    {
      "title":"logout",
      "urlPattern":"/logout"
    },
    {
      "title":"profile",
      "urlPattern":"/{{user}}"
    }],
  "title":"Github",
  // paths 中的变量赋值
  "vars":{
    "user":"solobat"
  },
  "version":4, // rqeuired
  // 自定义的锚点，trigger: '#'
  "anchors":[
    {
      "selector":".xxx",
      "title":"xxx"
    }
  ],
  // 自定义动作，trigger: ';'
  "actions":[
    {
      "actionType":"click",
      "pattern":"/*/*", // `minimatch`
      "selector":".get-repo-btn:nth-child(2)", // css[jquery] selector
      "title":"Download Zip"
    },
    {
      "actionType":"copy",
      "extend":{
        "template":"git clone {{text}}" // string template for copy
      },
      "pattern":"/*/*",
      "selector":".input-sm.form-control",
      "title":"Copy Git URL"
  }]
}
```

#### 全局 Action 配置
> global action 可以独立于 website 而存在，具体查看[更新说明](http://bbs.oksteward.com/topic/5c1f4ab08863020a452f57bc)
```javascript
{
    "title":"Copy title as a markdown link", // required, 标题
    "actionType":"copy", // required, action 类型，见下方 ActionType 定义
	"selector": "", // optional, css[jquery] 选择器
    "extend":{ // optional，扩展字段，对不同 actionType 有不同配置
      "template":"[{{title}}]({{url}})", // actionType 为 copy 时的模版定义
	  "scope": "visible" // selector 的辅助字段， 待扩展
    },
    "enable":true // 是否启用,
	"domain": "minimatch" // TODO
  }
```

#### ActionType
```javascript
{
    CLICK: 'click', // 点击
    HIDE: 'hide', // 隐藏
    SHOW: 'show', // 显示
    COPY: 'copy', // 拷贝
    PAGE_PROTECT: 'pageprotect',
    TOGGLE_TODO: 'toggleTodo'
}
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