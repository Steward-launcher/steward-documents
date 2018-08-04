> 此功能最低要求 3.1 如低于此版本，[请升级](http://github.com/solobat/Steward/) 到最新版本。

***

目录
---

- [含义](#含义)
- [创建](#创建)
- [使用](#使用)
- [图示](#图示)
- [动图](#动图)
- [注意](#注意)

含义
---
> workflow 就是工作流，在 Steward 里就是可以自定义的一系列命令的组合，命令相对于单独使用时有增强

创建
---
在设置 -> workflows 面板点击`+ New Workflow`按钮，然后在右侧的表单中填写，其中`Title`和`Content`字段是必填的

`Content` 的填写需要遵循一点简单的语法:
* 格式： `command|numbers|shift`
    * `command` 是必填的，由 `trigger` + `空格` + `query` 组成，注意不要忘记空格
    * `numbers` 是可选的，表示前面的 `command` 所将作用的条目的数量，只对 `trigger` 后面带 `batch` 图标的 command 有效
        * `from-to` 形式，将作用于从 `from` 条到第 `to` 条，如 `bm |1-8` ，注意是从 `1` 开始计数
        * `n` 形式，将作用于第 `n` 条，如 `po |2`，也是从 `1` 开始计数
        * `all` 形式，将作用于所有匹配的条目，如 `bk |all` ，对 `all` 的使用一定要注意，否则不小心可能会打开一大堆标签页
    * `shift` 是可选的，表示使用 `command` 的 `+ shift` 操作，只对 `trigger` 后面带 `⇧` 图标的 command 有效，比如`site |shift`，通常 `shift` 不需要与 `numbers` 同时存在

> 更强大的是，Workflow 还能组合使用，即一个 Workflow 里面还能执行另一个 workflow，比如：

```
wf 禁用扩展
wf 屏蔽网站
```

![Imgur](https://i.imgur.com/xk6seE8.png)

使用
---
在命令框中输入`wf `将列出所有的 `workflow`, 选中后按 `Enter/Return` 将执行 `workflow`, 完成后将会有 `Toast` 显示执行的各条命令

图示
---
![Imgur](https://i.imgur.com/SJOUI7a.png)
![Imgur](https://i.imgur.com/ccDCpsn.png)

注意
---
由于 workflow 包含各种批量的操作，因此创建 workflow 时一定要谨慎使用 `numbers`
