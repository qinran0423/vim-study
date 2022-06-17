## 替换字符串

### 替换命令
  - :[range]s[ubstitute]/{pattern}/{string}/[flags]
  [范围]s[字符名称]/[简称]/{模式}/{要替换的内容}/{flags}

  - range(上面的范围) 
    - $ -> 到尾部
    - % -> 全文
    - number, number -> 行到行

  - flags 
    - g -> 全局 非全局只选择行第一个匹配
    - c -> 交互模式

  - 可视化模式下： 全部替换

  - 多选操作 
    - gb  -> adds another cursor on the next word it finds which is the same as the word under the cursor
    选中多个相同的单词并添加光标 用光标修改替换
    gb我感觉是比较常用的