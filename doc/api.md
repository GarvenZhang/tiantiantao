# 天天淘Api V1

## 返回状态说明
天天淘API 通过HTTP Status Code来说明 API 请求是否成功 下面的表格中展示了可能的HTTP Status Code以及其含义

|状态码	|含义	|说明|
|:------|:------|:---|
|200	|OK	    |请求成功|
|201	|CREATED	|创建成功|
|202	|ACCEPTED	|更新成功|
|400	|BAD REQUEST	|请求的地址不存在或者包含不支持的参数|
|401	|UNAUTHORIZED	|未授权|
|403	|FORBIDDEN	|被禁止访问|
|404	|NOT FOUND	|请求的资源不存在|
|500	|INTERNAL SERVER ERROR	|内部错误|

## Api V1 索引

[用户Api V1](./user.md)

[类别Api V1](./category.md)

[商品Api V1](./goods.md)

[订单Api V1](./order-form.md)

[购物车Api V1](./shopping-cart.md)

## 通用返回结果码对照表

> Api中若无特殊说明，则返回结果基于以下表

```json
{
  "00": {
    "retCode": "00",
    "message": "注册成功！"
  },
  "01": {
    "retCode": "01",
    "message": "登陆成功！"
  },
  "011": {
    "retCode": "011",
    "message": "账号或密码错误！"
  },
  "02": {
    "retCode": "02",
    "message": "账号不存在！"
  },
  "021": {
    "retCode": "021",
    "message": "用户名已被注册！"
  },
  "022": {
    "retCode": "022",
    "message": "用户名包含非法字符！"
  },
  "03": {
    "retCode": "03",
    "message": "密码错误！"
  },
  "031": {
    "retCode": "031",
    "message": "密码包含非法字符！"
  },
  "032": {
    "retCode": "032",
    "message": "密码长度小于最小值！"
  },
  "033": {
    "retCode": "033",
    "message": "密码长度大于最大值！"
  },
  "034": {
    "retCode": "034",
    "message": "密码不能为空！"
  },
  "04": {
    "retCode": "04",
    "message": "未选择性别！"
  },
  "05": {
    "retCode": "05",
    "message": "联系方式不能为空！"
  },
  "051": {
    "retCode": "051",
    "message": "联系方式包含非法字符！"
  },
  "052": {
    "retCode": "052",
    "message": "手机位数非11位！"
  },
  "06": {
    "retCode": "06",
    "message": "地址不能为空！"
  },
  "061": {
    "retCode": "061",
    "message": "地址包含非法字符！"
  },
  "07": {
    "retCode": "07",
    "message": "邮箱格式不正确！"
  },
  "071": {
    "retCode": "071",
    "message": "邮箱不能为空！"
  },
  "08": {
    "retCode": "08",
    "message": "添加成功！"
  },
  "081": {
    "retCode": "081",
    "message": "已存在！"
  },
  "082": {
    "retCode": "082",
    "message": "不存在！"
  },
  "09": {
    "retCode": "09",
    "message": "删除成功！"
  },
  "09": {
    "retCode": "10",
    "message": "更新成功！"
  }
}
```

---

备注：Api依据RESTFUL规范进行设计
