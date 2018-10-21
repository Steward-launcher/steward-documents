### Description
- After V3.4.2, the `GitBook` class website will automatically adapt
- After V3.5.3, users can share their website configuration to [Steward Official Websites Repository](https://github.com/Steward-launcher/steward-websites)

### Website Configuration Creation and Installation
You can create it manually in Settings --> Websites or create it in **Page mode** using `wsm create`

`wsm install` can find and install the Website configuration from the Steward official Websites repository, and `wsm uninstall` for uninstalling

#### Website's data structure
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
            "title": "Homepage",
            "urlPattern": "/" // path
        },
        {
            "title": "User Posts",
            "urlPattern": "/user/784469/posts"
        }
    ],
    "title": "sspai"
},
```