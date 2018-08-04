目录
---
- [离线安装](#离线安装)
- [快捷键](#快捷键)
- [授权服务](Authorization Service.md)

***

离线安装
---

- 将 http://owsjc7iz3.bkt.clouddn.com/steward-version.crx 的**version**替换为具体的版本号即可(不带v)
- 出入安全考虑，不建议从其它平台下载离线安装包


- Widows 系统
  - 将下载的 `steward.crx` 拖拽到  `chrome://extensions/` 即可。

- MAC OS 系统
  > 参考 [将非官方扩展程序加入 Chrome 的白名单](https://hencolle.com/2016/10/16/baidu_exporter/)
  - 下载 https://gist.github.com/Explorare/be3dd598289252698cd37bca04abd0fe#file-com-google-chrome-mobileconfig
  - 打开添加 `<string>dnkhdiodfglfckibnfcjbgddcgjgkacd</string>` 并保存
  - 双击此文件，按照弹出的提示点击 `继续` → `安装（输入电脑密码）`
  - 重启浏览器即可！

> 在线下载 Chrome Webstore 方式：
- 进入 https://chrome-extension-downloader.com/ 复制 `https://chrome.google.com/webstore/detail/dnkhdiodfglfckibnfcjbgddcgjgkacd` 到输入框，下载后拖拽到 `chrome://extensions` 即可。

快捷键
---
- 可编辑的快捷键：
   - `打开popup弹框`（默认 Mac: `command + k`, windows/linux: `ctrl + k` )
   - `在页面内打开弹框` （默认 Mac: `command + j`, windows/linux: `ctrl + j` )

![Imgur](https://i.imgur.com/RQBJZu9.png)

授权服务
---
关于 授权服务 的 FAQ，请 [访问这里](FAQ.md)
