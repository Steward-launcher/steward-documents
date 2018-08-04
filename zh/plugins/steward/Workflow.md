## 命令
### 查找自定义的 workflow
`trigger: wf`    
#### 操作
- `Input` 搜索
- `Enter` 执行选中的 `workflow`

> 支持中文拼音搜索    
> 执行完成后将 Toast 提示执行的命令列表    
> 关于 `workflow` 的用法在另外的文档里    

### 编辑 workflow
`trigger: wfe`
#### 操作
- `query` 为空时
    - 选择 `../` 则返回上一级
    - 选择一条命令则删除
    - 按住 `shift` 时上移命令
- `query` 不为空时
    - 将 `query` 作为命令添加到 workflow content 底部