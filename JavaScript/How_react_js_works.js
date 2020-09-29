// react Follows MVC ( Model View Controller )

// -> Structural pattern that seperates the app into three main components

// => Model: manages the data and rules of the applcation (React Component)
// => View: the output, in react applications, the browser's DOM(render())
// => Controller: takes user input and converts it into commands for the model or view layers (click event or api requests)

// Virtual DOM

// -> Javascript (JSON) object that is a representation of browser DOM
// -> Exteremly fast compared to the browser DOM
// -> can produce 200,000 virtual DOM nodes a second
// -> created completely from scratch on every setState or dispatch.

// Diffing Algorithm

	// -> A truly minimal difference can be calculated most optimally using an algorithm with O(n^3)
	// React uses optimization to enhance their algorithm to O(n)
	// if a node is found to be different (different type ot component) it will re-render the entire subtree.

// -> it Uses BFS tree traversal


// -> React implements a heuristic algorithm (A heuristic algorithm is one that is designed to solve a problem in a faster and more efficient fashion than traditional methods by sacrificing optimality, accuracy, precision, or completeness for speed.) based on two assumptions
	
	// 1. Two elements of different types will produce different trees.
	// 2. the developer can hint at which child elements may be stable across different renders with a key prop, In practice, these assumptions are valid for almost all practical use cases. 

// => Any components below the root will also get unmounted and have their destroyed, For example, when Diffing

	// <div>
		// <Counter />
	// </div>

	// <span>
		// <Counter />
	// </span>

	// => This will destroy the old Counter and remount a new one

// => When comparing two React DOM elements of the same type, React looks at the attribute of both, keeps the same undelying DOM nodes,and only updates the changed attributes. Wokrs the same way for the style tag



// BROWSER DOM updates

// -> once react creates a new virtual DOM and diffs it vs the old one, it creates a list of the minimum possible changes to the browser DOM.

// -> Once it completes its list, it will fire off all of the changes one after the other as fast as possible.

// -> Accomplises this in one continuous write cycle without any reflow until the end.

// -> reflow is the process that browser performs to re-calculate the positions, geometries, and colors of elements on the page.