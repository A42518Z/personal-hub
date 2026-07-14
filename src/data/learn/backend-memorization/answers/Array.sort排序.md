---
type: 面试题
category: Java 基础
source: 面试题/Array.sort排序.md
tags:
  - java
  - 基础
status: 待背诵
review: [D1, D3, D7]
---

# Array.sort排序

> [!summary] 速记
> Arrays.sort()是经过调优排序算法，性能能达到nlog(n) Arrays.sort()重载了四类方法 sort(T[] a)：对指定T型数组按数字升序排序。

## 面试回答

# Arrays.sort()是经过调优排序算法，性能能达到n*log(n)



Arrays.sort()重载了四类方法



## sort(T[] a)：对指定T型数组按数字升序排序。

```java
import java.util.Arrays;
import java.util.Comparator;

public class ArraysSort {
public static void main(String[] args) {
int[] a={2,5,4,3,1,8};
Arrays.sort(a); //对数组按数字进行升序排序
System.out.println(Arrays.toString(a)); //按照数组元素的顺序将其转换为字符串,并用方括号括起来。
}
}

// 结果
// [1, 2, 3, 4, 5, 8]
```



## sort(T[] a,int formIndex, int toIndex)：对指定T型数组的指定范围按数字升序排序。



```java
import java.util.Arrays;
import java.util.Comparator;
public class Hello{
	public static void main(String[] args){
		int[] a = {9,2,7,5,4,6};
		Arrays.sort(a,2,4);//不是按照索引，按照元素的位置（从1开始）
		System.out.println(Arrays.toString(a));
	}
}
```



## sort(T[] a, Comparator<? supre T> c): 根据指定比较器产生的顺序对指定对象数组进行排序。

对二位数组排序

```
Arrays.sort(intervals,(a,b) -> a[0]-b[0]); //按照一维，从小到大排序，b[0]-a[0]就是从大到小排序
```

‌**在Java中，`List<int[]>`表示一个列表，其中包含多个整数数组。**‌ 例如，你可以使用这个列表来存储多个区间，每个区间由一个整数数组表示，包含区间的起始和结束值。

LeeCode56合并区间

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        ArrayList<int []> result=new ArrayList();//用这个列表来存储多个区间，每个区间由一个整数数组表示，包含区间的起始和结束值
        if(intervals==null||intervals.length<2){
            return intervals;
        }
        Arrays.sort(intervals,(a,b) -> a[0]-b[0] ); //对二维数组排序，从小到大
        for(int[] interval:intervals){
            if(result.size()==0||interval[0] > result.get(result.size()-1)[1]){
                result.add(interval);
            }
            else{
                result.get(result.size()-1)[1]=Math.max(interval[1],result.get(result.size()-1)[1]);
            }
        }

        return result.toArray(new int[result.size()][]);//指定了返回的数组的第一维大小，第二维的大小在运行时根据 ArrayList 中的实际内容来确定。
    }
}
```



## sort(T[] a, int formIndex, int toIndex, Comparator<? supre T> c): 根据指定比较器产生的顺序对指定对象数组的指定对象数组进行排序。

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
