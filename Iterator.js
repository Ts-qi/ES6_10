// console.log('Iterator ')

const authors = {
	allAuthors: {
		fiction: ['Alp','asc','KLe','AAD'],
		scienceFiction: ['Neal','Preacn','Alm'],
		view: ['Car','House','Man',"woman"]
	},
	address:[]
}
let r = []
for ( let [k,v] of Object.entries(authors.allAuthors)) {
	// r = r.concat(v)

}

/** 
 * itertor 可遍历的接口
 * 
 * 
 * 
 */
// 自定义遍历器
authors[Smmbol.itertor] = function()  {
	
}


for (let v of authors) {
	console.log(v)
}

/**
 * Object.keys ---> 获取到 对象的 key 值
 * Object.values ----> 获取到 对象的 Value 值
 * Object.entries
 */
const obj = { foo: 'bar', baz: 42 };
const map = Object.values(obj);

