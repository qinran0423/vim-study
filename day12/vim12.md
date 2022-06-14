
## 处理包裹字符的符号

### vim-surround

- Change existing surround to desired -> c s <existing> <desired>
  工作比较常见的地方就是将外面的 '' "" 替换成模板字符串 ``  -> cs'`

- Add desired surround around text defined by -> y s <motion> <desired>
  特别实在我们导入一些方法或者变量的时候，或者想在外面包一层对象之类的操作 -> ysaw{}

- Delete existing surround -> ds <existing>
  删除字符  -> ds <desired>

- Surround when in visual modes (surrounds full selection) -> S <desired>
  将选中的字符包裹符号 

这些方法就非常的常用，特别实在平时我们写路由跳转的时候，刚开始用"" 后面要求加参数 就需要吧"" -> ``模板字符串 有了vim的操作 再也不用鼠标选中替换了