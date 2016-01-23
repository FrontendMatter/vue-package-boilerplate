// Load components
// import Hello from './components/hello'

let {{ library }} = {
	// Hello
}

// Load directives
// import MyDirective from './directives/my-directive'

// Setup
{{ library }}.install = function (Vue) {
	// Register directives
	// Vue.directive('my-directive', MyDirective)
}

// auto install in browser
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use({{ library }})
}

// ES6
export default {{ library }}

// CommonJS
module.exports = exports.default