#### v3.5.6
- Add blacklist option for wallpaer plugin, click it to add the wallpaper to the blacklist;
- Fix some bugs.

#### v3.5.5
- Fix some bugs.

#### v3.5.4
- Optimize the performance of the Bookmark plugin;
- Move the jenkins / coin / times plugin to the plugins repository, please use spm to install;
- Plugin api enhancement;
- Fix some bugs;

#### v3.5.3
- Added wsm plugin, wsm install / wsm uninstal command to install and uninstall website configuration;
- website Community Driver, reference: http://bbs.oksteward.com/topic/5bc065860f590c684784a411
- Optimize the outline function of the page mode.

#### v3.5.2
- Added spm plugin, spm install / spm uninstal command to install and uninstall plugins;
- Update the plugin api.

#### v3.5.1
- Open plugin api, allows users to write their own plugins, used in Settings --> Advanced --> Plugin Editing;
- Optimize the package size;
- New Tab bottom button componentized configuration.

#### v3.5
- Add a clock/shortcut component to newtab and select it in Settings --> General --> NewTab Settings;
- Refactoring.

#### v3.4.13
- website sharing optimization, support sharing selected texts;
- website share sorting by use.

#### v3.4.12
- Redesign the Steward Lite New Tab mode, please visit lai.app;
- Optimized wallpaper operation.

#### v3.4.11
- websites url matching support minimatch;
- nt command bug fix;
- Remove the Sina short url function due to expiration of the https certificate.

#### v3.4.10
- websites support vuepress sites;
- Document link update;
- coins support caching, coin support for selecting exchange cache.

#### v3.4.9
- Added coin market plugin to check the latest digital currency prices, including the coin and coins commands;
- Optimize dl command performance issues to some extent;
- Added Traditional Chinese language pack.

#### v3.4.8
- Added pixabay wallpaper source;
- Better international support, some style optimization;
- Remove google statistics to improve performance.

#### v3.4.7
- Additional 10 shortcuts for easy customization of command shortcuts;
- yd plugin fix, replace dao dictionary with google translation;
- The sharing list of page modes can be customized in Options --> Advanced.

#### v3.4.6
- Automatically configure the Websites feature for the website, which is enabled by default;
- Provides common operations and information for the current page in page mode, with single quotes ' as trigger;
- Provide QR code image and short URL function of the current page, with single quote ' as trigger, default on;
- Websites generate a social sharing link with @ for trigger, which is enabled by default;
- Provide common options for word cards via the wd command.

#### [v3.4.5](http://bbs.oksteward.com/topic/5ae6e5530f590c684784a3db)
- Add anchor points to specific pages via css selector for quick positioning;
- The theme can be edited using color-picker;
- Some other optimizations and bug fixes.

#### v3.4.4.1
- Fix bugs in the wp command.

#### [v3.4.4](http://bbs.oksteward.com/topic/5ad835aa0f590c684784a3d6)
- Added **Nasa** and **Desktoppr** wallpaper sources;
- pocket reauthorization and optimization;
- Experience optimization and bug fixes.

#### [v3.4.3](http://bbs.oksteward.com/topic/5ac1cdeb0f590c684784a3d1)
- Support for disabling some plugins;
- The `wp` command supports uploading wallpapers to the Weibo map bed, adding favorites to the wallpaper source;
- Search support batch, page mode search promotion;
- More Chrome URLs added.

#### v3.4.2
- Automatically add the Websites configuration of the **GitBook** class site;
- `Shift + Enter` Open the original link to the Pocket article;
- `bm` / `his` command `query` brings /host `.

#### v3.4.1
- Store the most recent command: When the input box is empty, press the up key to display the last 20 command records, you can set -> General panel to close/open;
- `Ctrl + p` / `Ctrl + n` corresponds to the `up` / `down` operation.

#### v3.4
- Advanced panel to add export and import configuration functions;
- Backup command to download the configuration file.

#### v3.3.3
- Support for non-linked navigation.

#### v3.3.2
- Optimize Websites Navs extraction;
- Fixed a bug in Websites Paths.

#### v3.3.1
- Websites added outline function;
- Websites path optimization.

#### v3.3
- Added Websites configuration panel.

#### v3.2.9
- Add random wallpaper switch options;
- Optimize the pocket plugin list display logic.

#### v3.2.8
- Page mode theme optimization;
- `wps` command - quick selection of wallpapers;
- `wfe` command - quick operation of a single command in the workflow.

#### v3.2.7
- Added theme editing features.
- The new tab page has a frosted glass effect option, which is turned off by default and can be switched using the `nt ` command.

#### v3.2.6
- Fix bugs

#### v3.2.5
- tag is no longer required, `notes` supports search function;
- tab lock command, trigger is `tabp`, supports `Shift + Enter` and batch operation;
- Enhance the function of the calculator;
- yd is added to the word card after the word is searched.

#### v3.2.4
- Add a journal plugin, write a diary like a chat, trigger: `:`, download diary trigger: `diary`
- Better copywriting.

#### v3.2.3
- The wp command provides wallpaper download operations;
- Set new tab title source: `ntm` command;
- times plugin, trigger: `ts` | `tsd`;
- Added "Select drop-down item when mouse hover", which is off by default;
- The wallpaper command shows the source.

#### v3.2.2
- Wallpaper sources can be set in Settings -> Genenral;
- newtab plugin, trigger: `nt` , some settings for Steward's new tabs;
- Search results should be sorted according to usage;
- Search engine format optimization, you can use `%s` as a placeholder.

#### v3.2.1
- Workflow can include other workflow;
- Optimize workflow;
- Add search support for help command。

#### v3.2
- Add wallpaper source from picsum.photos
- Add wallpaper plugin, the command's `trigger: wp`，you can save/refresh/input wallpaer link with it;
- Auto add the todo which is done to the done list, use command: `done` to view;
- New Tab UI optimization;
- Now off command can use in bulk;.

#### v3.1.11
- Pocket empty query cache optimization, now you can add po to the Random list;
- Wallpaper can be added by link;
- Check whether the trigger is repeated;
- Opitimize search engine, after delete the engine its format will be copied to the clipboard.

#### v3.1.10
* Fix bug of workflow
* Auto switch to Random Mode when using random command
* Optimize the New Tab experience to avoid misuse

#### v3.1.9
fix bug of workflow.

#### v3.1.8
- Plugin icon replacement;
- note plugin add notes command to display all the notes, press SHIFT + ENTER to delete a single note;
- note / todo plugin storage usage alert;
- Set max workflows num to 20.

#### v3.1.7
Optimize UI interface of new tab

#### v3.1.6
Solve the New Tab wallpaper adaptation problem;
Update the About information。

#### v3.1.5
More friendly command prompt;
help plugin optimization.

#### v3.1.4
Update document link;
Fix the problem of the background image;
Some other improvements.

#### v3.1.3
Command box can be completely eliminated when press the ESC ;
Richer documentation：use help command，press Shift + Enter/Click can open the document of one command.

#### v3.1.2
Add random feature, random use of the tab command to add the command by trigger: random

#### v3.1.1
Add workflow delete button;
Update todo plugin;
Added tabm command to move the selected tab；
Search engines can be customized#11;

#### v3.1
Add workflow panel，to create or edit workflow, as well as add a workflow plugin, the trigger is: wf;
Video

#### v3.0.2
Added tabc command to close one or more matching tabs;
bm / site / his command, can open a group of tab with shift keypress;
ext command with Shift keypress to open the extended homepage. video

#### v3.0.1
Fix for crash caused by urlblock (todo change tag caption temporarily removed);
Some other optimization.

#### v3.0
Added restore initialization settings;
Can set newTab scroll to the bottom automatically to the middle position;
Bookmark delete command - trigger: bmd;
Add custom plugin, which can custom default command of the newTab input box;
Unblock url and then restore the page;
Remove todo then restore the title;
Random wallpaper from bing or collection, and automatically hide the save button;
Performance optimization.
video

#### v2.9.1
The NewTab command can be customized in addition to the options;
The note command automatically add tag of the host when used in page.
video

#### v2.9
Optimize

#### v2.8.7
i18n update

#### v2.8.6
When using urlblock within a page, enter / automatically bring out the current domain name;
Optimize the experience within the page.

#### v2.8.5
Optimize the experience used within the page;
Add github plugin.

#### v2.8.4
Some optimization

#### v2.8.3
New page plug-in architecture, through starting the extension in page to use, mainly to provide navigation and other functions within the website, currently available in zhihu.com, specifically please see the video in the help options；
Style optimization。
