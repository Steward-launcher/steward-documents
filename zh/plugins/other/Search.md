> 搜索无需命令，当没有应用其它任何搜索时，根据搜索引擎列表列出搜索项，并依据使用次数排序

## 命令
### 设置搜索引擎
`trigger: se`    
#### 操作
- `query` 为空时，显示的是已有的搜索引擎列表
    - `Enter` 删除选定的引擎
- `query` 不为空时，将 `query` 部分作为解析成新的搜索引擎添加到列表中
    - `Enter` 添加搜索引擎

#### 格式

```
## name: 搜索引擎的名称
## url: 搜索引擎的 url, 比如 `https://www.google.com/search?q=%s`
## icon: 搜索引擎的图标，通常是域名后面加上 `/favicon.ico`, 比如 `https://bing.com/favicon.ico`

name|url|icon
```
