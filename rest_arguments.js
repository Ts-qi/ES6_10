

// 函数参数 默认值
//  es5  中的 arguments
// 所有参数放在 rest 中; base 就是 参数的第一个参数；剩余的 就在 rest 中
function sum  ( base,...rest) {
	let sum = 0 ; 
	rest.forEach( item => {
		sum += item *1
	})
	return sum + base*2
}
// console.log(sum(1,2,3))

function add (x ,y,z) {
	return x+y+z
}
let data = [4,5,9]
console.log(add.apply(this,data)) // es5 
console.log(add(...data)) // 解构 es6