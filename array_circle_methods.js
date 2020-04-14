

// ES5 中有多少种遍历的方法、？？
// 各有什么优缺点

let arr = [1,2,3,4,5]
// 1  for 循环 
/**
 * break: 退出 
 * contiue: 跳过
 */
for (let i = 0; i<  arr.length;i++) {
	console.log(arr[i],'for')
}

// forEach 
arr.forEach( item => {
	// break ,contiue 不支持
	if(item == 3) return ; // 跳过 3 的输出
	console.log(item,'forEach')
})

// every  能否 遍历 ，取决于函数的返回值； 默认返回 false
arr.every( item => {
	console.log(item,'every')//   1 
	return true; // 1,2 3,4,5 
})

// for  in  为对象提供的遍历; 
// 能遍历数组; 但是 有缺点： 为数组增加一个属性； arr.a = 8 ; 那么 a 、8 都会被遍历出来
for (let index in arr) {
	console.log(index,arr[index])
}

// for of 

let goods= {
	price :{
		A:[1.5,2,7,5,2],
		B:[12,2,6,5,2],
		C:[3,2,3,9,6],
		D:[6,2,3,7,4],
	}
}

// 自定义迭代器
goods[Symbol.iterator] = function *() {
	let Price= this.Price;
	let keys = Reflect.ownKeys(Price);
	let values = [];
	while(1) {
		if(!values.length) {
			if(kekeysy.length) {
				keys = Price[keys[0]]
				yield values.shift()
			}else {
				return false
			}
		}else {
			yield values.shift()
		}
	}
}
for( let item of arr) {
	console.log(item,'for of ')
}