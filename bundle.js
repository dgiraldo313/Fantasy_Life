/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//include styles
	__webpack_require__(2);

	//include jquery


	//check if is in viewport
	function isInViewport(element) {
	  // get the elements top and bottom coordinate
	  var elementTop = element.offset().top;
	  var elementBottom = elementTop + element.outerHeight();

	  //get viewports top and bottom cordinates
	  var viewportTop = (0, _jquery2.default)(window).scrollTop();
	  var viewportBottom = viewportTop + (0, _jquery2.default)(window).height();

	  //check if element is inside viewport coordinates
	  return elementBottom > viewportTop && elementTop < viewportBottom;
	}

	//smooth scroll
	function smoothScroll() {
	  //select all identifiers
	  var $idLinks = (0, _jquery2.default)("a[href^='#']");

	  // console.log($idLinks);

	  //add smooth scroll functionality to links with id
	  $idLinks.on('click', function (event) {
	    var $idLink = (0, _jquery2.default)(this.getAttribute('href'));
	    if ($idLink.length) {
	      // prevent page from reloading
	      event.preventDefault();

	      // stop any event and then animate scrolling (scroll over 800 ms)
	      (0, _jquery2.default)('html, body').stop().animate({
	        scrollTop: $idLink.offset().top
	      }, 1000);
	    }
	  });
	}

	// make reviews appear on scroll
	function animateReviews() {
	  //get a list of all review elements
	  var $reviews = (0, _jquery2.default)('#reviews .content .reviews-container').children();

	  //Go through all of the review elements and activate animations
	  $reviews.map(function () {
	    var $review = (0, _jquery2.default)(this);

	    //activate animation when review section is in view
	    if (isInViewport($review)) {
	      //add fadeUp class, which triggers animation
	      $review.addClass('fadeUp');
	    }
	  });
	}

	function init() {
	  //activate smooth scroll for all # links
	  smoothScroll();
	  // activate onScroll animations
	  (0, _jquery2.default)(window).scroll(function () {
	    animateReviews();
	  });
	}

	(0, _jquery2.default)(document).ready(function () {
	  init();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/**********************\nPrefixes\n***********************/\n/**********************\nBorder Radius\n***********************/\n/**********************\nOpacity\n***********************/\n/**********************\ntransition\n***********************/\n/**********************\nTransform\n***********************/\n/**********************\nKeyframes\n***********************/\n/**********************\nAnimation\n***********************/\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 320px); } }\n\n@-moz-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 320px); } }\n\n@-ms-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 320px); } }\n\n@-o-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 320px); } }\n\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 320px); } }\n\n@-webkit-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-moz-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-ms-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-o-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-webkit-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px;\n    opacity: 1; } }\n\n@-moz-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px;\n    opacity: 1; } }\n\n@-ms-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px;\n    opacity: 1; } }\n\n@-o-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px;\n    opacity: 1; } }\n\n@keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px;\n    opacity: 1; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fade-up {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: rotateY(0); } }\n\n@-moz-keyframes fade-up {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: rotateY(0); } }\n\n@-ms-keyframes fade-up {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: rotateY(0); } }\n\n@-o-keyframes fade-up {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: rotateY(0); } }\n\n@keyframes fade-up {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: rotateY(0); } }\n\n@-webkit-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-moz-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-ms-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-o-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  background-color: #f7f7f7; }\n  html a {\n    text-decoration: none; }\n\nbody,\nheader,\n.left-container,\n.right-container,\n.social-icons,\n.download-buttons,\nmain,\nsection,\n.review-container,\n.review {\n  display: flex; }\n\nbody,\nheader,\n.left-container,\n.download-buttons,\nmain,\nsection,\n.review-container,\n.review {\n  flex-direction: column; }\n\nheader,\n.left-container,\n.download-buttons {\n  align-items: center; }\n\nbody {\n  margin: 0px; }\n\nheader {\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  margin: auto; }\n  header .left-container {\n    justify-content: center;\n    align-content: space-between;\n    padding: 10px 10px 70px;\n    -webkit-animation: fade-in 1.2s forwards;\n    -khtml-animation: fade-in 1.2s forwards;\n    -moz-animation: fade-in 1.2s forwards;\n    -ms-animation: fade-in 1.2s forwards;\n    -o-animation: fade-in 1.2s forwards;\n    animation: fade-in 1.2s forwards; }\n    header .left-container #logo {\n      width: calc(400px * .50);\n      height: calc(110px * .50);\n      background-image: url(" + __webpack_require__(5) + ");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n    header .left-container .tagline {\n      max-width: 420px;\n      margin-left: 20px;\n      margin-right: 20px; }\n      header .left-container .tagline h1 {\n        font-size: 1.8em;\n        letter-spacing: 1px;\n        color: #444;\n        text-align: center;\n        margin-top: 5px;\n        margin-bottom: 10px; }\n    header .left-container .learn-more {\n      opacity: 0;\n      width: calc(200px * .5);\n      height: calc(60px * .5);\n      line-height: calc(60px * .5);\n      border: 2px solid #3983c9;\n      border-radius: 5px;\n      color: #3983c9;\n      text-decoration: none;\n      text-align: center;\n      font-size: 1em;\n      -webkit-animation: fade-in 0.7s 3s forwards;\n      -khtml-animation: fade-in 0.7s 3s forwards;\n      -moz-animation: fade-in 0.7s 3s forwards;\n      -ms-animation: fade-in 0.7s 3s forwards;\n      -o-animation: fade-in 0.7s 3s forwards;\n      animation: fade-in 0.7s 3s forwards;\n      transition: ease-in .2s; }\n      header .left-container .learn-more:hover {\n        background-color: #3983c9;\n        color: #fff;\n        border-color: #3983c9;\n        box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2); }\n  header .right-container {\n    display: none; }\n\nmain {\n  margin-top: 50px; }\n  main section title {\n    margin-top: 20px;\n    width: 100%;\n    display: block;\n    font-size: 1.2em;\n    font-weight: bold;\n    text-align: center;\n    text-transform: uppercase;\n    color: #333; }\n  main section#reviews .content {\n    margin-top: 20px;\n    background-image: url(" + __webpack_require__(6) + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed; }\n    main section#reviews .content .reviews-container {\n      padding-top: 50px;\n      padding-bottom: 50px;\n      max-width: 480px;\n      margin: auto;\n      padding-left: 20px;\n      padding-right: 20px; }\n      main section#reviews .content .reviews-container .review {\n        opacity: 0;\n        transform: translateY(100px);\n        flex-direction: row;\n        flex-wrap: wrap;\n        width: 250px;\n        margin-bottom: 10px;\n        font-style: italic; }\n        main section#reviews .content .reviews-container .review.left {\n          float: left;\n          margin-right: auto; }\n          main section#reviews .content .reviews-container .review.left p:after {\n            border-top: 8px solid #47a9ee;\n            border-left: 8px solid #47a9ee;\n            border-right: 8px solid transparent; }\n        main section#reviews .content .reviews-container .review.right {\n          margin-left: auto; }\n          main section#reviews .content .reviews-container .review.right .username {\n            margin-left: auto; }\n          main section#reviews .content .reviews-container .review.right p:after {\n            border-top: 8px solid #47a9ee;\n            border-right: 8px solid #47a9ee;\n            border-left: 8px solid transparent;\n            transform: translate(210px, 10px); }\n        main section#reviews .content .reviews-container .review.fadeUp {\n          animation: fade-up .5s .5s forwards; }\n        main section#reviews .content .reviews-container .review .username {\n          margin-right: 5px;\n          color: #f7f7f7; }\n        main section#reviews .content .reviews-container .review .stars i {\n          color: #ff9500; }\n        main section#reviews .content .reviews-container .review p {\n          font-size: .8em;\n          line-height: 1.3em;\n          margin-top: 5px;\n          background-color: #47a9ee;\n          border-radius: 5px;\n          padding: 10px;\n          color: #fff;\n          box-shadow: -3px 4px 10px 0px rgba(0, 0, 0, 0.2); }\n          main section#reviews .content .reviews-container .review p::after {\n            content: '';\n            display: block;\n            width: 0;\n            height: 0;\n            position: absolute;\n            border-bottom: 8px solid transparent;\n            transform: translateY(10px); }\n\n.social-icons {\n  position: absolute;\n  opacity: 0;\n  bottom: -150px;\n  left: calc(50% - (220px * .75 / 2));\n  width: calc(220px * .75);\n  flex-direction: row;\n  align-content: space-between;\n  flex: 1;\n  -webkit-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -khtml-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -moz-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -ms-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -o-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  animation: social-icon-slide-up 0.6s 0.8s forwards; }\n  .social-icons .icon {\n    width: 60px;\n    height: 60px; }\n  .social-icons a {\n    margin: auto; }\n    .social-icons a .icon {\n      width: calc(60px * .75);\n      height: calc(60px * .75);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      border-radius: 100%;\n      box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2);\n      transition: linear .2s; }\n      .social-icons a .icon:hover {\n        transform: scale(1.1); }\n\n.download-buttons {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .download-buttons .button {\n    width: calc(300px * .50);\n    height: calc(85px * .50);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    border-radius: 10px;\n    box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2);\n    margin: 5px; }\n    .download-buttons .button.ios {\n      background-image: url(" + __webpack_require__(7) + "); }\n    .download-buttons .button.gp {\n      background-image: url(" + __webpack_require__(8) + "); }\n\n/* Landscape */\n@media only screen and (min-device-width: 320px) and (max-device-width: 740px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {\n  header .left-container {\n    flex-basis: 45%;\n    padding: 0px; }\n  .social-icons {\n    left: auto;\n    right: 10px !important; } }\n\n@media screen and (max-width: 750px) {\n  header {\n    background-image: url(" + __webpack_require__(9) + ");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: 100%; } }\n\n@media screen and (min-width: 640px) and (max-width: 980px) {\n  main section#reviews .content {\n    background-image: url(" + __webpack_require__(10) + "); } }\n\n@media screen and (min-width: 980px) {\n  html {\n    font-size: 16px; }\n  header {\n    flex-direction: row;\n    flex: 1; }\n    header .left-container {\n      flex-basis: 65%;\n      padding: 0px; }\n      header .left-container #logo {\n        background-image: url(" + __webpack_require__(11) + ");\n        width: 400px;\n        height: 110px; }\n      header .left-container .tagline h1 {\n        font-size: 2.2em; }\n      header .left-container .learn-more {\n        width: 200px;\n        height: 60px;\n        line-height: 60px;\n        font-size: 1.5em; }\n    header .right-container {\n      display: flex;\n      flex-basis: 35%; }\n      header .right-container .iphone-display img {\n        position: absolute;\n        opacity: 0;\n        top: calc(50% - 75vh);\n        right: 5%;\n        -webkit-animation: slide-down 0.6s 0.8s forwards;\n        -khtml-animation: slide-down 0.6s 0.8s forwards;\n        -moz-animation: slide-down 0.6s 0.8s forwards;\n        -ms-animation: slide-down 0.6s 0.8s forwards;\n        -o-animation: slide-down 0.6s 0.8s forwards;\n        animation: slide-down 0.6s 0.8s forwards; }\n  main section title {\n    font-size: 2.5em; }\n  main section#reviews .content {\n    width: 100%;\n    background-image: url(" + __webpack_require__(12) + "); }\n    main section#reviews .content .reviews-container {\n      max-width: 740px; }\n      main section#reviews .content .reviews-container .review {\n        width: 380px; }\n        main section#reviews .content .reviews-container .review.right p:after {\n          transform: translate(340px, 10px); }\n  .download-buttons {\n    flex-direction: row;\n    margin-top: 30px;\n    margin-bottom: 30px; }\n    .download-buttons .button {\n      width: calc(300px * .7);\n      height: calc(85px * .7);\n      border-radius: 10px; }\n  .social-icons {\n    flex-direction: column;\n    right: 10%;\n    left: auto;\n    bottom: auto;\n    height: 200px;\n    top: calc(50% - (200px / 2));\n    width: auto; }\n    .social-icons .icon {\n      position: absolute;\n      width: 60px;\n      height: 60px;\n      right: -500px;\n      bottom: auto;\n      -webkit-animation: social-icon-slide-in-right 0.5s forwards;\n      -khtml-animation: social-icon-slide-in-right 0.5s forwards;\n      -moz-animation: social-icon-slide-in-right 0.5s forwards;\n      -ms-animation: social-icon-slide-in-right 0.5s forwards;\n      -o-animation: social-icon-slide-in-right 0.5s forwards;\n      animation: social-icon-slide-in-right 0.5s forwards; }\n      .social-icons .icon.facebook {\n        animation-delay: 1.5s; }\n      .social-icons .icon.twitter {\n        animation-delay: 1.55s; }\n      .social-icons .icon.mail {\n        animation-delay: 1.6s; } }\n\n@media screen and (min-width: 1480px) {\n  header .left-container .tagline {\n    max-width: 640px; }\n    header .left-container .tagline h1 {\n      font-size: 3em; }\n  header .right-container .iphone-display img {\n    right: 10%; } }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCyRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAmAAAAWodpAAQAAAABAAAAgAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKQAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACbKADAAQAAAABAAACygAAAAD/4QsEaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZENjhGMUY5QzAwRDExRTZCRUZCRTk5OThGRUMyRjA0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZENjhGMUZBQzAwRDExRTZCRUZCRTk5OThGRUMyRjA0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDY4RjFGN0MwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDY4RjFGOEMwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/wAARCALKAmwDARIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBA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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABVCAMAAADE+Sn6AAABR1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8FBQX8/Pz+/v76+vqfn58bGxsMDAwICAg8PDzh4eEQEBD4+PgjIyMKCgpPT08gICATExPFxcUoKCja2trQ0NCurq7v7+/n5+f29vbu7u5YWFgXFxfk5ORubm6xsbEvLy94eHhnZ2fU1NSWlpaZmZlLS0ukpKSLi4s2NjYVFRXz8/Pr6+tVVVUmJibx8fG3t7d1dXVJSUlGRkZERET19fW+vr66urqEhIRBQUEsLCzKysq0tLQ+Pj6Pj4+IiIh8fHxgYGBHR0erq6uOjo6AgIBSUlLe3t7c3Nw5OTnHx8daWlozMzPAwMCmpqahoaFkZGRdXV3p6emoqKiRkZHW1tbNzc1xcXHCwsJpaWmTk5N9fX1sbGzm5ubJyclPR9TWAAAADXRSTlMA/N7xgUbRMJhmEQggiBKIdAAADPtJREFUeNrs1ulXElEcxnHb1+eZjW1QFotFIVBGQUTBQkFUBI0Qza2yRav//3WzJNKCjIl1TvJ5OTPndzlf7lwYMj26c/vuLQz81q27t+89Gmq7d/MGBs5x4+bj01a3B5uqp1sPvrfCgA1mrTuDV9CWG/eGhh7exIAtdx8ONpZtN+4M3ceATfeHBm+hbTeHBm+hbTeGMGDbINbfiyXgOrlMrOxCScMVEpwjtp5yXma2fZeJ9VqRySB6Wp6rT04ebgzjwl7QI6CnafIPZk/yabfZ/Y8lTMjUJdDLCHUSyaAfnf5ZLOGvxxISNJXtxNqbfn6oRBmZRqd/E6sYOv7bsdQgTeJzO7EmoKs84eI8OvybWO+4+rdjNWgJx2zHQizKmlW6HNw9cUF3WDsQgEDNeEA4qCUBXy3p+rC9tPFjrNbb7cQ4LDuh96U6LGpjpeD7KVagsftxPWZlrC1jMrg7jrbsRJBHtVrFijW+tHsIi1DeDp4Yi/U/VnKWlhrsx0KCX6ErRylLzH82YtGTBQ5IN6DmZueBfVZTJMUp4SyWf0lklEyNAhBSnM1J3HaZMeLUpTpjCbUwvSLzJ9ApTG9Tt49TlUUadoxYTX0sxYQ5aTxMT5jxmSuIJZRoeY+LxCozD2BOii4II2lKRWAkHK0AaUmqGmVSTkAh30+vrYqLw2exQtxq4fUWw1kAn4vAzBgbAOYlvm/FPoQ7Yy17vWWnSyPrAI7Jo1futCi9bn+Y1iY/ut1ZIxaP5lohcg6APyyOQ5iSSuh/LH+OlrULxarRC6hehoyrOS4JEHZ5AGzlvmy7EOIUgClKfiDQ5LN2rDWJrwBUJO7guz3GASww5wTQ6Iy1xYIACB+5C2Dd3LLZN1R+d2aFVUCI8yWAVXPt4UUx0P9Y0xINYz5cKNZLRoAZsmidek9UIMNVJCVtJRxwRjljxjoC4Fphph0rQ6rQvWfVXFz5mMpzTABCVgRfR6xhchK6OiNWrBEATS51PeALxgy1yVC1WtW89PU/Vpk6ybOMi8UqsQBskH7odhjPAmv0utJiReOc26hkxHpqxAqy2o61xzwMq0wDzhBnU6WUGWuX5Z9/DVvkNHTLnLViuQCkGOwaK2EMjcWZD5ue9z/WPklvOYCLxarI0oGRh62znSVEuBFNwc2lZ2x0iaVRGoFuxbhWl8ZGBTTMWAVqP++sClm3vorIBWJlPTx0mFz9jzUZeld3ABeLlfQw7gBiMtMC4PSYhwsy3BMzgEd8K691ieWzdktSlsaBYyYAKGasdTZVY8RZLCP+pgDjLCx1iZVh8JdYQpBL7Ux9iOX0T0+UF5YdI2hTRz8puyXlQzIg9Ii17vAnMzIj89A1xEWfGnhHbxG617KXG0CGs2OBLrGwwqcOdb7JXBYocyumLs8y7AJaIrfnY75Fch6nDmXvq0CgTHGnS6wFim6H68dYKHqZcQSyfn8/YjmUZpSG/NG6AyZ3Ii7TJEZKrfNjybOLIsW9YRiEPcqeL6K3DkPMQ0nVs8jcR7dYoznmPWFu+c24HPNECww7ARyIemNJIZM4JUxRjMdF+YPQJVaFlPPun2LhGZn/8sY7dflYamOMZ6KJTxu+xlOJHbzKMLoRjvf3NtPvPo22L+zsl1arp30ntGcAslXNur+jmf/mF7Q5o5JWhiEwESptTsRgmFFKm/WYVnVC93y/FPrk1LTO1V8phcLxMgw+TTOCnGgLOLOWLmyOAm6tZtz7pNWtsZnQ6tuM+9KxHEfsLe7ANdAzlqNJO8bc+P/1ijUcoT1L+P/1ihWiPTk//n89Yh2KtGVVxTVwfqxAnLYEr0WrHrGKIu14cx3ewZ6xFNryAdfDubGEN7TjCa6Jc2PN0JYJ9OYYNxTRL4GDxNabeCo96cQVsxtrknaIz9HbFA3NAPqiWIi2V18p4grZj7VuL1YFPTmf0iC30AeuBZFnxCSukP1Yir1YfvTk99KkoA9ORHZIoc11gH6zHyvdt1hlkhGSiyourfitvXN7ThqI4vCo43U8v2QjIPe0Bcodra0FoViUVqqopYrV1nq/VKv//7PZhc0mptDUOKMPfE8lyewm356zZwk0GABYtrgVSuzvfXzxkUbUHmzEQX+VAJEVIA0jbQBcGIoUFG2Du1onidT/DMC/lPURfmADOokBLEIGgNsUFDMKoBkmN/9e1jp88ZRO4jGADdoBsEtBCfEovUsegsjSkhp5OKWsFHzxmU7iM4C31GcA6mTTqlQqIaJI/fYPZmQq9nS2VrEgolLllYHcwfWIW1YXQIbcdCqVDVhUOAmpIP39YRzG0pN0xLZi7d6OkLb/qGvM04jSjc862KfvoWCyEvAF26bprOlAN0ThMoDXZPNVzGE9eYu6sKqRoAiLsHarAIGRuU4OSrxQ5Gvk4gMcdEjQf5XHCD0zpDE68KMUrsYBjGSFqm2MuJNtBJFFZfgiOn1QRKHIJEm7CwtVO/nLL0UdNh80FdD1TdgUVkgRmRPRXD9JlmsxFr+hkeAO0AwtA1LW1hIUG7Egsm7DH3enpnwsD4gPRI/c9bAKIGsAejwf18HZIY4oB3MAM7p5A5zuPimKTMTbath5ooahi60cUXC+iJh/v/x9pyuOXyVBE8i9hS0rneMmb/cT2y8Y71QLIGuPwR8703oRN3pe8gwyXF8A2oHgWi1C4es8J8FWxPEQlIsh0tJHbaHONZUzcN5X76vxCI3Cxf5cucP7zBW5UHNVJFmdOIuA0QSiT94eNsbj9UKMRIQfZXQCyNq6A5/8rNFE+Gks2HqaEVfu6OOZKrIBWeWug9Mct7iXh0WLFMlrcYx4lUpOqIZfHbeONNFRVBz6Q/R5ECNBi8dVj0bw9H4UQJYWhV+MZ0mawK69vOgwANsuWXOas5qwki3rvnLt+TwkJSOeZcxjZfXEANIYUVlwjyzEBW3Ky3vtbLnFABb7c1l0E77RW+RFnni+Tpz0ewBfpZ43sFgnyYGo/VLWJ5LU4zwy3VdhVpbGvnIttyw1HeopV4XBc1tWyllYe65+UgFkaYvwSy5BXmQAlUNhTuynvAltX8JLkgwZgAMpa4cksQJ4CSM32nAzB0573ysr+QJAQZ3QO1hkpSwjLGcZHkvD1JgjLms9gCx6Al9MSfcGP3G9MIKfD+s4Zc27I+inlHWNbJZ4aKa9AxnLghONKVnOkImaJKmJCU7KWlAOPawGkVVj8Mcdb2ApB26yx8sSX+vNKFmuydo4rnntsMt39Tyy0u/dmZsAb1rKekhjvsDDgyCy6Bv8sUwT+Ijf0RvHytrPi+H3yvosI8uDtiOmPa+sJoBdJWteRpZXFltwsRdIVuwFfDFPxxPh8bKYlSzA4uhYWX0dwAevLI2HSSFEHuSh3zyyGmX3l1UG9jyxKGXJNGSxsBMtkCw6gg/0I5rA0B3cRbngl7J6JLkBixvSQJYkaa5715z87vWWR1aEj0m3RpLnsHjikVXT5RJFEUwWVRlOZFMjL2p9MFBXzhv7EVayntoBtMClz0tZC3aLLR3AxvEdpIRgVYpk5i27m56DRUvJctaB19rflBUq//nszhXIWq3WyWyoZC1pzptnr2RuqXuh2idY3HQktuPP17z1eyowO3JMDH5Wcp7r8FeG6ZGlbfLtnb8pi3ptTCc/pEls6eLtoKIPi89KFqol4qSasNi2ZcHYI46ZFXGmDCXnlu+P5SeWeetlU+X7RtIZ0Juj4+o5APo2KVmud63vi5qUVwoui94yTIPdool84PvXyEFUTOtKFhYPQ2a9Cs5uRMri3K2bjZs5/Db6oQKQf7TeSlXu6mJfajwseVjMvWtVyGJNvCrXw8lYsS0aI6csySoT0f2uYZqNl893M39BlvZFxxS+Tc76kiGnH/e9hkNbFs9xPQ7BUkOVuIIQoUPg/IetFtzIdA0vYSyfODWuBUZ5t8nABZWOlRWuQqB387yrZiOoLM56F2OiO0+LndaNg13pL7+cJJpaCw/cYSpyz5a1V8YY/es8KVlvHsftGXGdHDyPw8FCUeVUE4IcCfoZBkn8tkkuWYoHbSi6+4FlcdaiOsCMhRWSDD4ZOmP6Ym/qktaw2CYnjbi1KafZ6yztkcGb1tuHInzUOqvV1hmgG3MmuZiv5g2+h+nG4k1yUCvozNp6R+bDEX/NW8jUSFK2Op8jJ8nlOL8Qq7X4zxUtuCxOsl5s3VtzNqYl+p1BLULTMEMWGrko8W1KltVOb1hc2Q8TuWVReH+lOOwlyENsq99JpQYv07+1HKkNUiv9hDrn2r1hK9VP/9a5SW7CW/1B5/71+ZiPavhvULIUbln/HzNZvpnJOgUzWadgJusUzGSdgpmsU/Evn8xWWrPQyEOEby/Rf8eZ2TP//HN29jRJ/1yaPafUN2fOz56A65sLV2bPVvbLmYuzp3b75vLsefB+OXd59ksDPjlz4Sr3NPsNixNRv2HxC5g0TkqFH0uCAAAAAElFTkSuQmCC"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjYyRjM0RjBDMDBFMTFFNkJFRkJFOTk5OEZFQzJGMDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjYyRjM0RjFDMDBFMTFFNkJFRkJFOTk5OEZFQzJGMDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjJGMzRFRUMwMEUxMUU2QkVGQkU5OTk4RkVDMkYwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjJGMzRFRkMwMEUxMUU2QkVGQkU5OTk4RkVDMkYwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEABALCwsMCxAMDBAX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"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjYyRjM0RUNDMDBFMTFFNkJFRkJFOTk5OEZFQzJGMDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjYyRjM0RURDMDBFMTFFNkJFRkJFOTk5OEZFQzJGMDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDY4RjFGRkMwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDY4RjIwMEMwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEABQQEBkSGScXFycyJh8mMi4mJiYmLj41NTU1NT5EQUFBQUFBREREREREREREREREREREREREREREREREREREREQBFRkZIBwgJhgYJjYmICY2RDYrKzZERERCNUJERERERERERERERERERERERERERERERERERERERERERERERERERP/AABEIA2kD6AMBIgACEQEDEQH/xACTAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUGAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAUQAAICAQMCBAQDBgYCAQMFAQABEQIDIRIEMUFRIhMFYXGBMpGhQrHB0VIjFPDhYnKSM4IVQ/GiU7LCJDQG0hEBAQEBAAICAgICAwEBAAAAAAERAiExQRJRA2EygSJxQhORUv/aAAwDAQACEQMRAD8A7JFJLYpOcjdDYgA1jJpg2KRNlw0rMxuy7MysyYazsyJKbICtamlTKptUlIpI0qiUjWqMtGkWkNIqCaqYBosTLqMbIyaN2jOyNaxa57IzaOhoh1NSssU4NEyXUXQ1itlYuTBMe4xYutdw0zHcWmZxrWklEI1RFZtEupvtE6jTHLapjZHXZHNdGozXOxF2JOsYApGIqGdXHq2cqR6PGocv2XIO/DWDsojHFXQ6ao+Z1dai0NsEhM5qzuzBvuaZGYXt2NyIJEmTISeniCpBakbhpnr5GkCaKWorGhkzKxqzG7A5shyZDryM47lRi2CY2gSAJCRwJooGxDHWpBI0mbVxmtcQGFaNmqozppiLWKAOZVKg39MToZrUZDRTqKqMNKiAgcDgqFtJeM2qi9kmoy4nUTqdToZupRztBVGlqiqiK3xI7sa0OLGdlGaiOmpaMqsuTSGyZBsz3AayUmYKxpVgapjIRQCZlc0Zncg58jOe1oN8jOWxis1pW5tSxy1N6MsI6as0RlQ2RtowkTJA0TNEznkutgN5IYtxNrARc5chvaxy5LGKsYX0I3BexnLObbXcKR4sdsnRFWSo4erXZGk9s5ZdcOS3RGdt7cqK/mE5no8lo+BPtF+n5rpXt+a3Yf8A6nOzjfqdd9vxY65uRX7b2/5D7Rr/AM5/+m1/aeR4I5cnA5FOtGdeP3Xk4+rVv9yO7D75S2mau34rVGp0l/X1Hg7bV0smjSrPp7LByabqpXXwPPze0bluwuP9LGuePNTHIrY7YntuoYSZPQAUhIxrQCYCIpyS2JsTLCk2BNgOnww6ZHJEjkxGqqQkhsJNRlcksEweppGbMrmzIaIMGhQaOoVo7NVqm2+y1ZhdFUapFf21sf8A2uuP4Xtr/wAVLM8mWlNMbdvi1tX0X8RlprZGtTiryWp3KfAuvMSUbNfHcT61qdPQqUcX/sKN6VaXzk3ry8T0bh/6kZvNa+0bAPRqV0FBkqWjNo2glomuVYupDqbtGbRuVHNdGTOi5z2Xc78iWx7iWKS4NNxpVmCZpQ52NyuirNqs56m1Wc63G6gmwpJszLTO7OfIjazMLM6cudYWJLsSdo5kDAALxqWevxqHm8eup7OCsHj/AH9Drxo3SM6I2R4K2IIZZnZmYOe5z26nRbqcz6naMpbJdhXZja56uIutlYtM5Vc0Vju06FeAd5MNwbia1jW1jK7E7mdrGpWbGdzmupNrMzepuMMtpSoa1qaqhRzbBOh17CHQDl2mlaGvplVoA6VOitBUrJ00qQKmMvYa1Q9oVzOhLodLqQ6mascrqZwdVkc9lBhoJFKoqs1qixKK1NIBIo2yytUytU6bGV0ByWRKNbmLeplW9GdFWclGb1saiOqti9xzqw9xrUaWuTuMnYaA2q5NamVEb1RRpUoSRQGdjG5vYxuBy3Oe7Om6Oe6MVkqs2qY1RvRFkV0UNkZUNEaU2yGxtmdnAFSLfBhbJBi8wHd6hLucXrh6wHRe5y5LhbJJhaxmhtybYuO7+Z9EPicf1XNvtR6Xpq70UVOdsjU8ufffbsx+Wvj3f8DNYIR6CwwK2DcoOF6tdJ4cLxLsQ8Z3/wBvtUE2xEHm2xkOh32xmNvJ2kso42iHSemh2Zap6pR8DHbBdWWz0wpkvgtuo3W3ij3OD7vXK/TzeW/a3Z/wPK2z1MMmLZ8jc6b8d+/b6vkcanIrtuvqeByeJbi223+1/bb+J0+1+5tRgzP/AG2f7H+49nLirmo6XUpnT35cbPrc6fK3o6PUg9P+29K/9tl1pb/rt4fA4uTx7ce223TsJfi+0sz16YyMkaFiSkyWWxNEVnYC2gOnwyqQkICDIAQQNIoBigC6hMllQ3olLekIvLl/tPJSHm/Vf+T4V/1eNu3YCL0rh/7m93/46/d/5P8AT+bJy8lKta4Fs087r1c9p66ftOarTbUS33f+Oo7VhwBAioEyhAAFDNMTrKV1NfCY/MyGgjemS2KzWNtNPo/A7sXJV9LKGPi4sHIxrNmTfp+XJHh2t/Ewpj87rKsk4Vl3+Ji8y+1dkgUuPetZ6ozbON5woZFuhTIsSIxsznujouY2O3IxYi3Ulo6hI0qSqlpGOljappVmVSzjW5Wu4h2Jkh2DWi7MbMdrGTZuRm0rMkAOrAAAS1JaO7i0k9jCjzeJU9bFWND537r5I3qjQmpZ5K0TMrmrMblgwsYW6mtmY3fU68subI4Oe9jbIzkuz28Qi1YtWMkUmbrpGysDsZyEkVTZFmDZm2WJQ2EmbY0zrGHRRHTWhz4tTtp0KiNhLxm8BAHNsDabtENAPGjqpUwodNSC1UqAQMCGZ2NGZ3ZGmNjGxrdmZyrcQaVsQxLQQroVwdzJORSdI5tN5NrEyS2UZ3ZizS7kiDNQVZtWxlBa0JqN1cTuYyxNl1pqrybUcnGrHTjZZR20R0VRz4zqobiLSCCkOCjJoxsjoaMrIDlvU571Oy6MbVIMFU2ohqppWoFVLJSgZQrGF2a2ZzZLFGOWxy2saZbHPawRW8W8lalRIBvLxVeSyqu5G09D27Htbu+pnqyTVj0seFVqqLoupta9MSmzgwWWIqmlL+5nWuJj6vzP+Znny9eXT04cnPVftX/LT/Mw/v73+2PpWzPWWDCnpVSU/Sx6uEjX0PtHirn2em+k+DlftNXzbU1zUar/ADV8yJ5fDqm8radbanm4s1+Pd+lLr3r2Zm8ukmzw9ulqZ1uxuURfCclscU/veJo/107PxPS4uavKxLJXv1XgYs+Yw47YjC2M9S+I5r4zKuFUgtY1ZQ+hq6DrUo8nPheK+3se77Tz/Xr6V356/mjPPxVno1+rsePiyW4+RWX3VZ056dP7858x9Zmw1zVi3boZcriLPj2v7l0ZthyrLRXr0akz5eb0aq/ZPU615/4fMXxujdbaNCPU9zwpxmr0Z5Yl2J6AQMaRcENAW0BrEOBNFJDVZMaIgcF7Q2jVQS3BdkKiS81uiCrb/tqb1/23Xl/018fm+3gcleNZ1bS6I7cGO3KyO9u56646qjSPnvbsHq3hrWf/AKhyMe29uqW5r4N/uPoOPiVcrs+1WeXnw2rlu+lnb7u1U+koDzLVh6/j2IaOm1UlL0r28LMztRp7f1Pt2KjAC3X8PAmAJGgGgPR9pzennVba1utll+z/AB8TVcf+1z2xdk9P9r6fwPOon1Wsa/GT6Lk/16YuSu6i31/gwO7j0TocHP4eycmNad0ejxn5TW1VZNMzVfLbyXYrkY3gyWo+ienyMjGMlYhlMRYIgUFwODWiFUtVKVTTYc+uhmqjLdROpjTUMzsatEOpY1HPYg3dCXQ6SrjCAg2dCXU1rLMvHWWJ1N8FJZOr4HpcWsI9LGjj49YSO6i0Pmfsu2ka1KEhnFpNjC5tYwuagxt0Oe70NrnPkZ24nlly5HBzWepvkZzs9vMIaZaZmUmarcaSS2NCaI0hslspkM1GalsdWJ6iWh0jDrxs7KW0PPpY6KXA7Nw9xzq5W8gt2Ikl2ErFHRjZ0UZy0Z0UZBsmDYkNgSzKxqzKzI1GNjM0sZs51uFYiSmyGyFUmEkSJs3GKuSXYjcLcaZNuQJTLRhFKpUCTKAmDNo0bM2FgSOnGcsm+OxY09DGdFGcmOx01ZuI6UxmaZUmkDM7FtkMDKyM2jZkNEEQUggAATYmzO7KFexyZLmmSxyZLFRnexmJuWNAWkWkQjSqIBKTuxW2Vg5ao0y3hv8A0o4/svw6cQcnlK+P0qrWdT0MHu+Ola48qtW/SIPFwR6lE+ko9vmcniJ+nn6x2Q5df2STOcd6zWspVXAsl6vG3dQo1TOPjZKXrODdavxM83Gz8l7MjVcfgur+bNuDnxcXjwm8qSesbjttjx8WqvRKx53umDHgVFWq10k5Fzcnp1wpfa9DPp1ktmvouGsN1b006y/NVmXA4V+G8lXrRvdRkVy/2vHdra3fReLZ1cCuTHhrXK91viZ2VitrKTnyVOpnNfoca1HJZCr1KsStCK68R5nufE25Fkr0toz0cL7G2XCs9VV+KNc+yXLrL2vHemN1t0nynTyMfq47U8Uc/I51MFq4q+KT+B1zJ6HO7uvJ4dvWwWwW60cHk2Tq2n2PTS/t+bZfpucnuGPbkbXRmeLnWL3PlzJlIgpHZzUwEAGiLRlVmyZxdMOBNFCIuM7IzzOcNI7ZMlX+COnHTfetfFow5dViraq6evePpVGuUrv9uarU77ZUeDhz7Eavlto2y9K2ZVlnPXlqLerVOrUep06dJOC+eV1IpnaWvbpSdLAdb4+S6tyK10ThUmV8zjeJQ611jXItZXyOjj8jJge6jdnbrWfs+a8Dty8fFlx+pivFE/PtfT4fII8O9VG7rXpXTUysoev4nflm3naVbv7aTo/icVl+ldf1FGY+gvkVXRyvwA2qktbKdus16y+mh73tzWTj2wu250fX56/tPFwRV6Pa69n9rt2Pc4lPQo3ZJNtKV+q3cg7cb2Iq2bTTqc2TLClHFbOA/cKLMm191dfoeWkdv9wq2Tt9sw/kzHNgeG223z+hmrPLAUF7Q2mdLEQNIuBpGLWQqlpCRSMIIFtLgICyM9pLobwLaWOnMc7oS6HS6kuptrHM6GdqnW6yZ3oNYrkdTq41Ohk6Hbx6me+sjDuxI7Ko58SOmp8/qtRYAI5qixhc2sZM6RGF1JzZEdVjnydD0/riOHKjCDoymDPbJ4CGhDGNLQMmQkmGk0Q0aA0akRk0KDRoEjSFWprXQKoqCWmHWxW4zgNTOrit5aZkVUaY6sZ0VOajOmjNDapcEVZUlQmY2NLMwvYisrsxdir2MHYxY1Kt2JbI3CdiYauSJJ3EuxuRmqbCTORqxrGWiZomYplpmLBqrQVuMUx7jItshsTsQ7FFSVS5juErEbeljySdtLnj48kHbiym4j0VYtWOSuQ1VzSN5E2Z7w3FDZLQ2yZACWxtmbZArMxvYuzMbFRjkscmSxvkRy3QEGlTIuoo2RpUzqa0XYzopPUd/wDtdH+quhrlwWxQ33C/H/uEtul19px6v+ztz4jhrhvZtVTbRO17ohux9J7Xxr4la2ZJXZ5/u2X0ORV40t0ayax0/wDXb6d3tmO2LAq20Z4nNwZsGR3s3DcpyFvcuTb9cfJGVsmXNpe1rLwLb4c54u1WflZOVtVlrXv4m/HrXA91luv2qupOHjWfXyo9HBhpi1Wr8Wc7Wt8Zz6bcbBe9vVz9f017V/x4noyjlWUr1EY1nG1rHPksK2Qxvcgi9iVfSDO9iFYiu3HY61bQ82lzppkA8Dkt1yWr4M+p4uT1MVb+KPl+eozW+Op7vtF93Hr8JR35a7/rK5/eJpfHkXiZ85K6VkdHvdZwq3g0YNb8KfgiX3Kx/wBXn7QZYQdpXPEANoDTIqzRMwqzRM4OrZMcmSY3Yiuzgrdnr8JZx+6W81Uu9smT8bR+46fb7NZPU/TXRv59Dz/cLTnsv5VWv4LX82zpz6Y69udWge8ykJNstHYunw1b6fAnGq9b9CZl+XQDqo7KzqtMj+68aNeB2cTkek9+NRiqovj2/d4tHNw+L/d7pezDXW7f7j3eLw+Jetb41v26Kzc9CK8zn4vTadJyUuv6W1fb8jk/9dyL+VY7NfzPQ95e41re2PbCrv6PXyKZjwfYjJ7latm61WxJpS+tvL+CSYHjL2blv9CX/ki17Jyu9a/8j0qc/L5cV3WWmnfpL3Ovl+Wj+Jp7dmvk3bpelLa+MQ/zQHlf2XI4zr6mPfX/AE6vc/2Hp5L1wbcNWkqJKH3s/wBpdq8r+7Vq/wDTEddF9PE4ubbJvtuqr7Jh907dPwQHdltXk1ezTIv0+J4l8msPqaZb2rZWXVdzHLkfIv5at377VJUTa25Qd928uLFkfXa6P6GFPbc9qt2SoonzvV/RSPi2vFb31x3s5U+aV3Xf4MzfKw9gbDqyYttnXrBDqcLW659pMQdDqZNGXOxCLQoGGVDgkpBqHA0gGiusDRFqmhNiqyaIsjRmdgx0xjU7uOjkqtTvwo4/tvhz+XZjRujKhqeOtmJjEyDOxkzSxmzpyjGxhkR0XMMiPZxBw5TBnRkUmTqeuIxaGkXtKVCoiAg1WMr0yKxGabA2lGUDSNNoQTRNUWkCRaRm1qJ2i2mkBBhtltGkaQCRNMXjR0VMamtTpGK2THJCYNmoyVmY3Zq2Y2ZRz3OezOjIzluMC3CdiZJkYapsUiTEXEUAkM0ikUiEWmZsVUhuJkTZnA3Yh2JsyCYqnYaZCLSGLrStjemSDmRomMHdTLBvXLJ51bwbVuaiPQWQtWOGtzetyo6JDcZbg3BVtmTYOwpIhNkMrqVBztYtc9qyY2wT0O11E8aMfZj7PPeBgsTO542S6Qa+zX2c6obYsc2K2nRgxqyb8Cy61LtZ8vdXam5NPb/NkXwJ5FXaq8UVwLendmLP9neentXuqKWfNZs1eRlvZqdYX0PU5uTfjtHZHgYlCL1fCcupUouiQ00uhluDccvLborY2VzjTNFYg7FkHvOVWKViDffJna0kyJsomzFIMQF1sbVuc6LTIOHn65Z+B63slv6TXgzyOY5uvkep7I/6dvmd+Guv6On3dTx2cNKt4V4I7/dNePY5OPZPC0zV9uc/r/lxAaOpDRmUsSwE2B01hzKxpW5zKxSsZxp07wdzDcJ2Jhr1va4yLLjff03+Z5Wezve13+q1n+Z2cN2x48mddHV4l82pn6HC27avqbjNZgbejV1bV6yv06z/AA+nUFixRLypPwVLMqMmwWvXoaPHiX/yf/YxTjr+pv8A8f8AMD1vaMC5OLNivorbNUerxeH/AGlNqs3rMs8T2z3CvFV4raye1/I6l7vmzJ+lS0LrotCK9R8HHazu1q27fjXa18miq8HDV7lRTG3XXSI/YeDf3Ll2hKV/xX7jmvl5d/uyWj/f/AaPrFipRKEkl006GduXgx/dkqv/ACR8lbBe/wB9p/F/tKrxMa6tv5QTYPos3u/GxPq7SpWxSjy+b7hheRXom9ynW21eGqMVi4rjdW1YWvn6sx51cVmnhddlVtUPXx+b+ZdGq5mNKbNN/wCnG7f/AKml+Qr+7WSiicf6rQvwpH7Ty7Jm/HSali0bv3DPeUruq/0KP8zDj57UvRtylaYfx6jzrak11LfHr/ZrOl5lkdG/hGgl0fQZ2rZLNdDIMdvUpW/ikyoPNfbbNoytU3aIaIyxgINNobQmM9oy4CIKsRI0waEjTouSLMZDAizM3ZlWMis1ri1Z6OFHn4Op6OHoeb9vtzjqoaE1LPJWgJjJsBnYzZozNnTlGdzDJ0N8hzZXoezgc1kZsq1jJ6nqlKaaLrUiiN6oqKrUvYOqLgiMnQztU6GiXUmrHOI1dTPawoVSkh1q2XtJViIHBewloxY3KQQOBwMNC0LViYA6RitFYqTCYHvNMtWzG4O5FrSXRnc57I6GpIdQOWyJg3tQzdTURnAQVAioQwABopIktANoho0gTRFYtBtLgtVgyMlUaqaJFQFZpFQXtCAiRpwOBM0LVzemU5CquAO71BeocysOSDd3Gr6HNuKrYzSuqtjRKTCjOmhw6cKaqN1LAxqMtpLRoyGUS6il0e6YLTjUbvTL1XQ6cz5dOJ8ssvPeJ+asr4G9MmLkVV8ejOPK62vp0+I+PjWK+mhuu0elzEvQdk+x8+tEeryrWtjtSmqPLU9GY7aipAtUb6FrGjk2yTLTHbFHQz6AbJlpmKZrUg0Q4Cqk2WNxJrBg6kwdLxmbpBMGSQytoQQefy/uPV9kXkt8zyuX9563si/p2+Z25a6/o6fdP/69jzeP/wBaPT91X/8AHsedhUYkx0zz/X/KWzNjbJbMjOwCswNay4ByIR0YVIOwhDDXte2PG+LkrfV1vu06qVocfKWRv1r2V1daWiPt0ajxRx1u6Oa6M73npbg2o15/UTX17/uA89MdMbv0HiX9SqZeHy2tR/4gURsqut19BquPs2zJLUpog6cOT0nNW6J9fNq0dGX3FWnXR9jzGgjuB2X589EZ/wB1Z+COYqtZJitHnu+jJeW77s6MfH3Vb7mN8VqPUbFsrJ2b6sqqRSqrNTJ1Y8VW+kC1JHPlpFQ42i1OvkY0qMzdK0iCS+FvtnnU1O2mOPbbWfR23L4NOPzRyZq/05fiketSMftSd1K6x4+c1GaXtznj1ns7L8zqgz4uJYseyvi3+MGp5+vdb+ENENGlnBmyJSgQxMIQmDZIWBkjYG2ykhspkMoixkzWxkys1vg6npYTz8CPSxI8f7fbnHRUsmvQo8zQJsURYCGQyrEM6cjO6OTKddzlyns4akctkQaWRmd4lVRG9DCptWxtzboruZqw9xBUA0JMchS2i9OS0aJSXFZrGV6ZuqlKhcHP6ZLxnZsD0yYa4vSF6Z3emT6ZMXXIsYPGdfpidDWMuG2Mh1g7bUMbVKOeBbTaBNGarKCHU1ZDM6uMnUh0N4kpYzcrNcnpkvGd3ph6RvUec6Eup32xHPbGUYIuqB1gqoQMRUCYUioJRRihFJCKqFUkKyKEyoiAKgIKM2hFtGbArcPcZSG4g1kqrMZLqyUdlGdVH3OPGzoozneWPq6UxtmKsDuc/qzirWIbM7XMneB9WcdG7sZUcNmdcib0Fkttu/idJPDrzPDTItJQ3by7iaW3Jpmd3FNptt0cC0OLdw52FJ7kcLvalkd+LIuRV0t1MXy1HLS6QWz1q9TLJitittfTxPPzN7mc5xt8tWvZrkVloRdT0PN4+Z0cdmegnJm85Vl1lTJrtsdNTG2NWcs6cNNzSQV0Y5rVtKTSt3tdno/A78WBVrDMbYqq0Sd5MjnfLLFutXzqGK9O6NtzfU58l29Dn17aiHUK4tzKpjvbsbrj5X00M/W1deN7hhdMijuju9lvsratvGUd9eAm5yOWb14uOvY6zmwve8/VhyslMmO1OsnBjxtY/Sh/ge3trRdkicmXHjU3aSLZKxLfUeB/aZmpVWYXo6uLKGfSf3OPszPIseVp2o38YJ9V2vmmB9Hsp09NR8QH1NfGwA0hwbYSBTEwJKSlJfEljWqaA9Xne3PBmWTGv6Tslp+n5/B+JnnwrBzKbl5LbfwejPc9t5FeXgTf3JbLr/HicHv3H248eSv6W6/jqvzMq8/ke32xWt4IwWI+ko1npW76Xqp+q1PEyVeKzo+tXBi1uOf0A/t2F8zXTsKua9v8kJpcJ4INKUgqu6Zsa1x2ant4ktakdHHar9UVele60FXZVLXXuje2OmRRW6kytcnp0q9PwB5Ma0nXwDLgtjtG5OVo1qYPF3s5Zvwx5VntuxthjxO7IVXZKndtI9rFxlSI6lkSvO5vGWPjO9uu6qRfJ5Lw8Pj0ro3F9P8AHxNvfHt41aLvf9iOe/FyZap5IpSixre/tVart4/vZtl349Kx8ypMs2emGHZ+W2qtGnm1X5EW5WJKXeqXzOHUutyzGlmZtmT5eJ6KyItyMa/UjP1v4StnYTsRXDnyqcdNH3v5V/EP7PHVpcnNXc/01cG5+u334Z1NuRSvefkKuS19a0u14qrO2vAwY7q216dm5XzOW3v2Sf6dK7e26Z/I6/8AnDWTyuv3VsvnVjrkVloz1uBzr8qlr2SrD26M5Pd6Y6quRV89m07fJdy/SL9q55Jsc9czR28TDblztaSWjfxJ1+v6+dWd65rGR3crh3wavWvijjS1OVadeBHoYuhxYEd+NHh/ZfNc2y6DEhnFQRYsiwGdjOzNLGVjryM7M5ruTa7Oa7PXw3GV2Zl2IO8ZpoupCLRphacFoipZWVyAkXVFxVVRtVE1qbVqXFaVqaKoqo0SKFtDaXAQRUbQ2lwAGe0l1NRNAc9qmFqHY0Y2qVHJapDOm1TC6MWKwvoZl3M5MY00qjatTCrOipuMqVStpSRSRpHPahz3xne6mV6lR51sZG0671MbI0MmiGaWIZBI2ySXaCC5KqzBWNFYDZMZnuHXVgWhtDSGFZWRnY2sjKyCMWTJTUElFI0oZVNUB0UZ01tJx0sb0sTNG7ZDtBLZnZkxMO2QwtcdmYXsMitaX1RvyNLp+Jw1vqenbF6qVp0RPSs8MuxWX70jVWjTDV2a7wc0X9Sb9WAclTbQywVsryjqvhta+grxhUd2c88tfDDk53bR9Ucz4zzV301a6od1uZKbo5WjJb+FxnTBZOWd9DB3tbqzStjHVtanhslLS8T6HBxqUSaWp5ft2Ct36lux7dX4HTmM9UrvapOei3s6XTdo+hSql0NWajP0U9ArgpXsagJJE1FrVxqXohVz47/bZM0aT6mN+NRuVo/gVZnyu97LopFZWutHtMMjvhq3Dcd6fwDi575abrr6oq540/TaUXe5fKRejS6hdPBP9xt6eN+ZfijHNelItd6fzrt8wsvlzf2WTE5492v9Pb8zowXyW0yJOPDQt2dqTbzLtahhxcmXLbbkq1HS/R/Ui7bPLqjw1+HcCbYb2cu0PtZdQKxk/L4sYkURCgIGAENCRcBSu5peLgo6+Fzb8bL6n3J/ev5l/HwPf5uzmcO9sb3J131f+3U8TkYsX3pqmO7nHaG+mlqvwf6jTg8mnEs/61bUt91dt9fj06kHV7Tl38dV70s19HqifdcPTKu/lt+4x4Ppcd22ZaOlv5rbbaeMnpZMmPNjtRurTXa9fp3JYsrwK49ZNUkug1juuq/+6v8AEV5qm2nC6nKyumwkm3oZZOVdPalB1YsialJuf8eJOTHve7br/ur/ABLJ/CWxyVd7F14+bJbyv/ISy13bdF8W9Dd8t46J1dXaYS16fzGsTXUuNbFVKz3NdWY5UYW5vJz6Jf8AGpz5PVn+p1+LJ9T7OzDeqzU3tJJy/oezfm0qvKo0ndk8lfz1f0R4vtqvltbHR7E1uvavWK9I+bep10xYa3ilXly/Hzv+CNyYzbpcn3GkVsl6tk3ttasY5/0rrZ/M47rNzsjx2bs9NelaLvp0UHoc2+BOluTaXjmMeN6y/F9jKvNryVZ536eBfop+qfF933Kjk9zzrJZKlprVLb8o/acNbNdDq9zUZdv6VWipH8saHHU1Eab2el7Pi35nkeqop+rPLg9Pge4Y+JjtW1bO1rTpER2LUdPu2V0xqqet3H0XU8XG1SybUpNNo6edzf7p1artVU+89TkEV6nI94vkn06qqcrXV6/keciCqssR9H7RH9ukmtztZtTr4HL71bz46+FbW/F/5HjwinZvq2+2rEnk1TtCk+n9vwLFgol1ibfO2p8vWu+yp/M0vxZ9hXy/I4/uvqELkWqkldJ0s9tp+PQ8fkcN8e89aN6P9z/xqen7jD4158DTHHIwrd0stTFmzw287CjsojlrT07Oj6pnVRng/ZLKjUYkM4qCLFGdmIIsZWLs4MrM7cxGGRnNZm+V6HM2e3iNypbIkdiDrIlqkaVZkmWnJphqmWmZSaV1CNEb0RnRG9EaVpVGtURVGiKNEWiEWgKGSEgMQpE7EU5E2TJLZNDbJYSBUZWRjep1NGdqgefkqcz0PQy0ODKoYwFbQdFLnDug0pkGD062NEcNMpsshRuzOwvUIdwIuc9ja9jCxYjGxnJpYzAlshmjM2QQNMQEVrVmtTnTNqMqN0URUsKlmVjVmdgMbIzNLEQVDqaIzRSYFzBdbmUkOxB1+oS7yc+8e8aLtYwsymyLAT0Oyl7WxdenU42dPDct08USq7MXudsVduOF4ypN7cijSvkc2fgeNdbLNHVgqslGn1RB05eZaPJojjtd21fcdOkHauIsmPfXqc+/DXPlzYaUf3uH2IvVToXs7Mt0hx1Odsbc+0utX1NNprx6+dT0JPI9P27j+nj3W627HpY6bTPDSUn2Nz0emKAAAgAAAAAAA4c+LLht6nH6P7qdjuALLjBYdzV9a27pBfiYrvdZam8gDammOuNbaqEUABAAAB8KqlKpqqJfcVW1dy3zsnzbesFkNZKgeme9X27jp7Wm+0uz/E8+3tuerhJWU/duSLJEci4eayTrRtPo0updOPk42aqyeWy18dGetwceXBR48jUTNFVzHj/EPdcatgV7OLUfl+M9V+8g8pZavFttqut6f/uq+z8fgc1uLd130atX/S9V8GuqO3BZLHsyJbMlnVWjVNQ4b8GZ+5LCntoovVtX006dPjrr9SKV+HmxuuXJj8uitVKenjHSTtx4eJZRei/NHiVdqqU2vkbLlZaqVktPhIHVzOHixP1McPG9Ov2vw/gzmVa1l0cOGtGelg4+fPXTMk1+l0RWb2zlJb6ZK38UqpP9hFeba1c/9TItUlXwWigH6NV9qbM6O+KzpVxrrp3XzOulskQ8tl8kSkcau3ZKlFL0UIeDJejtajSaU9Y/D+B0X4t7tXtd2n9UnP6apk2WL4PKsnMvdeZ6mW921ep0u1V9lUkdPt/t9uRdZbr+lXXX9Udl8PEFc/Aw5M1rLFVPx3txH0Iz8jJS9sV7Qk4tXH5a6adoPS//AM8tcln08v7zxeSmst1brutP4lQXtVxtWiIWRqrp2bkex0h2Th6r4ovi4fXy1p0Ter+Hf8io19xf9RV/lpSr+aqc6NuVF36q13O3yXgvojFCCxBAG0AgAABAMBpjkQAdnt1Vfk40/j+MaH0mJWqvTs500Z837Yv/AOQrfyK1vy/zPpq23JM8v7r/ALDyOTzL2xW4uSr3rS1uzS7/AFPQ9utOH6snlcKnJizbrZabl+/xCuTBwqrFa6TWvmer+I+8vOc/2JWeSyx57q7+9VS+ncul5KzYcPL/AK1LJtaKyfT5/vOat4cPRrRnP9vOyfw07VYrccqyIrejx3ija1jG1yLZDG2TwNTijR3MrXMrX8TK2Q9PPCarJeTCSb3kncernnwuqbIkJkcSaxEyNWge0TqUa0sb0ZxqUb47DB3UN6nLjZ01ZRtU1RlVlqwGiKky3hvA13C3GTuS8hKrV3M3cxtlMrZTNHT6gK8nH6pVchnWsdqZUHPS5vVybjKoJsixM0jlyVODNU9O6OHOgPLyPUmtoLyoxKjqpc1WQ4ky1cDs9UPUk5d5W4DZ2kl6kpjAzsiINoFt7gZQQ6nTsIdPAyrksoJR0ZKnOQUjWjMkaUKOijLM6miQAZWNWiLVJo57EG1qmLNIByIChtksGyGyUORyQUZU5EwABMrDk9O6ZBJR3czH0yLoHCtq/kXxretjdH1RHHq6O09gBdX8zt4nK9F6/a+pwV7/ADNa/EzZsxZcevk4lM3nxvqc1uJevY573tjStjcMy/8AbZlo9TheK6Su2nFvdx4m+fiKt8eNdW9fkuouDz1DvlevZI9HjUtd+tkUWfReCOnPMz+Vu8+XWlCgAIeRI25LAxebwI9WzLg6AOXfbxBWfiXB1SG5HNLKGDfcBnUtkwDYJkgUXJy8zlWwRtjXxN1Y8/3S6Va/MzfEb4kvUlcmTk5Mv3NgcqyeIHLa931mZnh7XuHBXJxrYkr1+3+By4Paq4Yvk891ql+lfxNa+9cfYndtWjWqTcHk833PJyprXyY/BdX83+47efT5r0+byvQw2hxlt5a+PxZ5lPdMtVFlW0d3o/rB59UkNs1g7/8A22RfopP1OfPysnJsrZH00SWiRz9QWgHRhdbp4cjit+j/AJb/AKX8uzK5eO2dPIvvX/dT9SstJjun8Dn6lu29Lc3vqkqW7R4W/c/xJYFxcdMlbK7cx5EutrdkczTmH1R6HG5eSttv22nToctq/wBZp93Mr4mFd3ttnktCcWWp7dclk219z6nhY+OqefG3J1VzZdLTKWjIrD3hNZqZmmpWvxdf8jptwcGR/wBPNo/GGZc+/r4Nf0tW/cy+HkpnwUV0nanln5dB8Gsr+15qOcdq2+sftOK/Htjz1x5mk7OstOYk+gp6HR0Unme5enTl4rUSVYq4X+4sLXpcfh8bH9lXkt/Nbp/A7OTfZhve/wBqrbRFPMuxw+65muLf4xX8WEcvsPkxt/zXj6VrqcPKycbDktatXkyNu3n+xT8F1+phj5tsOF4qNzZP8/8AI41V2cLVso1ve+e2602s02+/+IOjjL0KJv78sVr8KT5n9ei+Ek1xf2rTzrXr6c6v/d4L8xY8luRya3vq3ZN/4+QR0e40yKtbZIWrhVjw1Z56PR51aVpVY27Vb6vso0X4HBA/X6QwEM6BMQxAAAADGSNtLuB08HkrjZHeybUOunxPUfvdFLrS31aPCr5npr8jppw8+T7aWj46ftOfXHPV2jpze7Z8ulWqL/T1/E5sdXZxWXZ+GrO7j+0N657Kq/lpq/x6HsYMOPAox1Vf2/iamc/1hjwsXq8XIrNNT91Hpur4fwHzMsOt6OZbrb4x9tvquvxR9Fkx1zV2ZFKPIt7e3e+G8tJbq2X+PxFy+1nhyY8+7qbprqjlvxrYLbbGtThY6t5ki1bdgqzoxjIlkcN93Q572Z7WTjq2q6mLwNdTUuM/V4+4Unp241H91UY24VH9rdX8dUdJ3E+tc1DatZD+2vTtPxRrRG/FZCxj9I6KUNFQiuF4iq44Ot0IdYCJrobVsYPQN8BXYrDdzlWSCLZoMjreQXqnBbOQ83xCvReUi2U4PXIef4gddspi8py2zST6hirHarmlLnCshpXIRdelS51UseZTIdePIbjLukTZirg7G0O7OTNqbWucuWwHDmWpzQdWVyY7RoiBwaJFbTP2MZIpF7S1QaYSLSBVNEjWhVqaLGKvU6q10CMPSItj0Ot1M2jKuDJjOK9YZ6+Sknn56QBzI2ojJG1ES1W1EapEURvVGbWpE7SXU2gi1SaY5r1ML1g6rIwsjUrNjAUjs4Ik6IbZIAEAxBJlTCRAAEjYMDTj5PTun2O7kXUeXq0eadOLMoU9UAUehtVM6sHuGPHXb6at8ZM78l5OlVX8yi7YVkxw9Guhtxfblmm3dHKla3Vnu+143TG57vQy1PyXD9vrh81tbfsO9uAbIbLIW2+aJkzaLkUmmWcCg1DaBlAy9obQJgpIUGiAizg1TlGN1oViegooTG+omFI8j3e0OqPXPN904zyJXr1Rnr01xZOpa8gCauAOD6DCz0AnsOT1PlhCCRNkAPqIEIqloDUiHJUNZelLrcl9v8y+T/c9DS2GuWFjbd1o6uKuF8P8zC6lHTfZlxttt5Ek1V9qrVx+JzvhXOr5sGjdqg+Rfu90jpyMuL7LNL5krkN/cq2+a/gMV3Pl1eJtKW1EfMx9vuk7Y33Ur5o5/Wp2pD+DYvUi++unyJg9rHnq/LZqUcPud1bJSOy/eczzU0ut3qeMqDPJkd2m+y7sSD6L+7q8lqJ616nm+7clZVWlXKUtx4nmXtubfiKfyA63xa43Oe6rpO1ea35aL6sT53pJ14y2To79bv69v/E5BQVFJzqzTFd47K9dGnKISOrh5aYrzkqrVfWVMfFFEZc7ywrbUlMKqS69SEnb7U38kfU48WOJrWv0qi3ZqEuglzxDHy9cGWz8tLP/AMWbV9t5Nv8A42vm0j6Krb/Flpdi6Y8Cvs2d/c61+s/sN6+yR9+T/jX+J7Jn6tW0k0226r5rqvoTaPPr7RgXV2t9Y/YWvbuPX9E/Ntmz5mLbvTlPclHjXt8/DxItzMaqrpN1dlSV4xPT8n8Qqf7PCulK/gVXFjr0rX/ijO/LVXTTy3Se6ZhvsbvQgVNG4017G6OfG9fqzpRQ0jWpmjRakGlTPLdKyXwJtmpTR2S/8kcry73uJVjbPhWavx7Hl3pscHprIcvJouphpyJwa1tBzsabCu+mZdzZXT6nlqzNq5O4THdatWcl8e1ynobVe5aHLnvtZRrVpdRu0P7ZT7r95y0hue77nThputA0bVquxaqTsVZjq+xrjsrqP1I3L+WLGbqZWR0WRhc2jnvoYWtBtkcHHe4FvIZXyGTuY2uQXbIR6hk3I0iYKeRsW5jVSljLgiWNM1WIaxwQQmzRWGqD2GcXV1yQdNMxxqrKUoD1K5SvUPMrlaL9Y3Edlshhe8mTyyQ7yAWJSE2NGLWotItIVTRIxrWJaBFwTEFlLFQMSsJ2Okc6tdTrpqjg3HXivKNDZmbHJLZkTY4eQjtscedhXElqb0RlVam9DFWNqo3qjKiNqmK2qCbI07E2Jqua6Oa6Oy5y3RqM1yXMzXIZHVzApCBwApEOAgAAQAMIAZRMDQMQGtTqo+hx1Z1Y2B6HEw+rdI+irVVUI8/2rDtpvfVnoWcEX4JsmRJzqZ0e+78EaGsCKgICEgHABQOAQyCWiZNSLV7gKykyxuJRrVyZW8tp8So26iAcyFQEJ9eg2JBHhe48T0bb6rysD28uNZautgMfXzrr/wCl+v1fG9hkzoOTWuQbEwYNaANAaYOPkzaY6t/Ht+J309mzP7rUX4sDzgg9insf8+T/AI1/idNfauPRS07NfzWGmPnW/EatdpVprGnlWup9Tj42CjezHVf+Iczkri4m66Wflqv9X+XUm6Y+Q7w9A2muTE1q3PxM04ANs9CWoNU4HZVsjPppgA7KBBAIYgEVVCgaKikW3ChErQqtZ1fQ0PT9s5rpGG70f2Pwfh8vA9mzmD5Kzn5Hu+3cz1q7Lvz1X/JePz8SDttV2xuq6tNaOPzOSnCyenbG7JJuu3xW3xaiTvopSgVslaa2tVfOyIrnycP1NjtZp4/t26azM/uGuJjVnf8AU7WtPxsof0Ff3Dj165K/TX9hjb3Xjro7P5VKN68fFRRWqS0/GvR/MpJLol13fXx+ZwW93xdqWf4IyfvHhjX1sMHqCZ5D93yvpSi/H+JD91zvptX/AIjKa9Ojh/VnQsyr92i8T523NzW/VH+1QYWta+tm382MR9Dn92w4lFPPbwXT8f4HlZ+fm5GlrRX+Wui/zOIaZqRG+Cid1p0PXrkPPx49i16s3reDj3drrzMjuWQV7yjkdwtk0MNC0SBhvGsjNI1a7irfaQ7mbt3A7seUjM1bU5FkL9RsClaDpx5Yh90cTcjreAPeUZq7l1jUhVdGjm4fIhw+h6Fq7lp17FZxnkWm5dDkvY7KWmaW7nm8icdtr+Z05us1hmscGW5vmucV3JpCdyZkEi61IEqmtcZdMZ0UxlRlXEa1xHRXGbVxAcqwj9E7VjH6YVw+kHpHd6YvTA4vSJeM9D0zO2Mg8+1DNo7b4zntSCoxKE1AIgZSQkWkYrcVU2RgjRWObcWSxtktgpMmzgbZnZnWOdG41xZIOZl1Ztl6NbyOTjrkaNFmGK1s4OHLaWbXySYWRkZLqbUMoNamK1G9TZMxoaJnOujSRNkSJsCbs57m1mY2NRmuW5lBvdEQdIwlVHtLSKgaMXUlo2dSGhpjKBFtCKhDACgJZTJAaOjGzlTN8WrS+KEH2vHW3HVLwQZLTogq4qjny5q4cid3CaCyb4jTNk9KnxeiLwY9ldevc5Mdlysu79FenzPQI1ZngAMQZIBiKGEiE3HUByZZeVjxKbuDzub7oqTTHrbxODDgy8i25de7Zm38Nzjxt8R2ZfeK47zWrdR291rkjytLxY//AFNbV83UvB7fjq4Y/wBj/V347q9U13KmGRjosXlXTsXbxNuZ9RE1erNGBDYCYAfH5nS128aaq/H8/p4GMnTTBfK4x1b/AGfidfF4daW/qpO3ZeBn14HFg4183TRfzM9XH7dipWbee3x6fgb36Jm1dakVGBxVI7KWk4cXdHVi6AbiaFJSAVVGvwR877lm/ucs1flrNafvf1f5Hq+4cn0cUVcWc0r8+7+i/M+cSh+UsGlbuj22HbCra1CjrfS2j7E+bE9OhUZOrqQ4Z2pVz/BnNkx7WBjAQU0STAgB6DWpAJFJABRVau3QG50XQG+yFJQAm05ThruAFxFPJe33Wb+bYoJGmAxBIFAAAAAAgAGEibIBM0x13WSRkb8fq2Zt8LHbIO0GFskErI7HHHXWryQQ72fQqla9ZNtqZUcshvg2tjMrYwF6gbpIdYJkCnYFkM7MhM0mureXWxzJlqxMad2O8M9fj8jcoZ89XIdWDM6snpHuZFv83c5OfT1cXqV+6nX/AGmlOQrJPquj+Rs0qOV0LqY+Wvcwep3+58Nca+6n/XfWvw+H+OxwI6e2FVR0UqZVR146mkXSnY6qUIx1OqlQp1oaqoVRokAlUewtIcAZ7A2GsDgDHYZ2odUGdqgcV6HNkoehepy5agefdGaN8iMYIGi0yEhmK1FyNWMpKTkw01kTZEikQqmzNsbZLZ0jFIpESUtTbLRMpE1RoqktEk3NdpFqk1WUF1RBSZitRtVmiZgmWmYxvWkktikhsBuxlZyDZDZuM1LFASUislA4KSHBFZtGdkbWRnYoxsSXZEGoyAAChEsolkCRpjttafhqZjTA+w43JWfErVFy+K+VWu1w0eB7dynhyJfptoz6vj/aW+YsuXYXGwLBTajcAkhbvkABLtAA2Ih21C2RUUsoq+RVWp4XO9zeV+nieniY87nPkW2U+39p1cD29aXv1MbviOkk5/26Y8L255PNk0R7uPHXGoRLaxo528mbSvlr4mpMY66vXtpyObjwOLPV9jyuR7q05x10+J6H/rcb1fUX/qsVuoutT6/Lys/umTNVOnlaPU9v5b5GOLfeuoV9tx430OjFgpjc1UCS/KWz4iq/cWzJPzmrNMH1QE0ADk7R2OPJ5bbvB6na0c2aphTupReJyjPG5rD6rQi3IpgrOR/Jd38gKxPztG9uVi4//bdVfh1f4I8DNzb3s9k0Xwepj0UsuJr3H7xhX21tb8v2nPk99yPTHStfn5v4HkO09AbgDXNycmeytkctaKNCFeCIKgB9dSleOuqIEUVMuVoarIrKLzPiYpGlVpqvL4gTfHHyMmjq81arc26dkTkrXrVyBzQVWs9BwV0UdwJa7C2lpwJ2noBADAsCGAFQAAAADgXQAEMQAAMh2JoomRSHUyoN6PbX4shYbdYZey38rJYsKZGJ0suzDbbwZnF1UhvYttvAHS3gPqum8lvEW9+IvTsP07F+qaUyKDRYvEtYql+tT7OaG/iSdyUdDHNhjzV+pbymsqsohMozWotM2x3OcqrMtPV4+X9J34Mu5bX2PExXiDtx5ovPZkV35MFc+N4b9H0fg+zPmb47Yrul1FquGj6Le7aLqji91xeoq8hdV5b/ALjfNYsedjWp2Y0cuJHbiR0YdFEdNEY40b1CtEoLRCKAsZKKAYxIpABFkWyWBhZHJlOyxyZUSjgyPUzSNMiMzna1hksbkhk1cJsJJEBe8e4ykUlwayTZySrSJs3GDkujMjaqNI3obGVEao5WocGdkbE2Q1XLZELQ3vUxZVikylYyTLTM1uL3ENhJDZFDZImwTk3GKSWpokCRoqiolIZUEshqbsws9Taxz2ENJskJEbAIYihEjYiAAAApM+r9n5nr49tvuroz5NHo+1cj0M2uitoWD6+SXY5XyGnEFrJIVdsjQk2yOrNLRSpUZ2sq6s8jmcm2Z7KvQXN5ju/Tx/U14XG9PzZOpi3fEdZPrPtf8K4XA2+e/U9Kdqgqt620RUJmpMc7duorSdbamtTOsopPSSovoxsjchrJV6SRRkq7V8vU8Hk8vk4Mm20L6H0HQwz8emVrepJVly+XDw87y626ne2YUw1xWivQq9p0RqJWqcKQM7W7AEZNpOG1+Jjdppw04+J85aq6ihGcXXp5OfXFKxxa35Hm3yWyW33ctkgEJdQtadOxphxPK2l2VrP5V1PQ4HDeanqPbSr0r5d1n+IHlrXRG2Ph5sn247P/AMT6KnB/15PpbavyQ83tlMtXXddPs3dsuD5q9LY7bbpqy6pknbyqWWGm/wC/Ha+Gz+Wq/wAjjAQB1GA04LWR4/tcr+V9PwM2TMlF2vvc9J7I6MPFy5Ku2Kjs11j4nPVLuel7VN65KrXXHb84IHX29bIyPbnfmVX0Vf8AVHSTLJwNmO2TJeraia010enU9XDjviwvHNd90lv69vh1+Bnn4zWDLD3K1btLXs5/iTVfOsRbaJNIQAAQAAFAABAAAwkBCGIBNozKsoJMVV46O7hHdiwJKIlnNxa6tnajfMZtMAEzohNktlBtIM9QhmyoWsRFc20Np1ekP0iark2jSOn0iXQajIZTqTBRy5MO1yuhkdrOXJWHK6HPqY1KkYgMNtaWOhX7nGma1ehixp6eHLqpO2qrdOr1q1DPGpkO7BlTgI4fSeG7pbrVwdeNG3NxS65O8bX+4zxo7S651vRG1TOqNkiikUiRgWhkooBlEjTApksohsDOxzZDpsc+QzVjhyV1M9p0XRkzi6MWoM7G7RlYoyaIZdjKzNRmhsUiEaZVISSNGkUjemhzo2qEdVWao56s2qznRqTYasiL2IMsjMGy7syZuKY0yUMiqbIbARMVDKqxNDSNstKs3qc6RrRii2iGaNyZ2ZhEWOe5rZmNmaiswADQAACCWiSxNASA4CAGilpqiUiij6XgchcjGp+5aM7FXU+X4fJfHvPZ9T6CvNpG6SjsTS1Z43uHubvZ4sT0WjZPK90Tq606s5ODx9z336GLd8RvnJ56eh7bwW/6l/oelkS6GK5CS21N8aaU2NSYnXWo9KNV1Kq7Lqa7qsyvdY6uz7FZVfNVVluIPI5Xu7nbg1+PY5ORnvybOPtHjwqqOXXbc5Z7+Rl1tdr5GmLFfG91LNM22wgOf2reR3Yvcb0UZVuXjX+B3f3FclN9HoeMrF48myV2ZvnvfbPXP4d3qT5il4s5cORWUs6K+Zyzs5tKqeoGlUAHyLJ6DadXDIbJoT6gwEQdPBuseejt9re23ytoz3uCowqj643bHb5pnzMzofQ8HNvyJv8A+albf+dNLL94HL7nzuRjz2xUu60UQq/Inh+7Z8VXR1eVzMtuV+TPT5XtmPlXWSzsnEeU24fCx8NWWJ2e6J3PwLg8Tk5b8jDlveux+pju6/Orqece77m1a2eqeqx42/mrf5niQIEgbgLOCOpUPqPoLoOCKD0PZ8irmde9qtV+aco89sQH1dcTq3/K2nEw15m34dmTys1cNL2yNKr37fF7l+f7D5/D7hnxNPc7L+W/mqznyZLZbO93Nn1bM4upAANsgAgChwGggAcikAAEpHtEigFCE2kOJFasAQ/MKC40FBhXTx6xX5nQjLGoUGqO09MUxDAqBKTWuMKVOqlDNrUiK4jRYzatDVUOetOX0xbDr9MToNHG6GdqnXahlahRyWqZWUHTapjZGoywZnZSoZrYzZoczUaMDSyn5mUxocLMdJdMpElIzVa0Z04rnJU2o4Zlp62N+rjdH4aGeNEcS+sG7W2zRvmsdNao0SM6mqOjKoHAIAAoQSAwklsl2A03EOxDuQ7gVZmF7DtcwvcxWom9jJ2C1zJs5NqbMrMLMysyxKVmZ2KZDOkYpDADSAIGAAi1YzGgOhWNK3OVWgr1CYjs9Qm15OZ5CfVGK2ZME75KQDQ4BI1SIMdoQb7BOoGEDg0aJgokpOBMi1oA23EWsZ+qQ7jA7OTGzKbIZQpGKAIKCBIpFCgRUCIFAoGMBAMChG2PO6KH0MRMDXj19TKk+59BjrSqg+f491S8s9rHR5LJrVEi267MfGrbzLqdCq69dURj8vQXI5Fca1L6RObLSiluDx8/ItyXH6V+ZGbLbPb/AEjoo0OXXX4dOeWlKJGkQFRs5OiWIbAAqh3Wg0V1LEqeM92h6VHHU8nDb08keJ6dXJ6ZfDjW+4CNwFR87mor9OpyvQ6mzG9ZOPNx06jGRNgxG3M0ddLO/Hsph471vV+G7R/nBxmuLL6cp61sttl8APfxcjkPNXA8tda7t2zXp3/x0M3yczwPLbNbcr7Gq1S0+H7Z+h5nr8eZdcln/qv/AARX9zhX/wAKn/XezEV2ZsWPHk5FMbbTxOzbc6yp1PJtaDovzZo8eOlKK33Oicv8TkjxKhpd2MBpFAkDZSx3t9tW/oaLhZn+n8YJsg5xnZX23M/5V82UvbMj62SJ9omxwiPRXtcfdf8ABFr2/Cv1t/4+Q+0NeWM9T+zwLxf1Y1xsK0VJH2/imvJmRHs2wY8i2OqXySPMz8e2C0W6Po/ETr4vgYgMRsADAYBdS4IRcFAZvU1gzagUhDqpYjTEpc+BIroqWiUUjqwoaJGgjoxo68aOTEdtDnW43qjVIipqjCiCXUuREVjapjeh1Mysio4r1OW6g78iOPIjcSuSxmzSyMzbLJkNbvmashoxY0zXgWhNTqNHG+HSKRomZopGGnXhsejdzWtvoeRjtDPV41lkq6vuWXKlnhpVmiZy1tGj6miuehzdKsNM51ctWINpBsjcJsBtmdrwK1jnyXAu2QytmOa+U57ZhUdtsplbKcjyi3NmK1G++ROxirDdjGN6bckNibIbLEqmyZFII3GFIZKRRQABSUgG0pVNK1NVSTF6HK6kWTO54jK+Iz9xwttC3G98Zg6wzcui6s6aHNQ6aFG1Ua1RNUaIygFElCAzaIsjcysBjY57s3sc1zSs3Ye4hjSAqQKVQ2jRIxwKAAaAIKGAhkCAYwEA4ACBMpklCO7gc62C63ao4QIPsvXxZFuq0fP8vP62R1T8qOfByYrst07MitYcroTpqOqvQ1opMauToxnndY1SgGMTYVDFIPUSA0qzRGVWbLoEcefyXVj0cWTcjh5a0kfFywjtzfDl09NWkDGjdnp0A6MvJyVMLI6sj7HOzzx2rBorBheS2nRdZFdnbhpsol36s6xzqcnHo09qhnA1GjPTbOPk0e7d2ZWWHQEpENMC4CBJjbNB6Inc+q7agMD21uslar0Y5dtE2iOL5uPTx6fhoaNfp/MxzJiQ+q2v8RqnZahEaLVCVtv2m8iiF+gPh+Yt6s4WjLWnl6lEbWtFqUqdNvUpaPyj3padwJ2ro+o7463r6eTVMTybeqlk7tvTqZs1K8nlca3HtD1q+ljn0PW5jb49p+D/ADPHHNvyRUocogDWjVNdh6IyHJdFtmbYSSS0hm+JaHOjrwfEQq0UhdCkdWQMRVQjfEduM4qKDqoznW47KmiMK2NaswqwgUjIpNGdkasiwRy3Ry5anZc5chuDhujFm+QyaOjDNolo0akTRKrJKAsoZptE6yjn1PDfNQikhbRpnB0VXqehxLqttTzLZa16GTzWvo+hZzaluPWzcmt8tnT7fH9o1lPMx2NfUg7xyeisptXIeXXIdOLIKO9WkbtBzq8j3mNNVaxzZLF2sc+Rk0cuW0nM2dORSY2qXVZyWmS6gkFaoCUEkxTZDKEyxKkaQi0aQ0hwCGAjSiMzbGSjelTetJIxo6qI8/VIlYyL4zqrWQdDGq8vJiOPJQ9jJjOLNjOnPSOCmh00MrVgujOujpqzVWOerLTIjaRbjORbgNXaDK1hbjN2Am7OexrZmTNRUJSzWtB0qdFMZm9DLYGw6dhLoY+w5nUzaOm1TGyOkozAGI0HISIQDkpMgaAsAQyiGIpkkCAAAD0eBfHjpa2TVM84urbW0luLJtx208TarObC7LyvodCepxrvlnitpE2TIpMgAAAqrN6mFTarKlZcheVnHhtDg7832tHmJwzpyx09WmVvyUAnjNVrK6gdHN59mYWsO1jPq4RykdLV4qPJZLt1Z3NmOOvpqF17l7bPqdJ4Y9nJll1oy9PElx8xsX638OAcm18UuVoZvG0TT61LsNWFtY9viaZUBEwPcB63t9pxOr7Wf56nVMaLVHl8LlUwqyvMWiI1On/2WGqitbfgjG2W+E+XTu7VIs50XU5H7ml9tPzM7e53fSq/Mu38DucrSGaLdXpqeT/7DK/D8CXzs383/wBqG9L5ezbIqLSEzmfJXzZ5yz5Mllus2aqk9dBLfkdS5HhqHqr6mKxfgX6b7dDQrLacV0/A8w9K1Ix2jwZ5hnn3QwEM2GAAaQmITcsEjKqR14qxCOai1O6q10LEoahgXkSaTX1IR1jJjqIEEdNDooctLHVjaZzrcb0NUzOqNUjNVQ5FAEFSRZg2RawGV2cmVnRkscmSxqI57MiBtyxHRkhQUBFTtE13NIBko4r5jK2Rs05NNtpXRmByxvTAAKi6uDZ6qTnRrS0Fgup0UbRhEM1qy1HTWxcnPWxqmc6KIuakWUmWpHNapG06XUWwmt45XQnadboQ6F1Mc7qEG+wWw0ywgINnUnaaRi0NFwKChIoSAANMbMpHW0MlHo42dlNTzMVzvxWk8/UI7KlNGdLToanGqxvQ48uM9Brsc96Fg8vJjMIg9HJjOW+ODvzWWdWaJmXRlpmw5JbHJDAGxNhJnaxVFmQtWKzKxKS/A6MdTrrQzxVOqtTh1RGwi1Tp2md0Z1XHdGFkdOXQ5rM7coysiYNBHQZgU0SAAgBAWMQSUDJZTJYCAAIAE4YAB00zdEdVWebXqd9Wce5jtOr17aSUjOS6sw0pkyNslsC6vU3RzVN627FSjJqmeU9Geq3KPMyKLM3yxXdxNQMMGXYB0+GHD1OnDx2vNbT5mmHjpfPxOyuGOpz10+v5cyqvH8gdV8fwOr02Q6wG/wDhzbU+jQOj6mtqz8jN02vTT5BdRCE0jTXvr+0mJ6fgFYuhnbGdMR1JdQlkritRok63QxtQ1K5Xn8Mhg0wg05kODo4tK2yqtlKcnp14eF6bNUS3LiWvFgNp7a4OC2m1/mOvC46c7W/g2x9v4prz+Dxnkt6nSte53+iqvXVHVH6YheBSxpfEsnnaOVYu/YtYt2q0R0LDHmL9JPU2rlvRenftpb9h8+fSe4Za4MDT++6iq/afOaIxx5tqEUkIqp0CgGU0SwIgcDrWR2WpMVVOvwRuryZ1rBSNRl1VaadfEgK3TQzSAAAqKqzqxWOM6cRmtR30ZujmxnRU51paG0JDZkRYwuzaxhcowyM5LnVc5siNxKwYgYjbJyEibE2RVyKSZFJlWXIUqTjO966M4rKDNVIxDIBFJoUFKusAbLWpScHXT267wO/6/u2fD+JxJmpZTMb1ZpVnPVwbVZmkdCZUSZpm1DlXSFsK2GiQ4MNMHQzdDqaM7IsSufaS6m7RnZG4xWLIaNbIzaNMs2iWaNQZ2KJbJdhMk0KbFIkxkG2K534ch5ScHViyGOoPYpfudFXJ5uLIddL+B57FdJNqyNOQZgc16nJkod1jC6NwedasGacHTlqcttDvzUU2TIkxmhNmZNmtqmLRYJOnDU50jrxInXoduJHTVGONHQeaqDLIaNmGRwIOTKzmZtkZgejlAIqAg2qGS0aQJoIyYFNCgAkqSQQDkQBBQgGBAhhAQAI7k9EcJ21+1GO/TfK0ykzJM0TOTotsiSiGBdWbo5qnRUqHJwZfuZ3NnDm+5mozSo9QIq4YG2Xt4sSXU6K0RhW6G7wY2Oi3VGeSlexNsvgZvJqDEtEOpcpikNMnUV8N6pO9Wl8UenwsCVlkydetV+/+B057Ky226PRkT7Pn1Z0sn1jxJiejn/HcKvfWSYjVaMrWjX6E2qVu8SmtAOV1Ig6bVM3Q1K5dc/KuE/69Pn+49lvc2uh4nGcZaf7ke1dTaH0Nf9v8OXypW3adByvt/MzTnTt4lfDt4m1Xv26dS09vxMZ26LUHbb01A6U41RjyvcMfFX82R9K+Hz8DF5nXp1fY48uOmZ6rbZ90cut+f6o4s+a+e7yZHNmZlZMVsTi30JOkz4AOoho0KJGKQDdGiEhDA2rqpKJp0LqpcmkbY1ADx9QKgAAKgOjCc50YWSrHfjOmpy42dNWcq20SGxJg2ZVFjnubXMLlRz3Oa503Oa6NxK52Ipks2yliBktmapyLcTImzKnuOe6hmxrhrunxJVjiVW+iNa4G+rg6LUu/kPHjtMHO9NzlnXBXvLOrClTWiSHWkdQqo6dTF61vHoYsr6piz8XFydftu/1f/wDX+JOal9uqOqrVlur1My4WPIvhvis6XUWRSR6+XF/d0haZK/b8fh/D4nnKp2l+0crMFEdFEZ1qaI510jVAJMJMqGybDbJbLCoZDKZm2bjnUshlNkNmmU2MbGjZmywZtElWJKEMAACqWgkBR24sh248h5FMkHVjyHHrketS5ruPPplOiuQ5YrRmVmU7GN7QFYZWclje9jC2p25LESUiYBHRlTM7IsllEJHTiMUjajMdLHfjN0cmO/Y6Fc4WKqzOTKza9zkyXksiOfIzNMd3JCZ3k8DVDZCY5NIqBMBNgSyWihATADYgBgAihhAAAAAgKOnG/KcknRhehjr01z7adC6szZSOTo0kmwkx2CnU3T0Oeh0LoELccmb7jd9TDL9xqM1mgADTLu9aA9afmc8kyYx3x0epL6hvZhIT2KrpVzowVV3r07nBW34HpVWzEp621M1mtXl3aPoZcnJ6WJtdXpX5nNLbgyz5PUyKiflp/wDqJJtZvgq02JVJstS7WTIbNkqICX26A2KQ01pFl8QtQzT16x8Tett+j0aDNcVv6eStl0lP8z3rY3Z/A8nLx7ZFtpV2fwRx+fG9utWuq1Rr36cup5fQbGtI0Da0oS0PDXJzLpe34mlOdno53T/uSZr/AGZ8vWfl0qZuP09ScHNrn8r8t/Dx+Q3o47lnW+L7ENePUrZHXUrWujGprqtTSpy8f1cTq/uSlP4nin0GJNvwbPn4jQxz4tjMED0QpCDoo6hAwaAQJSOBgaU6GldDOhUxqaiOjE5Y7/c4MsTZZUMAAqA3xmBrRkqx3Y7HTVnDjsdVGcq26ExtkJgyBWZhZmtjnuUZXsc12a3ZhZm4zWbFBcFKsmkY7ZJdDsVB+kZVxemHpHd6I1iCuD0jfHiVa/FnWsJMRaGcv2eI3z7ZvHBNVDN7GceZHndkol9ZLshRKAaUl0tsZCcFSmB14snmnuZ8rFtvuS0t5l+85nd1tC6ndPq4Z71c/R6HTnw59RxwBdkZWZbElXuHuMdwbjGNrdydxm7Ck1IlW3JDY2yGajFS2SymSyss2jNmzMrFgzbEDEUMBAACGJsAkuuSDKQTA7aZjppmPMTg1rkMXken6xF7yciyFu5n6t6dmY2Y7WM3Y3IlUUkQrFVZpDgllNkNgBpVmElK5mwjrrY1WSDjrYreYxvW98hz3uTbIZO0lkZtDeoImSjbKgkQAVINkdBSUUIEwAAAAFAhyIoYAEgAhiADbCzEvG4ZL6We3QxokDg6rAlMchVVep011RyJ6nTRlQmoZwZ7OuT4Ho2R5nK+8sStE51Axx3jRgaZx0q3iBkrDky7a0FJEjqnZxVS30QNdvC4/rW3W/669fj8P4nbmvuY6pYMVcfdLzfPuY7pZis+03/o0eR9unzPNx2hfE9Tk43k4941ai30XU8dM1PSfLZ5CXYiRSUabiZJkvFivlcUq2AboPQ4fCtmW/JNaJyn+p/L4G2Dh4+N5rxa/wCS+Q8/Lb6GbfwOx5K41sooPA9xzLLm061W1v8Ax4GrzZM79PH93iebZOrafVG+J8sdLkQkxyjqw0wOMlH/AKke1ZbdDw62iyfg0e9klOEjF/tEJLb8RqqXTqT0+0Hp/uOg2xwnr1Pn8tdt7Lws/wBp7dbNPXqeNylGa6/1MxP7VPllI1qIaOimIBSAxMIKgDSjhQU/AmhSNI2x6NIp9TGlm3PxhGzUFiUAAFQ40kExAgrpxs7KM5MSOyiOdajapQqoqDCoZhkR0WRhdFHFlZztnTlqcrWp0jNXVSbVqRjRvVAiq1NFUdamtakVGwaobKo1Umqy2Rqzgsp1+p6lqbquvijyKtzD0jSDj+xvhKyOYZqjK1UrKzKbg4uq3WUY1saVu4ZzYbbkrFR2aWq/gjLG5hm2Km5OO5x4H5V8gN+QovV+Nf2M6+HkSey3R6GfprNj8bpPY/B/59DnrfuX8VPfh0ZE6t1fVHNdnXme+qy+PlfzX8Tiszp7c/SGxSJslszjWqbBMiSqlxNWIYJFRMEtGsEtDRizOyN3UztUaOaxDZrZGTNsiQkQAEgAAAAADRSJRQDTgreQAFuxLYgAcjViAA03kuxEiApsaZAAaq0DdzGQkmLq3YUySCKii0yUWAxNwAmQJsUgEFDTKJBAUDAQCAAKAAAgAAQDBOGIAOuuupdq6SRxlJ1JaHKzy6y+HINF3rBnJFUjbHaDnk0rYDqfQ83lubHopyjhz13MsRyAXthwBprPGregSMTUjHPRMant8Di+hX1L/wDY1p8F/E8zh4fUyrc9K+b5wezkyTqY6vw1PLDLZtmdayN2kdbpMw268DdNX0PL5vBtjs74qt43rp+k9KmVGiyLqmJ1Yw+amATnpqfTW9NvdaqdvGCLZK1WkL5GvsPJ43AeR7sulfDuz0Xkrirtpol2Rlkzx0OLLnJ5tV0WzK3zZw5cu57a/iQ7Wt9sx4nVxuJruv8AgakxN1t7bj2PfbueXvbbb7uT1uVnWKsLqeQka58+WenZxci6OD0MWRN9FHyPGo4Z2Y8k6djX1lYx6O6q6JDd56QcdX2q9Cp/lepqcyeYmOjyr7WpBwuvU5ndV0nUPWVeurNDqrV1sm9ZPI59due3xh/ij0Md9U5PP9wzVvmmrmEk/mjH/b/CfLmBCGmdFHUpISYOwDkTZJUAVRjd50RBdKS4KN+Njdnu7Lob2LolVbUZ2LEpAAGmQaUUkJG+NEqxvjoddEYUR0U00OVbbVRcEVLkyqLIwujoszGxYjiy1OO9dT0Mhx5Ub5qVONnVQ5K6HTRmqkdVEbVMKM2TMWtNIKSI3D3E0UcPOxQ1lXfS37mdkkZq+pjtXu1p8ydeZiy5XmRPUzy12xX4E1zp9DW6lHnd0U1TRhh4+THRXuorZ+R+J0UcM3r5+Gl3o3+Vv4M1PVZvwjj2hhyKLHZOihWr0Xiuv4k1tDRrydcc/wArn8SQvtGC8ODPNTbeV0tr9SMdmrHRlW5Aa4a+pivj7tSvmjgsdfHttsrGfKxKmS1V0mV8nqa5Z6crM7GtkZtHRhCNaohI1qiBwMqBQZaOBNFCZFZwRZGpFipXLdGFkdV0c9kbjNZADAqAQxAAwBAUkUJIpIBAVA4KIAqBQQIlltCAhiKaJAAAAAAAABAAFotEIpAUSxiZAgACggBgAAMQCAAKAAAgAAQAMQwOzjKEdDZzYnFSnZs5X26z0d3JhI72IrqRVoaFEBIHTiv4kZUZq0Gj81Ss1z3rIGiidQKxvjGMCXiDYdjSung6ZJ8Ezvs5OHhr7n4Qb2tbxOXXt059NG0lqyd9X0MXWQflIrbfHQuuSDkV2uhaa620GGun1yb5FEyc1uTVfYjBN3erLia6q1edwtF3ZtXBhx6uu5/6mYrIqKK9DO2b6gdWTKn8iL8nZVs4cmeehz2u7dTU5/LN6a5MvqObE6eJkBthtBdWznll1yNddQjvrZvpoFr+Ghzrk0XVMzvyZ+1QjX2Gzu301JT8TmeSz7kz8SeRvkz7fLR/U5wASAKTZKUlKpQ5HAQBcDGhJFI0hpG+JQzLpp3ZqnsU+BUdFce6yt9Auobjsc3rpKHqaY8/qeXw106F1FgAGkVU6cZzI6sZmtR0UN6mNEbI5tNUx7iBSQU2Z2HJLAxucmRHZY5cqNRGBvTQyg0Q6qOmluxtWxz0Nkzhaa1kcmUlpklNVI5JA1q68/m8ZVssuNfc4svi+/8AEv0nWk2h/I7GpUHLbDkvbzQsa10erJZrpz04d0OTo4tt2HLVfzW/Yjyckyep7dpg+dnP7CSYvVc7zQdVLrJXXucF0k48GdWJxUjSK6dex1Jyjlt9zOjDrV/AT2fC8ONNw3oi+clvW1z5UY3qreP0JfgajNY2Rk0b2Rm0bYZpGtESkaVFIqAgpIIMNpghlvQzYDZFhyQ2VGNzGxtYxsbjLFiHYRUACABjQikBSNEiEaIoICCoHAEQEFwEAZtENGrRDQGcEM0ZDIEAgAYCABggGgGikxIAKkBAABIhgEjkkALkQIAAQAAAIAGAgABrqKB1UsDqp0KeiEkTZnF2J1ktUgVdBtgSJg2NalRKR00UoyVTTEEY20YBl0tAFc/lhIpEBtXVxX1N3kOPFeJRTyHLqeXSXw6tyE7o5HcJnqyYutb5X20MW3YNyFubNyM6tUffQa0empNaO3U3VYUG5+u9M/aRD3X0WiMsjddDofQxaXRm7xOWfta5+oGraRDsYVADbEAAAAIYAABHiEhEhCKVQ0QtxRYEbmNJsooYugFiKRaUEVLbKNKrx6mn9rkz0nC1ZrrRfevp3+h6/tPtrq1nzKH+ir7fFns+nWZhT4wS38LI+Irg72cL46HRRLrTVeJ9P/6/j7t6x13dZg8v3DB6eWeitqv3idecxLHnjE0B1YUmdOM5UdWJGa1HXQ1RFEapHNomSy9obSCBMuBNAZWObKjrsjDIjUHKkaInuXUz0xWtDWpmi6nGixpkjRkWMlMo0oDrowEVXzPITpd1to04PU4lXTDXdp3Oy9a2ctJx4oxyM01a8zO4s/ma4bzWDLlY3a0roGFbKuerM41L4b3q7RHU6sWJ403Mppz8DkV2ujhlVyXiLWn8hjWtmyG5J3DRWQyGjRomCiUi6oaqWqk0wJA0VGgmiKzsZWNmZWAhkWKZDNxlnboZWNmpM7I0jnsSaNENBEgMAAaFBSQFI0TM0aIotMtIipaICA2lgEZtGbN2jKyKrGxnY0sRZEEiGIAGIYANCGgKGhDQAAQDQCGAgAAGA0AAgARQmUIAAgBAAAbceu60GJrhcWJ16b4/tHQ6NPQg3kxscns64lAhCbDleKlsurIfwBMrH0rej01KTjUxV4HuI1P1/lOa3mkDPLaQN/Dnk++fAtRpmZ0kuqZ1vLlrFOCuvQ0VKl1ol0JONPtjNY7MpYX3ZsgO0/Vyn2qFiqviWkl0ADpOZPSAAAqFZONDnls6THJ5Tl+yfLUc7JGI87QAAIAAAoAAQDFI4CAhIaqUoHJQtqQ/kAnaChgJOTq4nCy8u0Y1outn0RRhVNuF1fQ+j9r9p9JrNnXn/TXw+L+P7Do4HtWPied+bJ/N4fI9C1616ktFSBjRXfmbif0x0IzeRrIpdl28V30Mq6Tn5nH/ALjHt/Utam6aspXRjA+Wz43jtDifg5Mj1/deNH9WvfSx5J2l2OdNHXhORHVhFWO6hskY42bpnKtHAoGJkCJaKE2URZHNl0OmzObKWDlZpTqZsupnpmtikIpHFlSGSMiqTKTIGmUWS2Ek2ZqVWdnBhkZrc57uStObIzLcXkMWzRF7ilYw3FJyGnQnJskZUUm9amVKJKVTRVL2k1WSqODR1JJqkhMoVgMmZWNmZXKjGxLKsSajNS0S6Gg1STcZc7xkPGduwfpFHn+mHpwd/pC9IuI4vTH6Z2+kHpDBxrGWqHV6Q/SGDmVDRVN1iKWMYMVQNp0emPYTFcuwztQ7PTJeMYPPtQh0O94yPSLiOHYHpnb6QvSGDj2CdYOx4zO2MmK5oCDR1FtGCQKgIASExiggQBAQADFA4AYwHACEy4E6gQAQACAAADXD9xkVTRkvprm51K7LrQzqt1kjRuayZNHF766c3DtS0VcnJfFevVF1zZKNOenibV5//wCRSajh1ep/LicoSNMt1e0rREoLPPs0i0SUiOkZZFAHs+38OmSvqXUgPvP6uGf768sBiPS8xo0qZo0qbiUwADsgAAAAAAAGk+oABHpUmYOW9drO05rqTj+yT4ajABtQI4NAAAAAOpSp4jET8h7WzVVRcG8RiscB6b6o2gcFwczrYNj7nVBMEw1jGh9xxtvp12RthRB8W6ns+0e41xV9HK4j7X8+wxX0EwjHkV2tZq9a/d8amyaeoV6QzKsct7Ttr1/d8zmeR7dy/mS+q/dY6bJ1iq7dG/8AH0JeOtu2jSlfLoRYrj2huq+37q/J9vozoIpj26vVsbsq9fkEO1VdOttU9GfN8zjPjZNvZ61+R9KcfuOBZsTceautTXNypY+fR0YnBga0Z0rMd9Gb1cnFS56vGxbK7n1ZzrQx4W9bdC74U15dGagZVwWlOGZux6GTEsih/iefnw2xddU+5UZuxhksVa0GF7GoJb1Lp1Mk5NadTPTNdFSialnnQhiAByCYiZguK0kmwk5B6lxcY3MLHTZGFqmsWRy3UmNqnTepm6jW8c7qa46FKh14MMjUvg8WI6qYTTHjSN60Cxh6YOp07ERapBytGbR0WRlZGasZiKEGmbRjdHQzKyLEczIk1sjFm4xV1Um1amNGdVEbjKlUv0y61NFU0jB4w9M6NobSjm9OB+mdG0NoHPsDYdG0NoGOwew22htAy2BtNYCAMXUh0OiCXUDndBPGdO2BbSjm9MTxnVsE6kHG8Zlah22qYXqBxWqZNHVkRz2AgBtCIE0IbJMqACQkAAJCQGi0iV1LQDE0UAGVqkGrM2gJGAAEF1qFam9aAWk3WDFuDdaMxsji+hLvMqHaSXBTqidoZugcEQxpMqLgpIlFkaj3/blGFAP2+04agcflx/7f5fPgAj3PKaNEZotG+UqgADvEAAAAAAAAAAaYKK+StLdG0jjOvE2rqPE5IhQcf2e1iLVM2jR3jQnczjWkMaUlKrZaoJAlUtVHAzaFtGMCgAAKhgxAAiWp0LJZFe57Pz9y9HJ1r0b7ntp9z4dWdbK9eqco+t4HJ/uMNb931MVY7JAi1tqnrAk7T8CKayaS1GsMm9XarXd/kWqfzalgCEgQEHznMxPDmtWIUyvkzJWg9f3fBuosq616/JniSdZdjF8PQ4dPVyKr6dWe6eB7dZ1zV+Mo98x17agQABlQZ5odLJ+DNDk5l4W3xA8q9jmvc3ynJc6Rmqq5Z00cM5Ks6U51M9o6as0RhRyb1OP1MECguA2mpyqBQabSlU3islUINdpLQwZWRlZG7RlYlVzWqZNHTZGW05V0hUrqehhrCOOi1O/F0EpWtUbJGdDRFQQRc0Zndgc9zG7NLvU58liAkUme4asRVSRYckWYgxsY2NrMxsbjNOjOrGzjR0YmdYw7qG1Tnx2NlY0jQIFISFEBASEgAxSEgOBAEgACkUgOAFISUOBQEhIQQJoJADOyMLo3sYXA5Mhz2OjIc1giRDIZFDZIMTMKchJIAMZIwLq9TWpgjWrCrAcCaAhszsWzNhCKqIuiA1ojZIiiNktAItEkXSZpeqgwahnK+3t/Xd5Q0TI7JogFOQkQIIpMuSDREaj6HhaYa/IBcRbcVUBx+XH5eAIZJ7nnUi0ZotG+WasAA7xAAAAAAAAAICk4aZhdRZr4s2MsnU5/snysZNCSGUjg0EUCGaQDgQ5NIIAci6AAMBAAAACE9RiZFTB6Ps/LWHJss/Lbp8zzu4N7XoQfbUSmfE0k8z2/mVzY6udftfzPSTMNGMmSpABDAgm9Ferrbo1B8s6OtnV9nB9UeRzuJZ5t1FKv+03zcSwvbMc5N38q/aeta0OEZcXjrBSOrerZpfqS+aRVWUSkNuCKG4PPzpuz3dTt+JjyKSt34geZkqcOSsHpZFJx5UbjNc9Xqb0MEtToxotiOjGjoqjLGjoqjGNGqj2lpFbSjNVK2l7UDQGTRnZGtjK7AysY2cGl2cmXJBKHaxEyYPIVWxxsdJXRU68NoOKrN6Wgy09CtjROTkrkLeVF1l0O0HPkuRbMYWyFUXuc17jvc5r3A0dwVzldxeoMTXZvJtY5lkK3yMNXZmVmEiksSmjahgjWjNysuyjN6s5KM6EzcqNkxyZplyaQwFIpAqQkUhIDAUhIDkUikJAYBIgHINiBsAkEIYE2Oe5vYxyAcuQ5rnVkOS4RJDLIZFSxMbEzCkAAADEMBotMhFIDRWBslMZFJkFskBGlSC0BvVmyOerLVio0ydDnsauyfUi9qs59e3r/AE/1Z21RibSjK3UzG+iGhAVlUouurSXczR0cWu7JVfElXX0ONbapAEgcHF84IbEfQecI0RCKRqJVgEgdogAAKAQSSTRQSTIE0VJz3tLNbMz2nPu74WJQF7Q2nPFTLGrhtDaBStI5M4KSg1ooZIwGIAAAAQAyWUPHivmtsxrdYgjoa/27dfUv5a/HqzuwcbFRuWr3r18Kv4ePzPMz8i2d7rP5LwMfbfEHZ7fyfTt5dKtpfwPpaZJPj8K0+Z7HB5O3+nd69jMvnFe7W8lI5qW7rubbmjatBmfqL6lbl1IGybKY+ArXgSugNEY5ba6Fpx1ehlVbruz6SBtXRaiGJ3SKCColQ+hg+R4Fq86gcHIx+nbb9UcWRHqc3VVb6yzzbosSubbqb40TBpRG2XRRHTVGFEdFTNaaVQ0hSUiVQJgybMIizOe9oNL2OLNkAzzZYODLlDNkOS1pJRsrSb1Zy0OmiOdajoozdMwoa1Odbabg3kNkOxFW7mVriszJs0gtcwvaSrMybNRKmzIbKszNm5GLVbi63Mj0fb+Lv/qX6dkMNLFxsmVSlp4mv9i13PUS7INpB4l8Tx9Qqetkwq6aZ5tqbHDILqbVZgjRWNSlbJlKxhuGrHSMt9wbjHcG8o23BuMd4bwNpDcY7hqwG0jM0ykwKkBAAxAAAUSMCbGNjZmNwOa5y3OnIctwiCWUyWRUsQxMwpAAAOQEAFDRBSA0QyalJGQCKgQCGhFIooHaAJsQG7UqylGLZstUZ6ej9PzGZNkW0TYjrUgABlR3e21nJPgjz0et7ZWE7GevRb4ekAmwOLk+fYhiZ9BwMaJGaiLkJJkJN6ipFJMikfYU2NKRKviWZ1cJJIfQQEAKEASQS1AFMkKBQMAFAAIgYAJgMBDAIFJVau9lWqmz6I7Vix8NLJn82T9NF0/x8fwJbn/Iz4vBtmStby0f/J/JfvHyeTXEng4621Wlrd5/x3K4nJyZuTvu5e1p/BadPqc/NxbMznRW809Ynr+Zz99Z0NOAmley0WiXzOPk1VMjjo9Td8uuNbMdXC7t9fiZXazKehPO78DH1bPudFc7pXzrzdjDcqfZ1/mImTWar2uF7g8nkvoz2seqnqfGI9Tg+6XwpUvrXsyj3PU2tp9iFyHRu1dV3U/sKxZqZdUzZ4K2121fxCs1npm1q18m4aD0rR1S+pVcFJl1qvoa7qU6aAY1w2XV6fM3TrRQc2XkpaIlW3dWBvbN2XUys7PV9Cd6QndJQEOiNPU2kUe7uX/bb9XL+sALk23VrHxOCyOzKknC6LRHNdGoMlUuqBIaNI3xnQjmozoTIq1PUc//AFIGrED+JnaxTZhksBjluednyHXlseZnZajmyWlmY7OQMK1xnTRnLRm9WYrUdVWapycysWrGca1q2ZWsDsZtjDTbIsxNkNmpyloZky2yWjpOWLWbFBoEG/qzrNKXB9Jix+nVVXZHz9VFk/ifSVcqfExY1DgpMS0ZST6mVDR53MpFpPSaPP5lpceBmrHImNMiQbJFqt0C3mVrE7ztGK6d4bzm3hvKjo3hvOXeHqAdSuWrnGshrW5R11tJomc9Wa1YG0jIWpQBIIQAUAhoBWMbmtjC4HPkOa505DmuEZkspksipZLKEZqkAAQAAAAUhQNAaVLJqWZQoBoYEEwVAwARDLEwMrI0x61IsPGOvTt+q50b0JZViTD01ICArBo97hV240eFVSz6GiiiXwMdp16U2BIHJzeISymS2fQcCCRSKRpipDcRILV6E0xU9ka1pGrClFX5lGkMQSAAIBMAENkhTAQMBSOSZCSCpAmRyAxIUgtXC1b7APqb8fi2zeb7aLrdm2HjVrdVzff12fBfzfwMubyLZLvG/tq4hGPttyDp4vIpXIsWFRVzNrfdZ9vocnPTWa06zDXyNeBjas8r0SUV+Mle41mtbrqnH4/5mNk6Pk+NWnGT9Wyre0eV9kLmr1aJ11afb4nn0x2v9vTu+34lPL6ddlHPx7fQWed+TPOotTZ9/wCC6mbtPyFZzq+ojShDQh9ShrU6cGOfM+gsHHd/Nb7Tsajob5iWit7V+1wejxvc70W26lHmDTg3ZKzr2bc22Xpog2b/ALjhw3O/GznZjYXGp4fmarBX4/iyqloyM/Qp8fxYPCn4/iagRWKxRorM0o7ViXKRQmBlapz3qdVjC5YjBkNlXsYOx0iOmljatjjrY1rcDq3D3HNvK3kxWtrnPewWuY5LlRjmsefmcnXkscORmaMGAAZVpVmlWYJwWrExddNWXuOZM0VjU5TWrsS2Q7CdjU4TTbJDcTJucs6okaUlJHScs2ogINYCDWM6xPY4GdZKbH9yPLaFWzo5q4ZjrnWpX0ldSzysXuOnn6lX9yleRHmsx1135sqx1lnkXyO7lkWy2yObOS1WTFaiIEzfYRapFc7RDRs6kbTUrOM2iWjWCWjWmMmItoTQ1MSpNqMxg0roWUddGbVZzUZvQ2joqURUtFDAYiAATABWMLmtmY3ZRz3OexvZmFiIhksshoikIYiVSAYEwIBgMANAAF1cGiZki0ZwUApExgqQIKQwMljIZMEtjxvUll4cbvdVr1ZbPDXNyyrsZm2Srq3V9UZScnsrMYAVhphrvukfQJQoPF4Fd2VHts5d+2ekMBNgYYeISymSz31xSyWUyTIR0Y6bFL6sjBTc9z6I3bNSJSAUibNIAkUhIVUikQgGIBNkBIpFIpkByDEh/MgBTATOiOj0aYNc+r7Y6vX6sluDPDgvmfl+tuxvbLXjeXFFr98j7fI34md3q29EmlWq6JHmqvmdbOIblsxu3L8Dq4M+o7/DV/EXOSWXc9U0p+mg6crHjWytXHiacmiy1VnZJLu/iZ2zrfgcr5eXs9q8K6I6XyfJGda/y+P8Dl9auPTEtf531+ngYNzqayVV5czyaPSv8q6GTYxM0EAF1xtgSk30O/j8P9WT/iLBRU6dTqqzc5TV2UGNjS1jJuTcZpAAFRrjtDPQxX0PMq4Z14rGOo1HpVsaSc1LGyZzaabhyZyLcBo2S7EuxDsBTsYXZdrHPkuWDHLaDm3jy3MHY6RmulXK9Q494nlA9BZC/UPNWY1rlkiuu1zG9id5LYEXZyZDptqYWRmjngRq6kuplUSUggqqNSItDkQ0duYxaBFCNskAABoikiKmiNRKoAA0yloho1IaM1YiCqoILqjz9x2jTHU6EoM6GiPPXSGS0WkPaRXPapm0dFqmdkRWTRDRo0Jl0xk0SzRozsEQ9B1EwRuMt6HTQ5KM6cbOkZdVTVGVDVFDEMTAlibBkFCszC7NLMxuwjK5gzWxkwEKBgQS0KCxQRUwKDSAgDOAguAgCYKgcAAhocCJgJGAhgAABgJExiGBNHoe0Yd2V3fSqPPPf9pxbMW7vY5/suctc+a8/n025rHEen7lrkfyPOaOU9PbPUYsCmiTTL0PbKzZvwPUsef7ZEPxPQscevbn17QwEwMsvDEAHuriTJZQ8amyIOitdtUhMbZLZtEsQNiAYCCQGKQEwCRSAiAYQAVrbI9tVLIolIumJ3W+720/m/gu5WymHW/mv/L2IdrciyT6L8EjP2/+Dru1xse7EmnaNX1OKlLZX+1s6+S92N/A4qq1/LWWvyM8+kj08SrSqrWNPBnFlxXtkttTfczo1iczNl2r/EV81r6N6eC6EksuimqY+vnt4fp/zM73d3L+i7EgdFABJMgUTHcYwKSRdXBmn2KNRHTjcHRVnHVnTSxuIuzJkL9RI0hjAAgOjEznR0YkSrHdjZumc+M6Ecq2ZLKgHUgzbIdi7IyZQWsc2SxpdnNkZqIwu5MbM0sZs2yzszOzNLGVjNU6s2qzCpvUitkyiamiQENGbqdDRDrIHM6E7Dq2C2Ac20NsG7oS6wWIxgaKaJO0YoEAFQAAGPs1iqmqMqmqR0lZsUAAbYBLKEyUhJFpwT8Ro4du0b0cmtUYVN6M81dGiGydxLsZUWM7IsmyI0xYoKsiZIqWjKyNmZWLErJojoVZmbZuM1tWx1Y2cNGdeNnWMO2jNkc9GbJlGkkthJFmBLZDY7MizKhWZjZltmbAzsZM0ZmwEAAQAAAAAAAAAAEhIAASAAAAAAAAAAAAAVrusqrufVYcfp0VfBHie18b1b730qe+zy/uvnHXiPF9xq3l+h5t266Hse51iLfQ8Sz1M8+nrl/1iXZsFqxDTg2y9b2+qVWzsseV7fn8+zsenY49Ty5XzSYEWYGUeKJjEz3OILxfd9DNgnBB0shslz2ZEtdzWotiJ3MW8aLAjeG8aLklkzJXUiiQkXQ6eNxlkdXk6WnavGOv0/aS3EY48W9b7vbRd/4G2DLvttottK6x4/PxZHJdsmV06KulV0SRePNjp5KJv/UYu2DDkf8AY34hXLeIp5V/juVntTdK8z/I57XdupZ6VvbkOIer/IxtktbRvTwJGXJAhiEyimyZAAAAAABAADZaIKq5LBpVnTRnKjpxs3Ga0v2BDsugkaRQCGVDR04kcp1YWZrUd2OpuqmWI6ao5VokhupQEVjaphap1WRnZFRyXqcWVQeldHDlqbiVxszZrdQZ2NssrGdjWyM2jNVNTeplVG1ERWtUbVRnU2qUOBbS0ggCNobTSAgDB0M3U6WjKyLErnsjJm9jCx0jNSAAWoAAaOXppdUa1RFTVI3KlIRTRJ1lc7AAAaQxpAhnn7deTKrYkmTzV1bbgTM1YuQq5E7EuxMkDepmzQixlpLZjY1ZlYsKxsyGVYg3GKqrOnHY5EzfGzcZd9LGysclLGysaG+4mzJkTZQmyGwbIkIGQymyLARYzZbIYCAAIAAAAAAAAAAAAAAAAAAAAAAAAEB2e3YfVzKV5V1M25NWTXq+2YPSxS+ttTuDRKES2eHq7dd48H3LNb1dr6I8y1m2eh7w/wCojjw4Z81uh34njUvd/qydWtWQzfLk3uF0QY+PbI1Hc6eIx5quHdUumz2t8qTmxe1Outjqvh9Oszoce5vpqeGVmBlawHJp5ohig9riQDEyClbT4ClMqnRozaAGGpIAORxJISBokEQTuZdP6jVV1ehRrx8abeS6/p0h2+L7I14LeTkp2/1dPj2R2cz2/wBDC/SnbpZ/GO/z+B5izPGqOn3Vbs7fM579pcT215uG1syVVLukzmtZY5rjcvvb+Hw/adfL5lr0VFo2pvHx7HCkXn15J68phgWyGaUhAAAAAQAAAAAAUA0IYAhrRgEAWjoxHPXU1xs3EdduhKNKrdWDM2yYABUB14TkOnEyVY9HGzpqzix2OitjlW3QmBmmOTKixnZlsysVGd2cuRHRY58hqDjujGx0ZDnsdGGTIZq0ZslUqm1DJG9EQbUNqmdEbVQDApIRVCExiYEWMbM0szGzCM7mFjWzMmbjNIAA2yC0tSDSpz6ajSpaJRRmNU3qSyiTrzWKQAxSdHNRZnJSOPcdeTbIZTJaPPY6ImC1eURZEpwMGm4qrMtw1Ylhrd2IdiGzN2M41rR2M7MncRZiQ1NmQNiNsmjSjM4KqUdVGb1sctWbVZpG+4TZmmElRTZIhooTJZcCaAysZs1ZnZEEgAAAAAAAAAAAAAAAAAAAgGIAAD0Pb+C8z33+xGbZJtWTVcDgPJ/UyLyntYsVca8qgraq1hdATlHj77vVdpMDcEWtI3YxuzDTx/d15lY4L5d6VK9D1uferpFjzsda11Z24vg54+1XxeMra26nr8bDTj19W+nzObjVeVqtUo8SfdM1vUrhXRam55p3nPjkcvkZOXbbXSpiuPXH+uH8zocYcc/qZw1W9tszbbfHo543zW9nAGScJgYz4M845gAD1OBCGIiqp1JsOrhhYIzAAAAAAAYhgdODmZsH/XZx/K9UXbLhvT1NqrlT+2v22+MdjkFYmAbbcvqNMQIoZLQxwBmIt1JgBAMRFAAAQAAFDGIYDCAGUFTWpka11hliOvDbsO622YsK2ue5rnr0aNxGQCGaZM2xuDAurJVd+NnTVnFiZ2UZzrbVMciQGQ5M7MpoiwGdjmyG92c2RmojnyGLNLmbOjKGZ2NGZsiip0UOep00RBvVG1UZ0NqoKBMuCWUQTZjZDAizMLM0szCzIIsyBtiNxmgAA2wC6sgacEqxsmXJimWmc8bXJLYCaN8s0SAgOrBplpmRSZmzVlaiYSM5XlvUNGbN9pLqZxdYAaOpDqTFJskqAgmLqGTYtoiyJhrMRbRJADQoGBrVmtWYI1qzURqmMlFpGkCLSBVNEiiGiGjdohogwsjKxvZGFwIAAAAAAAAAAAAAAAAAAAAFICIOnhcf+4yKvZdT6atVRKteiPL9nxxR38T1Dyft625+HbmeDMd8ODSzhSee7NuUcm3Taxla0ker2sRa09Aji9xU1TPOpLPS5etTiqjtz6dOJ8t8Ge/Htuq/oRfO+RyN76shtkYP+1Sah+yR6PItvyVp2JyVrTKq9hUyL11JnztMrb69iSeGLcxXIrpvr0AyVnau2egF+WGTq0Q9DryUOayOzmgAZLZA09S7ozNHqkIMxDYgAAAAGIYAh26CKiUBA0IAGORAgGJpMYGsRm1AjRqVJmzNigBDIAAAoYyZKAYxDKA0wtK0PuvzMwmNUVHfQ6beaj/E46Wlbl3OvGzaOcZWZbH8DL1I7FRZVepnvqXSynRgdmI66HLiOyiOdaa1LSFVGiMqh1M7VN2RZAcl0cmRHfdHJkRqI4rmTNroxZ0ZQ+pmzRmbIp0OrGctDqxkHRQ2SM6I2qFMho0gTQGFkZWOiyMbIDmsY2Om1TC9QMWI0gTqajNQA2hHRkDgRVRSKRaEi0jnWxAFQBJRmyTRmbOsrNhSUiRo0w1RaM0aJma1FITQJ/4/x/j97k51pm0TBqyTDTN1Jg1gIAx2kupvAbQOV1JdTqdSHUg59oQa7CtgGSRrVDVTWtShVqa1qVWppWpQlWCoL2jgozdSLI2aMrkHPc57nRc57lRAABAAAAAAAAAAAAAAAgEQMXwAUhX1PEx+nirX4G8mPFyLJjrZeBeS6opZ4L7d4y5GTbWDg3FZcvqP4Ge1oC90kNwEiYGWbWhzOvlVkdWT7WjDEt1HXwOvPp15uRlVp2SfSTq5WBYslbrozjVddT0sk5cG2JdTUZ/Z8V517RkmvVHZyLb0rWWpz8fHFt1hcnkO947IrnfNjJIDo9L+mr+IGflHTlqcWSp6Wap5+ZHZhysQ2IgDRfajMuutfqWCGIYggABgIYAAFVJKqUKyhkmuauifiZEoYIBlAAAaQImyKE0SjMAAyoAAAcDkEEAMZI5KGAABrhvte19GdmO0HnHVhvuXxRuX4Zrty1310OBo7PU6JnLfRsozBMGS2Qb48tqapwd+D3JrTIpXjXr+B5KsPcPY+pwZ8edTjc/t/A3R8nTK6PdVtNd0evxfdU/Ln0f8/wDEzeWteqyLDki1jAyuc2U6Ls5cljUHLc52bZGYs6sIZmzRkMVTodNDlqdNGQddDepz0N6kVoJopCAzaMrVOhohoDltUxtU7LVMrUA43Ulo6LVM2ixGDRLLsiGdIzSLRBaKkaJFpE1NEc60BFEsyqWQyybG5UZjTEwR0jFa1ZZkmWmWpFplmaZcnOxuBkg2JHKtqARSASRW0arJaoBk6kuh0bSWgMNgnU3dZFtAyrQ3pQdaG1alE1qWqlpFQBEBBcEsDOxjY2sY3A57nPY6LnPcqIAAIAAAAAAAAAAAAEACGIigQMQHfwuW8fkb07HTm5Fm/OeON3su8nDvibrpzbfD1qutu5abr8UeTXPrrodePJv+2xxvNjbtW2/zJeNox8xrW9lo0ZGeSso462dbaHfe6ehzWxqllc3zfhvm/DLDaMiPZx1ulKXlfj/E8Pk2i2h63C5dcuLY3qjfryd3WPKw+lLPJS32hd+p7fNh1Vbs8zFFHp1LrjjucbFXsgObNk20gDPnPt/K/wAO/MeZnPSz9DzMx2YcrAGAAaVXk+pkbV+wsRmxFMkBAMAABDAB1ENAa31p8jA6FqmvFHOWhgIYgYABpAAABLUkGpNlJmxUAAiBpl9iATAuAEmUUIYAAFUtstPYkTA7q280vsZXctkq+2i+JKsb1k2yWwbJIokJEAFqxasZAgPU4POeNrHdzXovgeo8h80melx+U7LbbqLB3XucuS5Nspk7yWRNK7kzKEzSM2Qy2QxVFWdFDmqdOMg6sZ0VOehvUitUMSYADE0UICGjN1NiGgOa1TC6OyyMLruVK47GTOi6MLI3GakupBpU0i0WmQi0YrRiKQQYVDEymhQWFRZEGrRDR0lZoQ5J6DOjC0ytxmNmasXMiEi1U41uFJpVEwWjLTWpRCcBIFySxSBQFJCRaAqqNEiEaIBooQwEyGNiAixjc2sY2A57nNc6bnPcqMwACAAAAAAAAAABAAECABBQxAAAADRnqbGublTAojVDcoRyeltTk3p3k3rz46o4gJ9ZWbHoU5tG/MLNmrkUVPOAn1iNLtt66irZ43KCz7oc7l8TS9Xzj2cF8PJpFn5vBmd+Phxp2bh9keTTI8dt1TryXWaqsupmxJPPljlcuQKtWagb3/Vfp/v/AB7etmR5uc9PMeXmNODlYAwARrX7fqZGtft+pYiGSUyQAAAAAAAYIAQG9P3HObp6P5GBaAYASBgAGkAABQAAAZ2UEmrUmbUGbFIAAgZdWQAGgCTkbKE2KQZJBe4ckSOS6KCSWxSNFSEkyEgWBMjkaLTNK2gxTLTNSo665J0ZfTqcasd/D59sHlaV6d6v9xpEEs9jPwcefH6/F7qdv+OjPJso07iXTGVjOxrYyYBU6KHPU6aAdNDdGFDepFaIYkMAAlsaAZDKEwM7IxujdmdkUcl0c9kdd6mF0b5YrCCqiaKRtlaLJqUjFaUhwCKObSIDaUhwFZtGVlB0NEWRvmsVgMraKIOsYoGkJFIUikUiSjlXSGNCHJhpUhJG4e4ChyRI05AtFohI1qgLSLRCKkC5FJIANiAAJsYXNmY3YHPc57m92c9wiBABAwEBQwAAAAEQAAIAAACkHQGIAAAIG1JLRa1RLRxvivVzd5RISDQoKl0wJAM6vqiVowQ2DrzHQ+PNd6MkrY9ex1cOcq2HQ8Up4rdUZ3PB7clbK3TuAlXY4Aj0f9Xr5jzM56mdSeZmR1eJxsB7WG1gSa1+36kbWaVUVLEZMQ2IAHVxrCfzJGAAAAMEA0tQLs/L8zI6L1hJGLqWhAOGEEAAQEG0ABAQAAEBAATZFwKAMQLtR9iDCgYgAqrKZNRt6ASxAADAQAORAAAMQAMckjApFyZpjksouS1aGZyEmtR9L7Dmml6eDVl9f/oelyeHi5K861/mXU8b/wDz6cZbdvKv2n0Emb7V87zPa8mBb6+evwWq+h5b+B9snKOfPwsGfXJRN+PRl+35MfI1N63VdXoj0+T7K093Hcr+Wz6fU4M3tHJrNrV3KP0vp9C6mLwZq5Z29jrpNuh4ODO8M7UtfE9/BNaVrHRfcnuT+Jz67+s/lLcaQ12n5GedUWK9rvSqny27mjtHXT4nn+5uqpVNLc7fcvBHGd9dXGZba4vVe1R5bp/cu/z+XY9Hgcz1cno3W6r6X79O55FVPU7eBlWCuR2bTWx7fgn1/d8mdrHR6zq69VAj0c2NZqK1fCV9TzmjfN0QzOyNoIsjSOa6OeyOu1ZML0Ny4zY5miUbWoRsZvWcOpoiFQtIxa0pDBVHtMKQ0PaG0KRLRptFtLKlYsho3dDN0OkrFjNFJj2htNahjBVHtMWtQSJ2BoW05tFI5kFQtUAEi6oaoaKoUkjRAqjgAHIQNIAkYQKABsUg0S2ArMwuzSxlZAYXZjY2tUytUDIC9jDYQQEl7BbAEIvYLYNEiL2BsGiAL2BsY0QI02C2EGYF7A2AQBexj2ARXqNlbWibPsc+/bv+q+LGbJLZBmNUgHAQVnAigSGiNyNeJleLIo7no8/y7cq+p5LR2X5Ty4dlo0M2b5ZsxXIi0Xr3A58eSce19QGfDe36voMlZOLLiTPQsYWrJ015nnPChegju2C2E0cXoIyz02pHpemcnNrCqal8jzmSNksqAYgAYAADLx13WS8TM7ODTdkXw1A6L4jJ4j0LVMthjRx+mHpHXsD0y6OL0g9I7PTF6ZfsOP0w9M7HQWwfYcnph6Z1+mPYPsOP0x+mdWwNg+w5PTJtx1b4M7tgtg+w8q3HvXtK+AlhvbometsD0yaPOx8az66I2/s6vuztVClQujz3wJ+234mVuFlr0W75HrqpW0uwfPOrq4ahiPoMmCuVRdSebyPb7U1x+ZeHcDhAGoAAAAAAAAGAhgORok242F8jJXFXrZx/ED6b2nD6XGrPXI9/8D092pjVqrivSqhfQVr7U39PqyjbFaat+LZVn5ZMq+Sqr4I0b8rCqnWPEbcGe5N2T7alvWU+hB8l7zx/7fkOPtv51+/8yfb89qNUrN22/Il28V/A7PeK1fMp6suiom48FJ5fD5LxcmuVfza/J9SWbMqWa91ZVdK1PMmeX7i08iqtEl0+LNufzFTkN4q7HVut12tD6/gRzLes/Vjqk0c+eMusznK48fl8zWvQ25eVVVVj0qq7Nernq39TCrhz3YZnur8Tq0+g9m5jyYGruXTT6dv4HVlvhdtU3Z+B837Tn9PNsfS6j69j2FSXNup57L9/rPXsXaJcdCWihM9MoxakztU3aJaL9kcroTsOl1FtH2TGCoVsNto9pPsrFVKSNNo9pNGe0NppA4GjPaG00gcDVYOpLqdEEupqdI53XwFtOjaLaX7JjFVHtNdooJelY7BqhqqjVTOqzVClU0SGkNCVYKgYF0A4ABoBiGNAJjENCZDLEyaMmjOyNmS0NHO6kuh0OobSaObYHpnTtFsGjm2BsOnYGwmjm2C2HVsFsgajm2BtOjYG0arnVA2HRtFsGjn2BsOnaLYNHPtDYdGwNg0c+wNh0+mHpjRzbDHNSNTv2GHJp5J+JLda4uVwMRTQoI9FhQMpIIC4kBgQA0IYU1oAAFfT2IaKbFJp40QG0pgRE7Ti9xr5KvwZ3HLz1OF/BoT2PEsQXYhnQAAAAMQwGep7XT7rfJHmI9zhU2Ya+L1JfQ3akWwsDmM9iB0NAAy2C9M1gIAy9MPTNYCAMfTDYbQEAY7A2GsBAGWwWw2gIAy2BsNYFAGexFKpcDAhVK2jGAtotpY4KOXNw8WZeZa+K6nnZvab11xtW+D0Z7cBBdHy2TDfE4vVp/EzPrLVVlFlK8GceX2zBk6J0f8ApL9lfPgelk9oyL7LK35HJk4mbF99Wl4l1GAABQHu+0YPSq89vusttF8PE83jcdN7snTsvE9iudV81/ogPRVoSq+vVgnL1/T+3/I4ced36fc/yOmt10XRF0b3u1CXVmtrqtX8jlo9z3+OiDJl7FHTh1anvVGy6L5HLhn1HD0SS+p0YrTVGVfOe6Wu+ZlhTGOPlWDycSi9Z0Ur9p2cq982bPlTiJlT1UqsF34+HBxk7y8+RK1V/LXx+oRhzMqy58l10dnHyLpbdRKPtUo4+5qrbXp0QCmH8ws5TXiK71n8CW9AIpZ0srLqnJ9XDslZJw1J8mlJ9Pg5d0ljrpWqiYOXdyywaCBudRGtBAnUYiaFtFtKAmhbRwMC6FtDaMBoW0IGA0KBwADQoFtLAaM9obSxDRECgtiGiYCCgGhQEDAaCAABoegNCAaAYgkmhwApAaBksoBoiJDaWA0Z7R7SwGiNobSwGiNotpoAGe0NpoAGW0NprAiaMtgbTWBQNGe0NppAQNGe0e0sBojaG0sBojaZcik42dBN1NWhqz28NiRVlDgRXrMTGSwoAUhJWdMBDIpgJAB9I2xSxDI8ZSwkBAOWRlxvNS1F/K7fhqUdXAj1Gn3qWex8pbXUg9f3D2jLhs7Yau2Pqo6r4Hk2q6uLKH8TqEAAADEdWDhZ87/p0s/jEL8WBGLG72VV1bPfSjRdEHG9uXCx2y3e7I1t06KfD+ISY6oYCkJMBgEgAAAAMBDkAAQwpQMAAQAAQCGImqYABQxwKRyA4HApCQGApCQABSEgMBSEgZZOLiy/fRP8jmt7ZRa49Pmd0hJdHnW42TGpifijBJt6s9iTPJhpk+5a+I+w41kSWyvTv4s2pbdp27v9y/eY5OO8b0l1+AlkVevbpVG5Ueh6mnxfT4IlTZp+BzY7O7nudSsq6GxrgyOidmjfLyFgwvK/0qfmc+5XrtnQ833fkxRYavr1IPFbbcs2zci2ezvfq/D4HONAWMhMYFMTWgwArh4/VzVq+k/sPo0klCPE9qU5X/tZ7Ry6vnAwEBnVAhiGhgADQDEA0MBANAMQDQDEA0MBDkugEMRNCEUA0SBQhoQimIaEMYQNCCBwA0IRQiaAAAaEMQDQDABoQwAaGIYFAAAAAAAAhiIEAxDQCGIaAQSEk0ABIF0AABNHkcmmzI0ZHbz6dLnDJuPTxdhkMqSWVqkAAVgwEMKYCAivpAgYHPXlKAgYDQoNOPKyVjxINeOpyVjxkvPsehfJVfdp8TN139LJ/M0vEanNbjVtql/xPSG8D8K/8UQ8TX6a/wDFEWwWXR2RDplX63+ARqk10SX/AIo1rNn5mctcd3912zqxcdTLTfzYEc2y21ou7n8Djg6ua1vSXVLU5Th3fKiAgJAxoAgJAaAAABgAAACkcgAxBIDEEikBiCQkgYCkJLoYyZCRooJJkJJochJMhI0VISTISNDkckSORoqQkmQkaKAUhJdDk8T+9re7eRaTpHgezJ8/grSuZVzfbO1nTgenXlY4irJtzEuxeT23HV6Vf0ZxZMuPFNfv/wAeJ1HSuRZ6pwedysm+/jBna7sQEAAAFIZKKApDstB1CyA6faf+5/7Wey9DxPbnt5FZ76HuZFDPN+zx3/zFKRSIXxJouRSIRBYiZAosGyJAC5FJMhIFSEkyAFSEkgBUhJIhouQ3ESA0XISQAFyKSQGhyEiENFSOSAAuQkgYDkJJAaHISTIDRUgmSAFyEkoYDkJJAaK3CkmQkaKkckDGi5HJnIbii5J3EyBNDkUiCQHISIQFCFIAMYkDcdQGAgAz5FN9GjyIPbg8jNTZdr4mua7frvwyEymSzbpSAQFZMBDkBgIAr6SQkAODzAAAKDq4KnJPgjlO/gV8trd24N8TyjptD0mGY2wS5UfRwa3sulkjnv6df1Ovyco9ITpmr9trfkzJ5OUn+l/OpTuu2apDytdck/7UgjSmTkPR1qvkdOObfdaY7I5KZ3ZxFn87JfsOm9rLFZrRx2CvPz2TyWa6SQJDPJbtAAARQAAEAAAUAAAAAAAMQBDEAAAAAUAAAAAIAAAAAAAAAAAAAAAAYAAhgB5/L4FslnfHGvVM7wLLZ6R4mTDylWLbti+Ohxn07Sej6HPh4OPFd5Fq+09jrP2fkeCI+iycXFk+6qZxcj2+qe6sqsdtXP8AAs7lHlANp1cPRiOiHI0SAGtXBrRzaKqW1tXzZgvgdPDbpd5f/wAad/r0X5sBNLFmaq5VXCfyPossXx1yLueJbiXdZrVwlXzf6n1/getwL+tx3TvU4/tnidfgSA4HByVIDWoQFIRUCgAABgIBwAEjGEAIChQAggqBQETAQXA4GCICC4CCiICC4CAIgUFwEARAQXAQBEBBQ0gIgILgTAiAgocDBEDgoAJgBgAoCBgBMCgsQEwMYECgBiKEAwAUAUICQgcAAoHA0MBQJooAJgIKACYPP59Iat4nonNzazjks9tc3K8oTKaJZ0eipEDEac1ASMGmAgCvpgAZ53EgGARNrKqmzhLuehwciti3UaspfQ+e9w5Flb019qSn4mFeXF99F6Vv5sU/nU78c55H1vq1v0ZlbFW3Wqt+TPEfuTbXrxddsuPr9Tsx57WrupZZK/n/AI+Z1RvfjYv9vwvX95VOLXssb+RnXmP7Zh+FjX+rbXZV/RAb0xKvVpfIvk3VMTjvovqZ4ceWdVWq+CJ5+lar4tmerkVwgAHlUAABAAAFAAAAAAAAAAAAAAABIAABIAACkBgAAAAAAIAABiABgIJAYCkYAAAAAKQAYCHIAASEgc3L4q5FdNLLozwbVdXD0aPp5PL9z4//AMtf/I68dfCPLLqty2rr2IHWzq5XVHVBqtDu4vP9CrpaitVvc56z2/AyzpZF6tevc5622uRLo9+/uGR1xYbYnSLUs/kR7fkWHlbX9t5j6nNg9yTSrmU7VCf7W/z+sGeTInffXSHK+Qs2Yr28+yt2qdCDo9bfjrZY91Wuvgc0zqeUMQSKZAEo7z8wCQkKAFINgMCZCQLAmQkCgJkJAoZEjkIoCJHuGiwI3C3F0WBG4NxNFhJnuDcNFyKSZFIFyEkSORoqRSS2El0VISSEk0VISRIAXIpJACpCSAAqQkkAKkJFAQA5CRCAqRSIAHISECAchIggByOSUgAe4JJYQUVIbiRAU7E3iya8QSHAHj3W1tPsZnZzsW229dGcR1nl6Z1sJokpiZpikAAVk5AQEXX08hIoCDzuZyJ2hNvolIQeVyuUr22rWieq7Wg1zztRldrNNsjdbvVSvLH7f3HParr1Onkcl8i+6yS0SSXRJdEYu7rKq9H1R6BnMHRw8qx5E9zp/rWsfNd14nO9RQB9Vxs2HlVdciW+ultvT5r4M2XCotceS1f2Hznt+V48u74QfQU5VH10NI68eG1fuyNnNz0leseB04clcmtNYPJ5/Mf92sKUqKp/Bsx35iqkJADzKJCQAAkAAAkAgYCgChBCAACgAAAAAAQwAAEMAEAwAAAAEADAQDABAMAEMAAAAAEMAAAAAEAwADPNRZKOr8DQQHzIHoe4cZY/6lej6nnnql2ay341ottfRj5WH03K6Mzx2VXMFZcu9R2Jl3Rkl3NqWUQYz2GmaH0/tOa1uM6LV1cKfiScns1/uTe1eJ3ZKKjhOTzde6rMBiMqIAGAAIoQEjgYggAAAAGIAGIAGIJAAAAAQxAAwEMBMQxSAIYpAAGKQAYAKQCBikcgEAANgSAAAAASBSAUhIAApHICGKQkBgKRyAQEBIpAYCTCQABSOQAQmxSBYEyPcBlyab6NHkNHtT4nlZ6bLtHTmuvF+GDExsTOi0gGATCgCkAXH0oCkZ53Jjy3VYrbpiOx4u2Ts53I9R+mulWcavHRuH1R34mREbXJouPkdPUSlP8AETtV9NLfDp/kUuTkV/Vnzty2bRjEAda5VL+XPXd/qro/8eIrcWYeKytPRTr/AJR8SaOaTqwcvLi+22ngzmtV0cWTT+IkVXucPn4abr3dq3U22fpb8EzLicV0s82X73Ljwn955acnscbP6tdeqhMx3bg6BABwUAMQDAQAMZMjkByJsQBAAgCmAgAYAAAAgAYxAAwAQAAAAAAAACABgAAACGAAAAADgQAAAAAAAApAIA4/cE3i06TqeM1B9Jaqsmn0Z4Gamyzr4Hb9d+EZTpACA6oe2FL7iG231EB6ntvmV6+O09FfA5fa8H9K2Tu3ovhU6zzd+6okEEDMqQigAkBgEIBhAVIwCAgbEOAgBAxwEAIBwEAIBwEAIBsQAADgBCKgIAgZUCgCRjgIAQoKgIAkaQ0h7QJAqAgCAKgIAUCgraEASBW0IAkBwEASBSQ4AgY2EAIIK2jgCIAraEAZsCtoQBAFQOAIHBcBAEQcXNx6K/4nfBGTHvq6+JZ4WXLrw2IuydXD7EHd2pDAAyYAAafSHBy+W15MT+dkTyPcJmmNafzHCofzMc8fNcFdNepL16C3QEOdDqJhdGFUp1NVo5XUu2BWW6nh9vcCXg82xvV61a6Mh43S222j8exWPNbE/l2ZpfOsn3Ka+AD5Xrqla5da9VZap/XxOUp9ITal9Ow8t1aIqqv/AE9H9AJk9X2+nkd/Fx+B5dUn3Pc41NuKq+Ev6mO/Q0gIKA4YJCC4CC4IgIKgIJgkYDAUBADAmAgsILgiAguAGCYCCgGCICCoEQEBAyi4JgUFiGCYAYDAoCCoGMEQKDQQwTAQUOBgjaPaUBcEQEFATBIFCAQoKEQIYDAUBAxooW087l8fdlUL7k0emZ5NS+ivmWoYjXPWL2+bMj0RANCNcNd1kl4ge3w3k4+3apW2GdVnubs+rB4cmNedp/FCk85BAhyIypADEFMIAchAkOATCShQEBInYgcCgTsEgOBkyPcA4CBbg3FDgIFuDcABASEgPaEBuE7AOAgncLcBQEqw9wAEC3AmBSQQLcLcBpAEK4by6KgIJ3C3EFMRLsLcBoIh2CQLGyNwbgGxIl2FuA1QMhWBsBsETuFIGsjkx3DVgNREbhOwFsli3EyBYSQmEgWDZEsTA0AhCbA87m49t5Xc5GenzKzXd4HmtHXm+HaeYkQxGkpgIAa3rCQnVvVDx9Trf/d/4mnJxta66eKNKV3OF0It+824v3oC64bulrqs1qvM/CQx22p7Ylo0t9j+T/ac9Or+QHTh9DkeTN5LR5brx/1ePwOW3HtVStVrqvgSvuOun2fiBwurQjoydDBdAjTH4ns4X/Tr8jx6nsYvsr8jn36VpIJkjOIqQ3EgXyHISSMgYCQ0FA5EAQ5CRAUOQbEIeQ5CRAyByEiEFVI5JQwhyEiAocikBEDkJAACQkTBAORySMByKRAA5CRAgCRiGFACGAAAgAYAAEtaFAEfPcpNZbfMwO33D/sOI9M9IDv4OC191q6RpJwH0Xt//wDSr/vZOtzwNauyqqtykDAbPOqU+wwGFIRTEAgDsCAAEwQAxDBBCgY0DAkBoEAgGACAGAAEjYgAQxMACAQwEMF1ABMEMQDENCAQCRQBAmWiWAhDAAEMkBgIaAICBgAxMfYQCgIKEUSIoAEIoSAAgaBABI2JANIBh3AQmMAMs9Zo0eSz2r9H8jx2b5duPVZiKZJ0UAABl//Z"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMzaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzMiA3OS4xNTkyODQsIDIwMTYvMDQvMTktMTM6MTM6NDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ2OEYxRkRDMDBEMTFFNkJFRkJFOTk5OEZFQzJGMDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ2OEYxRkVDMDBEMTFFNkJFRkJFOTk5OEZFQzJGMDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGRDY4RjFGQkMwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGRDY4RjFGQ0MwMEQxMUU2QkVGQkU5OTk4RkVDMkYwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEABALCwsMCxAMDBAX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"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);