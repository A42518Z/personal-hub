---
type: 面试题
category: Linux 与运维
source: 面试题/linux基本命令.md
tags:
  - linux
  - 运维
status: 待背诵
review: [D1, D3, D7]
---

# linux基本命令

> [!summary] 速记
> rm 文件名 //删除当前目录下的文件 rm f 文件名 //删除当前目录的文件（不询问） 修改 mv 当前目录名 新目录名 //修改目录名，同样适用于文件操作 mv /usr/t

## 面试回答

rm 文件名 //删除当前目录下的文件

rm -f 文件名 //删除当前目录的文件（不询问）

修改

mv 当前目录名 新目录名  //修改目录名，同样适用于文件操作

mv /usr/tmp/tool /opt   //将/usr/tmp目录下的tool目录剪切到 /opt目录下

拷贝

cp /usr/tmp/tool /opt  //将/usr/tmp目录下的tool目录复制到 /opt目录下面

搜索

find /路径名 -name 文件名 //查找路径下的文件



pwd  //查看当前位置路径



创建文件

touch  文件名

编辑文件

vi 文件名

查看文件

cat 文件名



tail -n 1000 文件名

tail -f 文件名 实时显示文件的内容

## 追问方向

- 底层原理是什么？
- 这个方案有什么优缺点？
- 在项目里怎么使用，踩过什么坑？

## 关联题目

- 暂无，后续复盘时补充

## 背诵提示

- 先用一句话定义。
- 再讲核心原理。
- 最后补充应用场景和常见坑。
