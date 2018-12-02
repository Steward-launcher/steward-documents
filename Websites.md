### Description
- From V3.5.3, users can share their website configuration to [Steward Official Websites Repository](https://github.com/Steward-launcher/steward-websites)
- From V3.6, provide actions

### Website Configuration Creation and Installation
- You can create it manually in Settings --> Websites 
- or create it in **Page mode** using `wsm create`

#### Operations
- navs, trigger: `/`
- outline, trigger: ``` ` ```
- anchors, trigger: `#`
- actions, trigger: `;`

`wsm install` can find and install the Website configuration from the Steward official Websites repository, and `wsm uninstall` for uninstalling

#### Website's data structure
```javascript
{
  "author":"solobat", // required
  "host":"github.com", // required, `minimatch`
  "icon":"https://assets-cdn.github.com/favicon.ico",
  // Generate navigations, trigger: '/' [not required]
  "navs":"header ul a",
  // Specify the area to extract the outline, trigger: '`'
  "outlineScope":".markdown-body,.gollum-markdown-content", // [jquery] css selector
  // Supplement to `navs`, trigger: '/' [not required]
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
  // vars for paths
  "vars":{
    "user":"solobat"
  },
  "version":4, // rqeuired
  // trigger: '#'
  "anchors":[
    {
      "selector":".xxx",
      "title":"xxx"
    }
  ],
  // trigger: ';'
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