## 命令
### 屏蔽网站
`trigger: bk`    
- `批量操作`支持

#### 操作
- `query` 为空时，显示的是已屏蔽的网站列表
    - `Enter` 删除选定的网站屏蔽
- `query` 不为空时，将 `query` 部分作为网址添加到屏蔽列表中
    - `Enter` 添加到屏蔽列表

### 屏蔽网站 8 小时
> 除了强制屏蔽网站 8 小时后才能解除，其它跟 `bk` 一致

### 设置屏蔽指示页面
`trigger: bkseturl`    

#### 操作
- `query` 不为空时，将 `query` 部分作为替换页面 url
    - `Enter` 确认设置
> 提示，query 为空格时 Enter 可以还原为默认的提示页