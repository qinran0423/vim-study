## 如何删除一个函数

- % -> 匹配括号
- vim-indent-object

## 方式
- dap -> 基于段落text-object (但是函数里面有段落则不可行)

- dal -> 基于vim-indent-object
  - vii -> 选中当前所在{}的内容
  - vai -> 选中整个函数 但是最后会漏掉}
  - vaI -> 弥补上一条
  
- V$%d 
  - 改键 -> <Leader>df
  - 参数多个的话 使用两次 -> V$%$%
