

// 生成新数组
 let arr=new  Array(5);// 直接生成

// 字面量 
 let  arr2 = ['','']

 // array.of(参数 随意),快速的生成数组，并将一个数快速放入数组
 let  arr3 = Array.of(1,2,3,4,5)// 将 1，2，3，4，5 放入数组；
 console.log(arr3)// 1,2,3,4,5

 // array.fill(value,satrt,end) 填充； start  从什么地方 开始填充。end 结束位置 ,小作用： 替换数组中的值
 let arr4 =Array(10).fill(1,1,4) 
 console.log(arr4)
 
