// https://www.youtube.com/watch?v=BYbgopx44vo
// https://www.youtube.com/watch?v=d7pyEDqBDeE
// https://www.youtube.com/watch?v=Iw2BLUjQo1E

// DOM ( Document Object Model)

// => Standardized API that represent an HTML, XHTML or XML document as a tree structure
// => Each node on the tree is an object representing an HTML element.
// => Conencts Javascript to HTML
// => DOM Nodes can be manipulated directly (i.e document.getElementById)

// => UPDATING DOM is inefficient.

// WEB BROWSER WORKFLOW
// 1. Parsing HTML to construct DOM tree
// 2. Render Tree Construction
// 3. Layout of the render tree
// 4. painting the render tree

	// -> DOM tree itself is constructed by the rendering engine (i.e WebKit) from parsing the HTML document
	// -> Parses CSS and applies CSS to the HTML creating a render tree
	// -> Render tree is painted to the browser

	// -> MAKING CHANGES is EXPENSIVE


// This is the problem that virtual DOM solves :

// -> Instead of rendering all these changes to the real DOM, we apply them first to the virtual DOM
// -> Virtual DOM doesn't get rendered IRL so changes are cheap !
// -> Batch changes together for efficiency

// What is Virtaul DOM ?
// -> Light weight representation of the DOM
// -> Exist in-memory; is never actually rendered
// -> It's just a tree data structure of plain Javascript objects!
// -> Popularized by React, also used by other framworks like Angular 2 and Vue

