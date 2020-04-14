
// 伪数组： 1 ,按照索引存储数据 ； {0:'',1:''};  0   1  就是 索引
// 2  具有 length 的 数据


// 转换 
// ES5 中的 arguments; 在函数体的内部
function a () {
	let args = [].slice.call(arguments);// 实现转换
}
// 在 ES5 中已经废弃了 arguments
// ES6 中的 Array.from(); 方法；直接转换为 数组 ，3 个参数  arrayLike, mapFn:

// let  arr = Array.from(arrayLike,mapfn,thisarg) // 语法
// 初始化 ， 填充默认值
let array = Array.from({length:5},function() {return 1})
console.log(array)