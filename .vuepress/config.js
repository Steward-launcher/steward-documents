module.exports = {
    base: '/steward-documents/',
    locales: {
        '/': {
          lang: 'en-US',
          title: 'Steward - Help Center',
          description: 'Steward - Help Center'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'Steward - 帮助中心',
          description: 'Steward - 帮助中心'
        }
    },
    themeConfig: {
        repo: 'solobat/Steward',
        sidebarDepth: 1,
        locales: {
            '/': {
                sidebar: [
                    ['/', 'Introduction'],
                    ['/guide', 'Get Started'],
                    ['/download', 'Download'],
                    {
                        title: 'Three modes',
                        children: [
                            '/modes/NewTab-Mode',
                            '/modes/Popup-Mode',
                            '/modes/Page-Mode'
                        ]
                    },
                    {
                        title: 'Browser Plugins',
                        children: [
                            ['/plugins/browser/Bookmarks', 'Bookmarks'], 
                            ['/plugins/browser/Top-Sites', 'Top Sites'], 
                            ['/plugins/browser/Tabs', 'Tabs'], 
                            ['/plugins/browser/Enable-Extension', 'Enable Extension'],
                            ['/plugins/browser/Disable-Extension', 'Disable Extension'],
                            ['/plugins/browser/Delete-Extension', 'Delete Extension'],
                            ['/plugins/browser/Set-Extension', 'Set Extension'],
                            ['/plugins/browser/Run-App', 'Run App'],
                            ['/plugins/browser/History', 'History'],
                            ['/plugins/browser/Downloads', 'Downloads'],
                            ['/plugins/browser/Extension', 'Extension'],
                            ['/plugins/browser/Chrome', 'Chrome']
                        ]
                    },
                    {
                        title: 'Extension Plugins',
                        children: [
                            ['/plugins/extension/wordcard', 'Wordcard']
                        ]
                    },
                    {
                        title: 'Website Plugins',
                        children: [
                            ['/plugins/website/Github', 'Github'],
                            ['/plugins/website/Zhihu', 'Zhihu'],
                        ]
                    },
                    {
                        title: 'Steward Plugins',
                        children: [
                            ['/plugins/steward/Custom.md', 'Custom'],
                            ['/plugins/steward/Workflow.md', 'Workflow'],
                            ['/plugins/steward/Help.md', 'Help'],
                            ['/plugins/steward/newtab.md', 'New Tab'],
                            ['/plugins/steward/Random-Commands.md', 'Random Commands'],
                            ['/plugins/steward/About-Steward.md', 'About Steward']
                        ]
                    },
                    {
                        title: 'Other Plugins',
                        children: [
                            ['/plugins/other/Calculator.md', 'Calculator'],
                            ['/plugins/other/Diary.md', 'Diary'],
                            ['/plugins/other/Jenkins.md', 'Jenkins'],
                            ['/plugins/other/Note.md', 'Note'],
                            ['/plugins/other/Open-Url.md', 'Open Url'],
                            ['/plugins/other/Pocket.md', 'Pocket'],
                            ['/plugins/other/Search.md', 'Search'],
                            ['/plugins/other/Todolist.md', 'Todolist'],
                            ['/plugins/other/URL-Block.md', 'URL Block'],
                            ['/plugins/other/Weather.md', 'Weather'],
                            ['/plugins/other/youdao.md', 'youdao']
                        ]
                    },
                    ['/Workflows', 'Workflows'],
                    ['/wallpaper', 'Wallpaper'],
                    ['/FAQ', 'FAQ'],
                    ['/Authorization-Service', 'Authorization Service'],
                    ['/Beta', 'Beta'],
                    ['/CHANGELOG', 'CHANGELOG']
                ]
            },
            '/zh/': {
                sidebar: [
                    ['/zh/', '介绍'],
                    ['/zh/guide', '入门'],
                    ['/zh/download', '下载安装'],
                    {
                        title: '浏览器插件',
                        children: [
                            ['/zh/plugins/browser/Bookmarks', '书签'], 
                            ['/zh/plugins/browser/Top-Sites', '常用网站'], 
                            ['/zh/plugins/browser/Tabs', '标签页'], 
                            ['/zh/plugins/browser/Enable-Extension', '启用扩展'],
                            ['/zh/plugins/browser/Disable-Extension', '禁用扩展'],
                            ['/zh/plugins/browser/Delete-Extension', '删除扩展'],
                            ['/zh/plugins/browser/Set-Extension', '设置扩展'],
                            ['/zh/plugins/browser/Run-App', '启动应用'],
                            ['/zh/plugins/browser/History', '历史记录'],
                            ['/zh/plugins/browser/Downloads', '下载'],
                            ['/zh/plugins/browser/Extension', '扩展'],
                            ['/zh/plugins/browser/Chrome', 'Chrome']
                        ]
                    },
                    {
                        title: '扩展类插件',
                        children: [
                            ['/zh/plugins/extension/wordcard', '单词小卡片']
                        ]
                    },
                    {
                        title: '网站类插件',
                        children: [
                            ['/zh/plugins/website/Github', 'Github'],
                            ['/zh/plugins/website/Zhihu', '知乎']
                        ]
                    },
                    {
                        title: 'Steward 插件',
                        children: [
                            ['/zh/plugins/steward/Custom.md', '自定义'],
                            ['/zh/plugins/steward/Workflow.md', '工作流'],
                            ['/zh/plugins/steward/Help.md', '帮助'],
                            ['/zh/plugins/steward/newtab.md', '新标签页'],
                            ['/zh/plugins/steward/Random-Commands.md', '随机命令'],
                            ['/zh/plugins/steward/About-Steward.md', 'Steward 相关']
                        ]
                    },
                    {
                        title: '其它插件',
                        children: [
                            ['/zh/plugins/other/Calculator.md', '计算器'],
                            ['/zh/plugins/other/Diary.md', '日记'],
                            ['/zh/plugins/other/Jenkins.md', 'Jenkins'],
                            ['/zh/plugins/other/Note.md', '便签'],
                            ['/zh/plugins/other/Open-Url.md', '打开网址'],
                            ['/zh/plugins/other/Pocket.md', 'Pocket'],
                            ['/zh/plugins/other/Search.md', '搜索'],
                            ['/zh/plugins/other/Todolist.md', '待办事项'],
                            ['/zh/plugins/other/URL-Block.md', '网站屏蔽'],
                            ['/zh/plugins/other/Weather.md', '天气'],
                            ['/zh/plugins/other/youdao.md', '词典']
                        ]
                    },
                    ['/zh/Workflows', '工作流'],
                    ['/zh/wallpaper', '壁纸'],
                    ['/zh/FAQ', '常用问题'],
                    ['/zh/Authorization-Service', '授权服务'],
                    ['/zh/Beta', '测试版'],
                    ['/zh/CHANGELOG', '更新日志']
                ]
            }
        }
    }
}