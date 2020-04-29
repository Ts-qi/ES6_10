//  实现 call 
export default  myCall= (context)=> {
	 let context = context || window 
	 context.fn = this;
	let args = [...arguments].slice(1)
	 let result = context.fn(...args)
	 delete context.fn
	 return result
 }
 // 实现 apply 
 export default myApply = (context) => {
	 let context = context || window
	 context.fn = this;
	 let result 
	 if(arguments[1]) {// apply 第二个参数是 数组 ； 所以需要先判断哈第二个参数 是否存在；存在 就进行参数传递
		 result = context.fn(...arguments[1])
	 }else {
		result = context.fn()
	 }
	 delete context.fn
	 return result;
 }
 // 实现一个 bind 
 export default myBind = (context) => {
	let _this = this
	let args = [...arguments].slice(1)
	return function() {
		// 检测是否是 new  创建
		if(this instanceof _this ) {
			return new _this(...args,...arguments)
		}else {
			_this.apply(context,args.concat(...arguments))
		}
	
	}
 }
 // 实现一个 instanceof
 /**  __proto__ 属性，指向了创建该对象的构造函数的原型
	*  A instanceof B ; 原理 : 判断 B 的 变量的原型（prototype） 存在于A的原型链（_proto_） 上 ;即 右边变量的原型是否存在左边变量的原型链上
  */
 export default myInstanceof = (left,right)=> {
	let left_Proto_ = left._proto_;
	let rightPrototype = right.prototype;
	// 循环查找 
	while(true) {
		// 存在 返回 true 
		if(left_Proto_ === rightPrototype) {
			return true
		}
		// 查找到顶层
		if(left_Proto_ === null) {
			return false
		}
		left_Proto_ = left_Proto_._proto_ ; // 继续向上一层原型链查找
	}

}
// 实现一个 Object.create()
/**
 * 原理： 将传入的一个对象作为原型
 */
export default myObjectCretae =  (obj)=> {
	function F() {};// 创建一个函数
	F.prototype = obj; // 将 obj 作为函数分原型
	let resultObj = new F()
	return resultObj; // 在返回这个对象
}
// new  的本质是什么？
/**
 * 1 创建一个新对象
 * 2 将新对象的 this 指向构造函数
 * 3 为新对象添加构造函数的属性和方法；
 * 4 返回了一个对象；
 * 特点： 新对象的_proto_指向的是构造函数的 prototype
 * @params { fn 一个构造函数}
 */
export default myNew = (fn)=> {
	// 为什么需要一个回调？ 我想是因为防止里面环创建的对象造成环境污染，所以弄一个闭包；
	return function (){
		// 创建一个新对象且将其隐式原型指向构造函数原型
		let targetObj = {
			_proto_: fn.prototype
		}
		// 执行构造函数 
		fn.call(targetObj,...arguments)
		// 返回 对象
		return targetObj;
	}
}
// 实现一个深拷贝 
export default deep =(target)=> {
let lastTarget = 	Object.prototype.toString.call(target).slice(8,-1)
	if(lastTarget === 'Array') {
		return []
	}else if (lastTarget === 'Object') {
		return {}
	}else {
		target
	}
	// 递归遍历

	for (let key in target) {

	}
}