

//   arrow function 

// es5 
function hello () {
	console.log('arrow function')
}
// es6  
let hellos =()=> {
	console.log('hello')
}
let test = {
	name:'test',
	say:()=> {
		console.log(this)
	} 
}
test.say()