// console.log('Iterator ')
// 自定义遍历  -----牛逼
let authors = {
	allAuthors: {
		fiction: ['Alp','asc','KLe','AAD'],
		scienceFiction: ['Neal','Preacn','Alm'],
		view: ['Car','House','Man',"woman"]
	},
	address:[]
}
// 原始方法实现
// let r = []
// for ( let [k,v] of Object.entries(authors.allAuthors)) {
// 	// r = r.concat(v)

// }


/**
 * itertor 可遍历的接口
 *  一：可迭代协议    二 ： 迭代器协议
 * 可迭代协议: 查找对象上是否有 Symbol.iterator； 如果有 则可以进行 for  of 的迭代
 * 迭代器协议: 必须返回 一个   
 * 			return {
 * 				next（）{ 
 * 					return {
 * 						done: false,
 * 						value:1
 * 					} 
 * 				}
 * 			}; 
 * 
 */
//自定义遍历器 使其具有 for of 的迭代能力
// authors[Symbol.iterator] = function()  {
// 	let  allAuthors = this.allAuthors;// 拿到当前对象的allauthors
// 	let  keys = Reflect.ownKeys(allAuthors)// ??  不知道作用
// 	let  values = [];
// 	return {
// 		next(){
// 			if(!values.length) {
// 				if(keys.length) {
// 					values = allAuthors[keys[0]]
// 					keys.shift()// 剔除第一个
// 				}
// 			}
// 			return {
// 				done :!values.length,
// 				value: values.shift()
// 			}
// 		}
// 	}
// }
// 利用 generator 实现  代码 更加简洁
authors[Symbol.iterator] = function *() {
	let allAuthors = this.allAuthors;
	let keys = Reflect.ownKeys(allAuthors);
	let values = []
	while(1) { // 无限循环
		if( !values.length ) {
			if(keys.length) {
				values = allAuthors[keys[0]];
				keys.shift();// 剔除 对象的 key 的第一个值 
				yield values.shift()//剔除 对象的  value 的第一个值
			}else {
				return false;//退出循环
			}
		}else {
			yield values.shift()
		}
	}
}
// 在次使用  for  of  就可以了
let r = []
for (let v of authors) {
	r.push(v)
}
console.log(r) // 合并了 数组



/**
 * 问题： 1 可迭代协议 和迭代协议 是什么
 * 			2 generator  和 iterator 区别是什么？
 */

