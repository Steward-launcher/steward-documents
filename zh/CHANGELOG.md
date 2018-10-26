#### v3.5.4
- 优化 Bookmark 插件性能；
- 将 jenkins / coin / times 插件转至 plugins 仓库，请使用 spm 安装；
- plugin api 增强；
- 修复一些 bug;

#### v3.5.3
- 新增 wsm 插件，wsm install / wsm uninstal 命令安装、卸载 website 配置；
- website 社区驱动，参考: http://bbs.oksteward.com/topic/5bc065860f590c684784a411
- 优化页面模式的 outline 功能。

#### v3.5.2
- 新增 spm 插件，spm install / spm uninstal 命令安装、卸载插件；
- 更新 plugin api。

#### v3.5.1
- 开放插件 api, 允许用户自行编写插件，在 设置 --> 高级 --> 插件编辑中使用；
- 优化包大小；
- New Tab 底部按钮组件化配置。

#### v3.5
- 为 newtab 新增时钟/快捷方式组件，在 设置 --> 通用 --> NewTab 设置中选择使用；
- 重构。

#### v3.4.13
- website 分享优化，支持分享选中文字 ;
- website 分享根据使用排序.

#### v3.4.12
- 重新设计 Browser Alfred New Tab 模式，请访问 lai.app;
- 壁纸操作优化。

#### v3.4.11
- websites url 匹配支持 minimatch;
- nt 命令 bug 修复;
- 因 https 证书过期，移除新浪 short url 功能.

#### v3.4.10
- websites 支持 vuepress 站点;
- 文档链接更新;
- coins 支持缓存，coin 支持选择交易所缓存.

#### v3.4.9
- 新增 coin market 插件，查询最新的数字货币价格，包括coin 以及 coins命令；
- 一定程度上优化 dl 命令性能问题；
- 新增繁体中文语言包。

#### v3.4.8
- 新增 pixabay 壁纸来源；
- 更好的国际化支持，一些样式优化；
- 移除 google 统计以提高性能。

#### v3.4.7
- 额外提供 10 个快捷键，以方便自定义命令快捷方式；
- yd 插件修复，以 google 翻译代替有道词典；
- 页面模式的分享列表可以在选项 --> Advanced 里自定义。

#### v3.4.6
- 为网站自动配置 Websites 功能，默认开启；
- 页面模式下提供当前页面的常用操作以及信息，以单引号 ' 为 trigger;
- 提供当前页面的二维码图片及短网址功能，以单引号 ' 为 trigger，默认开启；
- Websites 生成社会化分享链接，以 @ 为 trigger, 默认开启;
- 通过 wd 命令提供单词小卡片常用选项。

#### [v3.4.5](http://bbs.oksteward.com/topic/5ae6e5530f590c684784a3db)
- 通过 css selector 给特定页面添加锚点，快速定位；
- 主题可以使用 color-picker 编辑；
- 其它一些优化以及问题修复。

#### v3.4.4.1
- 修复 wp 命令的 Bug。

#### [v3.4.4](http://bbs.oksteward.com/topic/5ad835aa0f590c684784a3d6)
- 新增 **Nasa** 以及 **Desktoppr** 壁纸来源；
- pocket 重新授权及优化；
- 体验优化及 Bug 修复。

#### [v3.4.3](http://bbs.oksteward.com/topic/5ac1cdeb0f590c684784a3d1)
- 支持禁用部分插件;
- `wp` 命令支持上传壁纸到微博图床，壁纸来源中添加 favorites;
- 搜索支持批量, 页面模式搜索提升;
- 更多 Chrome URL 添加。

#### v3.4.2
- 自动添加 **GitBook** 类站点的 Websites 配置;
- `Shift + Enter` 打开 Pocket 文章的原文链接;
- `bm` / `his` 命令 `query` 为 / 时带出 `host`.

#### v3.4.1
- 存储最近的命令：输入框为空时，按向上键将显示最近20条命令记录，可以设置 -> General 面板关闭/开启；
- `Ctrl + p` / `Ctrl + n` 对应 `up` / `down` 操作。

#### v3.4
- Advanced 面板添加导出、导入配置功能;
- Backup 命令下载配置文件。

#### v3.3.3
- 支持非链接导航.

#### v3.3.2
- 优化 Websites Navs 提取；
- 修复 Websites Paths 的 bug.

#### v3.3.1
- Websites 新增 outline 功能;
- Websites path 优化。

#### v3.3
- 新增 Websites 配置面板。

#### v3.2.9
- 添加随机壁纸开关选项;
- 优化 pocket 插件列表显示逻辑。

#### v3.2.8
- Page 模式主题优化;
- `wps` 命令 — 快速选择壁纸;
- `wfe` 命令 - 快速操作 workflow 里的单条命令.

#### v3.2.7
- 新增主题编辑功能。
- 新标签页新增毛玻璃效果选项，默认关闭，使用 `nt ` 命令可切换。

#### v3.2.6
- 修复 Bug

#### v3.2.5
- tag 不再是必需的，`notes` 支持搜索功能;
- tab 锁定命令，trigger 为 `tabp`, 支持 `Shift + Enter` 与 批量操作;
- 增强计算器的功能;
- yd 查词后添加到单词小卡片.

#### v3.2.4
- 新增日记插件，像聊天一样的写日记, trigger: `:`, 下载日记 trigger: `diary`
- 更好的文案.

#### v3.2.3
- wp 命令提供壁纸下载操作;
- 设置 new tab 标题源: `ntm` 命令;
- times插件, trigger: `ts` | `tsd`;
- 新增「 鼠标 hover 时选中下拉项 」，默认关闭;
- 壁纸命令显示来源.

#### v3.2.2
- 壁纸源可以在「设置 -> Genenral -> 壁纸来源」 里选择;
- newtab 插件，trigger 为 `nt`，用于 Steward 新标签页的一些设置;
- 搜索引擎应该根据使用次数排序;
- 搜索引擎格式优化，可以使用 `%s` 做为占位符。

#### v3.2.1
- 在 workflow 中可以包含别的 workflow，即 workflow 可以自由组合;
- workflow 优化；
- help 命令支持搜索。

#### v3.2
- 在壁纸来源中添加 picsum.photos，目前已有1000来张;
- 新增壁纸插件, 命令 trigger: wp，提供刷新、保存、添加壁纸链接功能；
- New Tab UI 优化及其它一些样式优化；
- todo 完成后自动加入 done 列表，使用 done 命令查看；
- off 命令允许批量操作；
- 修复某些命令中文汉字搜索不支持的问题。

#### v3.1.11
+ pocket 空查询缓存优化，以后可以加入 `Random` 列表了;
+ 壁纸可自行通过链接添加;
+ trigger 修改时将禁止重复；
+ 搜索引擎删除体验优化，删除后自动将引擎格式复制到剪切板。

#### v3.1.10
* 修复 workflow 的bug
* 使用 random 命令时自动切换到 random 模式
* 优化 New Tab 体验，避免误操作

#### v3.1.9
修复 workflow 的 Bug.

#### v3.1.8
- 插件图标更换；
- note 插件添加 `notes` 命令，显示所有的 note，按 `Shift + Enter` 时删除单条 note;
- note / todo 插件 storage 使用限制提醒;
- workflow 最大只能创建 **20** 条。

#### v3.1.7
- 优化 New Tab UI样式
- 新增 Steward 英文版文档

#### v3.1.6
- 解决 New Tab 背景图不适配的问题
- 更新 About 信息，添加**[知识星球](https://t.xiaomiquan.com/zFAyniY)**

#### v3.1.5
- 更友好的命令提示;
- 优化 `help` 命令。

#### v3.1.4
- 更新文档链接；
- 新增 `About Plugin`，包含 `about` 和 `up` 链接，具体查看 [About Steward](plugins/browser/About Steward.html);
- 优化 `New Tab` 背景图显示；
- 其它一些改进；

#### v3.1.3
- 命令框里打完字按 ESC 可以全消除;
- 更丰富的文档说明：使用 help 命令时，Shift + Enter/Click可以打开选中命令的帮助文档.

#### v3.1.2
- 新增random功能，在标签页随机使用通过trigger: random添加的命令

#### v3.1.1
- 新增workflow的删除功能;
- 调整todo的功能;
- 新增tabm命令，用来移动选中的标签；
- 搜索引擎可以自定义#11;

#### v3.1
- 新增workflow面板，创建、编辑workflow，以及新增执行workflow的插件，trigger为wf;
- 新增帮助文档

#### v3.0.2
- 新增tabc命令，关闭一个或多个匹配的tab;
- bm/site/his命令，新增shift keypress，可以同时打开一组tab;
- ext命令的shift keypress打开扩展的homepage.

#### v3.0.1
- 修复因urlblock导致的crash问题(todo改变标签标题的功能暂时去掉);
- 新增new Tab输入框失去焦点时字体透明不显示的设置项;
- 优化单词小卡片扩展插件；

#### v3.0
- 新增恢复初始化设置;
- 可设置newTab滚动到底部后自动往上到中间位置;
- 书签删除命令 - branch: bmd;
- custom插件，自定义输入框中的默认命令;
- unblock后恢复页面;
- remove todo后恢复title;
- 壁纸从bing或收藏里随机选取，并自动隐藏save按钮;
- 性能优化.

#### v2.9.1
- NewTab命令除选择外还可以自定义;
- 单词小卡片插件新增更多level icon，对应level等级;
- note命令在页面使用时打上当前页面的标签.

#### v2.9
- 新增扩展类插件架构，使用命令与其它扩展交互 (目前提供单词小卡片扩展, trigger为wd);
- 其它一些优化。

#### v2.8.7
- i18n update

#### v2.8.6
- 在页面内使用时urlblock时，输入 / 自动带出当前域名;
- 页面内使用优化.

#### v2.8.5
- 优化页面内使用的体验;
- 添加github website插件;
- 其它一些优化。

#### v2.8.4
- 在页面中使用 / 来列出所有website选项;
- 更多的国际化支持;
- 一些小优化。

#### v2.8.3
- 新增页面插件架构，通过在网站内启动扩展使用，主要提供不同网站内导航等功能，目前提供知乎插件，具体请看帮助选项里的视频；
- 样式优化。

#### v2.8.2
- bug修复以及一些小修改。

#### v2.8.1
- 加入设置steward设置选项搜索；
- bug修复。

#### v2.8
- 加入chrome-urls搜索；
- 一些改进

#### v2.7
- 可以在任何页面使用steward，快捷键在chrome://extensions/configureCommands设置;
- 一些交互/ui优化

#### v2.6.7
- shift + tab向上选择item，移除ctrl/alt + num选择功能(支持不好);
- bug修复。

#### v2.6.6
- 在New Tab可以使用快捷键(windows: alt + right, mac: command + right)隐藏/显示命令框;
- 修复因cache导致的某些命令无法使用的bug。

#### v2.6.5
- 在下拉列表中使用Tab键也可以向下移动;
- 插件/命令有序显示;
- 新增查看扩展/应用插件, keyword为ext

#### v2.6.4
- 新增newTab默认插件设置

#### v2.6.3
- 紧急bug修复

#### v2.6.2
- 新增打开网址功能
- 新增使用Google/百度/知乎/Bing/Stack Overflow搜索功能
- 一些优化

#### v2.6.1
- 新增天气插件, keyword默认为tq

#### v2.6
- 性能优化及一些改进

#### v2.5.9
- 部分插件(yd/note/calc)添加复制到剪切板功能
- popup样式优化

#### v2.5.8
- 添加wallpaper下载及删除功能

#### v2.5.7
- 修复tab插件新标签页不显示icon的问题
- 新标签页左下角添加壁纸保存按钮，可以在设置->Appearance->Wallpapers查看/设置/取消

#### v2.5.6
- 新增缓存上一条命令选项。
- 修复calc的bug。
- 版本更新后自动切换到update面板。
- 修复bk8不能unblock的问题。

#### v2.5.5
- URL Block插件新增bk8命令以替代原来的bk，后者不再有时间限制
- 插件添加版本管理，从v1开始计数

#### v2.5.4
- 添加帮助文档/更新日志/相关

#### v2.5.3
- 紧急修复Bug

#### v2.5.2
- 添加topsites插件，使用site关键字，查找你的最常访问网站

#### v2.5
- 添加插件管理页，可更改各插件的keyword
