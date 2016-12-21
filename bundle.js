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


	// $('header').html("It works wohdooo.");
	__webpack_require__(2);

	//include jquery

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
	var update = __webpack_require__(10)(content, {});
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
	exports.push([module.id, "/**********************\nPrefixes\n***********************/\n/**********************\nBorder Radius\n***********************/\n/**********************\nOpacity\n***********************/\n/**********************\ntransition\n***********************/\n/**********************\nTransform\n***********************/\n/**********************\nKeyframes\n***********************/\n/**********************\nAnimation\n***********************/\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 45vh); } }\n\n@-moz-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 45vh); } }\n\n@-ms-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 45vh); } }\n\n@-o-keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 45vh); } }\n\n@keyframes slide-down {\n  0% {\n    opacity: 0;\n    top: calc(50% - 75vh);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    top: calc(50% - 45vh); } }\n\n@-webkit-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-moz-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-ms-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-o-keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@keyframes social-icon-slide-in-right {\n  0% {\n    right: -200px;\n    animation-timing-function: linear; }\n  50% {\n    right: 10px;\n    animation-delay: .5s; }\n  75% {\n    right: 5px; }\n  100% {\n    right: 0px; } }\n\n@-webkit-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px; } }\n\n@-moz-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px; } }\n\n@-ms-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px; } }\n\n@-o-keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px; } }\n\n@keyframes social-icon-slide-up {\n  0% {\n    bottom: -150px;\n    animation-timing-function: linear; }\n  50% {\n    bottom: 30px;\n    animation-delay: .5s; }\n  75% {\n    bottom: 25px; }\n  100% {\n    bottom: 20px; } }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-moz-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-ms-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@-o-keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n@keyframes blow-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.1);\n    animation-timing-function: ease-in; }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  background-color: #f7f7f7; }\n  html a {\n    text-decoration: none; }\n\nbody,\nheader,\n.left-container,\n.right-container,\n.social-icons,\n.download-buttons {\n  display: flex; }\n\nheader,\n.left-container,\n.download-buttons {\n  flex-direction: column;\n  align-items: center; }\n\nbody {\n  margin: 0px;\n  background-color: #f7f7f7;\n  max-width: 1245px;\n  margin: auto; }\n\nheader {\n  justify-content: center;\n  min-height: 100vh;\n  width: 100%;\n  margin: auto;\n  overflow: hidden; }\n  header .left-container {\n    justify-content: center;\n    align-content: space-between;\n    padding: 10px 10px 70px;\n    -webkit-animation: fade-in 1.2s forwards;\n    -khtml-animation: fade-in 1.2s forwards;\n    -moz-animation: fade-in 1.2s forwards;\n    -ms-animation: fade-in 1.2s forwards;\n    -o-animation: fade-in 1.2s forwards;\n    animation: fade-in 1.2s forwards; }\n    header .left-container #logo {\n      width: calc(400px * .50);\n      height: calc(110px * .50);\n      background-image: url(" + __webpack_require__(5) + ");\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n    header .left-container .tagline {\n      max-width: 420px;\n      margin-left: 20px;\n      margin-right: 20px; }\n      header .left-container .tagline h1 {\n        font-size: 1.8em;\n        letter-spacing: 1px;\n        color: #3f96d1;\n        text-align: center;\n        margin-top: 5px;\n        margin-bottom: 10px;\n        text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.2); }\n    header .left-container .learn-more {\n      opacity: 0;\n      width: calc(200px * .5);\n      height: calc(60px * .5);\n      line-height: calc(60px * .5);\n      border: 2px solid #47a9ee;\n      border-radius: 5px;\n      color: #47a9ee;\n      text-decoration: none;\n      text-align: center;\n      font-size: 1em;\n      -webkit-animation: fade-in 0.7s 3s forwards;\n      -khtml-animation: fade-in 0.7s 3s forwards;\n      -moz-animation: fade-in 0.7s 3s forwards;\n      -ms-animation: fade-in 0.7s 3s forwards;\n      -o-animation: fade-in 0.7s 3s forwards;\n      animation: fade-in 0.7s 3s forwards;\n      transition: ease-in .2s; }\n      header .left-container .learn-more:hover {\n        background-color: #47a9ee;\n        color: #fff;\n        border-color: #3f96d1;\n        box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2); }\n  header .right-container {\n    display: none; }\n\n.social-icons {\n  position: absolute;\n  bottom: -150px;\n  left: calc(50% - (220px * .75 / 2));\n  width: calc(220px * .75);\n  flex-direction: row;\n  align-content: space-between;\n  flex: 1;\n  -webkit-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -khtml-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -moz-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -ms-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  -o-animation: social-icon-slide-up 0.6s 0.8s forwards;\n  animation: social-icon-slide-up 0.6s 0.8s forwards; }\n  .social-icons .icon {\n    width: 60px;\n    height: 60px; }\n  .social-icons a {\n    margin: auto; }\n    .social-icons a .icon {\n      width: calc(60px * .75);\n      height: calc(60px * .75);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      border-radius: 100%;\n      box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2);\n      transition: linear .2s; }\n      .social-icons a .icon:hover {\n        transform: scale(1.1); }\n\n.download-buttons {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .download-buttons .button {\n    width: calc(300px * .50);\n    height: calc(85px * .50);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    border-radius: 10px;\n    box-shadow: -3px 4px 5px 0px rgba(0, 0, 0, 0.2);\n    margin: 5px; }\n    .download-buttons .button.ios {\n      background-image: url(" + __webpack_require__(6) + "); }\n    .download-buttons .button.gp {\n      background-image: url(" + __webpack_require__(7) + "); }\n\n/* Landscape */\n@media only screen and (min-device-width: 320px) and (max-device-width: 740px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {\n  header .left-container {\n    padding: 0px; }\n  .social-icons {\n    left: auto;\n    right: 10px !important; } }\n\n@media screen and (max-width: 750px) {\n  header {\n    background-image: url(" + __webpack_require__(8) + ");\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: 100%; } }\n\n@media screen and (min-width: 960px) {\n  html {\n    font-size: 16px; }\n  header {\n    flex-direction: row;\n    flex: 1;\n    padding-left: 20px;\n    padding-right: 60px; }\n    header .left-container {\n      flex-basis: 65%;\n      padding: 0px; }\n      header .left-container #logo {\n        background-image: url(" + __webpack_require__(9) + ");\n        width: 400px;\n        height: 110px; }\n      header .left-container .tagline h1 {\n        color: #47a9ee;\n        font-size: 2.2em; }\n      header .left-container .learn-more {\n        width: 200px;\n        height: 60px;\n        line-height: 60px;\n        font-size: 1.5em; }\n    header .right-container {\n      display: flex;\n      width: 100%;\n      flex-basis: 35%; }\n      header .right-container .iphone-display img {\n        position: absolute;\n        opacity: 0;\n        top: calc(50% - 75vh);\n        right: 0px;\n        -webkit-animation: slide-down 0.6s 0.8s forwards;\n        -khtml-animation: slide-down 0.6s 0.8s forwards;\n        -moz-animation: slide-down 0.6s 0.8s forwards;\n        -ms-animation: slide-down 0.6s 0.8s forwards;\n        -o-animation: slide-down 0.6s 0.8s forwards;\n        animation: slide-down 0.6s 0.8s forwards; }\n  .download-buttons {\n    flex-direction: row;\n    margin-top: 30px;\n    margin-bottom: 30px; }\n    .download-buttons .button {\n      width: calc(300px * .7);\n      height: calc(85px * .7);\n      border-radius: 10px; }\n  .social-icons {\n    flex-direction: column;\n    right: 60px;\n    left: auto;\n    bottom: auto;\n    height: 200px;\n    top: calc(50% - (200px / 2));\n    width: auto; }\n    .social-icons .icon {\n      position: absolute;\n      width: 60px;\n      height: 60px;\n      right: -200px;\n      bottom: auto;\n      -webkit-animation: social-icon-slide-in-right 0.5s forwards;\n      -khtml-animation: social-icon-slide-in-right 0.5s forwards;\n      -moz-animation: social-icon-slide-in-right 0.5s forwards;\n      -ms-animation: social-icon-slide-in-right 0.5s forwards;\n      -o-animation: social-icon-slide-in-right 0.5s forwards;\n      animation: social-icon-slide-in-right 0.5s forwards; }\n      .social-icons .icon.facebook {\n        animation-delay: 1.5s; }\n      .social-icons .icon.twitter {\n        animation-delay: 1.55s; }\n      .social-icons .icon.mail {\n        animation-delay: 1.6s; } }\n\n@media screen and (min-width: 1080px) {\n  header .left-container .tagline {\n    max-width: 100%; }\n    header .left-container .tagline h1 {\n      font-size: 3em; } }\n", ""]);

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

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 10 */
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