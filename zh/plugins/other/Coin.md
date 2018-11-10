- 版本: 3
- 作者： [solobat](https://github.com/solobat)
- 源码： [coin.js](https://github.com/Steward-launcher/steward-plugins/blob/master/plugins/coin.js)

## 安装
`spm install coinmarket`

## 命令
### 查询币代码
trigger: `coins `
> 名字相同的 token 不少，因此需要查询 code 以确定唯一性

#### 操作
- `Input` 查询
- `Enter` 跳转到 `coin ${code}`

### 查询币价
trigger: `coin [${code}|${tokenName}] ${covertTo} ${ex}`

#### 操作
- `Input` 查询
- `Enter` 跳转到 `${code}` 对应的 `${ex}` 交易页面

#### 截图
![coins](https://i.imgur.com/zGwN0rg.png)

![coin ](https://i.imgur.com/iEyxFYM.png)
