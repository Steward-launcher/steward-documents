This is a tutorial for beginners of Steward or Steward Lite. For common questions, please go here [here](FAQ.md) 。

***

Table of Contents
---

- [What is the command launcher](#what-is-the-command-launcher)
- [Definition](#definition)
- [Differences from other similar extensions](#differences-from-other-similar-extensions)
- [Features](#features)
- [NewTab Mode](#newtab-mode)
- [Popup Mode](#popup-mode)
- [Page Mode](#[age-mode)
- [Customize shortcuts](#customize-shortcuts)
- [Plugins](#plugins)
- [Custom command](#custom-command)
- [What is workflow](#what-is-workflow)
- [How to use workflow](#how-to-use-workflow)
- [Wallpaper](#wallpaper)

***

What is the command launcher:
---
The command launcher consists of an input box + drop-down list. Some shortcuts are implemented through a combination of `trigger` + `query` + `click / enter / return`, for example, searching for bookmarks and opening

<img src="https://i.imgur.com/X0ws60x.png" width="500" />

Definition:
---
Steward is inspired by Alfred on Mac OS

Steward Lite is a Steward that does not take up a new tab so you don’t have to choose between tabs

Differences from other similar extensions
---
Advantage:
- Richer plugins
- Three modes
- Can custom triggers—triggers customizable
- The NewTab mode makes Steward more powerful
- Custom workflow belongs to you—customized workflow for you
- More positive development

Features:
---
- Introduction of the main features [go here](features.md)

NewTab Mode
---
> This is Steward's unique model, with all browser plugins available on the new tab, which features always-on functionality and wallpaper.

Popup Mode
---
> Pop up by tapping the expand icon or using shortcuts to access all browser plugins, featuring lightweight, fast, page-independent;
> Default shortcut key: `Windows: Ctrl + k` `Mac: Command + k`     

Page Mode
---
> is characterized by lightweight, fast, you can use the page corresponding to the plugin—lightweight and fast. And you can use the plugin corresponding to the page.
> Default shortcut key: `Windows: Ctrl + j` `Mac: Command + j`   

Customize shortcuts
---
> Go to `chrome://extensions/shortcuts` extension shortcuts settings page, click pop-up to modify

![Imgur](https://i.imgur.com/1PQfBNq.png)

Plugins
---
Steward comes with a set of plugins that will help you with most of the browser operations; meanwhile Steward provides plugin api, you can develop your plugin with just a few lines of code.

Steward provides the `spm` command to install or uninstall the third-party plugins.

Custom command
---
> Command trigger basically can be defined in the settings -> plugins panel, if the trigger has a small icon on the right, there will be hover tips

![Imgur](https://i.imgur.com/QWcFTip.png)

What is workflow
---
> The commands are enhanced when compared with that when used alone.-- The commands are enhanced than being used separately. [Workflow](Workflows.md)

How to use workflow
---
> The first is to create a workflow, in the Settings -> workflows panel
> Then use `trigger: wf`

Wallpaper
---
> Wallpaper is the bing.com  api with functions like automatic altering, save, browse settings, downloading, etc
