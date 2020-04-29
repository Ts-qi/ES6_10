//  实现 call 
 let myCall= (context)=> {
	 let context = context || window 
	 context.fn = this;
	let args = [...arguments].slice(1)
	 let result = context.fn(...args)
	 delete context.fn

	 return result
 }

 // 实现 apply 
 let myApply = (context) => {
	 let context = context || window
	 context.fn = this;
	 let result 
	 if(arguments[1]) {
		 result = context.fn(...arguments[1])
	 }else {
		result = context.fn()
	 }
	 delete context.fn
	 return result;
 }
 // 实现一个 bind 
 let myBind = (context) => {
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
 /**
	*  A instanceof B ; 原理 : 判断 B 的 变量的原型（prototype） 存在于A的原型链（_proto_） 上 ;即 右边变量的原型是否存在左边变量的原型链上
  */
 let myInstanceof = (right,left)=> {
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
	}

 }