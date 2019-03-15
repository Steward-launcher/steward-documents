这里是 `新手入门`，仅针对不是很了解 `Steward` 或 `Steward Plus` 用户的 `入门级教程` ；如果想寻求常见问题，请 [前往这里](FAQ.md) 。

***

目录
---

- [什么是命令启动器](#什么是命令启动器)
- [含义](#含义)
- [与其它同类扩展的区别](#与其它同类扩展的区别)
- [功能](#功能)
- [新标签模式](#新标签模式)
- [弹出框模式](#弹出框模式)
- [页面模式](#页面模式)
- [自定义快捷键](#自定义快捷键)
- [自定义命令](#自定义命令)
- [什么是 workflow](#什么是workflow)
- [如何使用 workflow](#如何使用workflow)
- [壁纸相关](#壁纸相关)

***

什么是命令启动器
---
命令启动器由`输入框` + `下拉列表` 组成，通过 `命令(trigger)` + `查询(query)` + `点击/回车(click/enter/return)` 的组合来实现一些功能的快捷操作，比如查找书签并打开

<img src="https://i.imgur.com/yuleGAG.png" width="500" />

含义
---
Steward的灵感来自于Mac上的效率神器Alfred，两者同是管家的意思    

Steward Plus 为占用 New Tab 的 Steward，让你更便捷的使用

与其它同类扩展的区别
---
Steward 的特点在于：
- 更丰富的插件
- 提供插件 api，允许用户自己开发插件
- spm 插件管理器
- 三种使用模式
- 可以自定义 trigger
- 新标签模式使 Steward 拥有更多的可能
- 强大的 workflows，自定义属于你的工作流
- 更积极的开发节奏

功能：
---
- 主要功能介绍， [请看这里](features.md)

- 全部功能一览
  ![功能一览](http://img.oksteward.com/Steward%E5%8A%9F%E8%83%BD%E8%A1%A8.png)
  [查看全图](http://img.oksteward.com/Steward%E5%8A%9F%E8%83%BD%E8%A1%A8.png)

弹出框模式
---
> 通过点击扩展图标或使用快捷键弹出，可以使用所有 browser 插件，特点是轻量、快速，不依赖页面；
> 默认快捷键: `Windows: Ctrl + k` `Mac: Command + k`     

页面模式
---
> 在每个页面内通过快捷键唤出，可以使用所有 browser 插件以及页面插件，特点是轻量、快速，能使用页面对应的插件；
> 默认快捷键: `Windows: Ctrl + j` `Mac: Command + j`   

新标签模式
---
> 这是 Steward Plus 独有的模式，在新标签页可以使用所有 browser 插件，特点是可以一直操作，还有壁纸功能。

自定义快捷键
---
[Steward 快捷键设置](http://bbs.oksteward.com/topic/5a4c77c90f590c684784a3b1)
> 前往 `chrome://extensions/shortcuts` 扩展快捷键设置页面，击弹出可修改

![Imgur](https://i.imgur.com/ZEKLS4C.png)

自定义命令
---
> 命令的trigger基本上都是可以自行定义的，在设置 -> plugins面板，如果trigger右侧有小图标，hover上去会有提示

![Imgur](https://i.imgur.com/8K6buyw.png)

插件
---
Steward 自带一系列插件，足以帮助你完成大部分浏览器操作；同步 Steward 开放插件 api，只需要几行代码就能自定义自己的插件。

Steward 提供 `spm` 命令，用来查看安装、卸载第三方插件。

什么是 workflow
---
> workflow就是工作流，在Steward里就是可以自定义的一系列命令的组合，命令相对于单独使用时有增强，详见[Workflow](Workflows.md)

如何使用 workflow
---
> 首先是创建 workflow，在设置 -> workflows 面板
> 创建好以后通过 `trigger: wf` 来使用

壁纸相关
---
> 壁纸是使用的 `bing.com` 的 api，提供自动更换、保存、浏览设置、下载等功能
