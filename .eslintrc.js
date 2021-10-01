module.exports = {
	root: true,

	env: {
		es6: true,
	},

	parserOptions: {
		sourceType: 'module',
	},

	extends: [
		'plugin:prettier/recommended', // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
		'prettier', // "prettier/react" has been merged into "prettier" in eslint-config-prettier 8.0.0.
	],

	plugins: ['eslint-comments', 'react', 'react-hooks', 'jest'],

	settings: {
		react: {
			version: 'detect',
		},
	},

	overrides: [
		{
			files: ['*.js', '*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint/eslint-plugin'],
			rules: {
				'@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
				'no-unused-vars': 'off',
			},
		},
		{
			files: ['*.{spec,test}.{js,ts,tsx}', '**/__{mocks,tests}__/**/*.{js,ts,tsx}'],
			env: {
				jest: true,
				'jest/globals': true,
			},
		},
	],

	// Map from global var to bool specifying if it can be redefined
	globals: {
		__DEV__: true,
		__dirname: false,
		__fbBatchedBridgeConfig: false,
		AbortController: false,
		alert: false,
		cancelAnimationFrame: false,
		cancelIdleCallback: false,
		clearImmediate: true,
		clearInterval: false,
		clearTimeout: false,
		console: false,
		document: false,
		ErrorUtils: false,
		escape: false,
		Event: false,
		EventTarget: false,
		exports: false,
		fetch: false,
		FileReader: false,
		FormData: false,
		global: false,
		Headers: false,
		Intl: false,
		Map: true,
		module: false,
		navigator: false,
		process: false,
		Promise: true,
		requestAnimationFrame: true,
		requestIdleCallback: true,
		require: false,
		Set: true,
		setImmediate: true,
		setInterval: false,
		setTimeout: false,
		URL: false,
		URLSearchParams: false,
		WebSocket: true,
		window: false,
		XMLHttpRequest: false,
	},
	rules: {
		// General
		'function-paren-newline': [2, 'consistent'],
		'comma-dangle': [1, 'always-multiline'], // allow or disallow trailing commas
		'no-cond-assign': 1, // disallow assignment in conditional expressions
		'no-console': 0, // disallow use of console (off by default in the node environment)
		'no-const-assign': 2, // disallow assignment to const-declared variables
		'no-constant-condition': 0, // disallow use of constant expressions in conditions
		'no-control-regex': 1, // disallow control characters in regular expressions
		'no-debugger': 1, // disallow use of debugger
		'no-dupe-class-members': 2, // Disallow duplicate name in class members
		'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
		'no-empty': 0, // disallow empty statements
		'no-ex-assign': 1, // disallow assigning to the exception in a catch block
		'no-extra-boolean-cast': 1, // disallow double-negation boolean casts in a boolean context
		'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
		'no-extra-semi': 1, // disallow unnecessary semicolons
		'no-func-assign': 1, // disallow overwriting functions written as function declarations
		'no-inner-declarations': 0, // disallow function or variable declarations in nested blocks
		'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor
		'no-negated-in-lhs': 1, // disallow negation of the left operand of an in expression
		'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions
		'no-regex-spaces': 1, // disallow multiple spaces in a regular expression literal
		'no-reserved-keys': 0, // disallow reserved words being used as object literal keys (off by default)
		'no-sparse-arrays': 1, // disallow sparse arrays
		'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
		'use-isnan': 1, // disallow comparisons with the value NaN
		'valid-jsdoc': 0, // Ensure JSDoc comments are valid (off by default)
		'valid-typeof': 1, // Ensure that the results of typeof are compared against a valid string

		// Variables
		// These rules have to do with variable declarations.

		'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		'no-delete-var': 1, // disallow deletion of variables
		'no-label-var': 1, // disallow labels that share a name with a variable
		'no-shadow': 1, // disallow declaration of variables already declared in the outer scope
		'no-shadow-restricted-names': 1, // disallow shadowing of names such as arguments
		'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undefined': 0, // disallow use of undefined variable (off by default)
		'no-undef-init': 1, // disallow use of undefined when initializing variables
		'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}], // disallow declaration of variables that are not used in the code
		'no-use-before-define': 0, // disallow use of variables before they are defined

		// Node.js
		// These rules are specific to JavaScript running on Node.js.

		'handle-callback-err': 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
		'no-mixed-requires': 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
		'no-new-require': 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
		'no-path-concat': 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
		'no-process-exit': 0, // disallow process.exit() (on by default in the node environment)
		'no-restricted-modules': 1, // restrict usage of specified node modules (off by default)
		'no-sync': 0, // disallow use of synchronous methods (off by default)

		// ESLint Comments Plugin
		// The following rules are made available via `eslint-plugin-eslint-comments`
		'eslint-comments/no-aggregating-enable': 1, // disallows eslint-enable comments for multiple eslint-disable comments
		'eslint-comments/no-unlimited-disable': 1, // disallows eslint-disable comments without rule names
		'eslint-comments/no-unused-disable': 1, // disallow disables that don't cover any errors
		'eslint-comments/no-unused-enable': 1, // // disallow enables that don't enable anything or enable rules that weren't disabled

		// Stylistic Issues
		// These rules are purely matters of style and are quite subjective.

		'key-spacing': 0,
		'keyword-spacing': 1, // enforce spacing before and after keywords
		'jsx-quotes': [1, 'prefer-double'], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
		'comma-spacing': 0,
		'no-multi-spaces': 0,
		'brace-style': 0, // enforce one true brace style (off by default)
		camelcase: 0, // require camel case names
		'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
		'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
		'func-names': 0, // require function expressions to have a name (off by default)
		'func-style': 0, // enforces use of function declarations or expressions (off by default)
		'new-cap': 0, // require a capital letter for constructors
		'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
		'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
		'no-array-constructor': 1, // disallow use of the Array constructor
		'no-empty-character-class': 1, // disallow the use of empty character classes in regular expressions
		'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
		'no-new-object': 1, // disallow use of the Object constructor
		'no-spaced-func': 1, // disallow space between function identifier and application
		'no-ternary': 0, // disallow the use of ternary operators (off by default)
		'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
		'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
		'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation
		quotes: [1, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
		'quote-props': 0, // require quotes around object literal property names (off by default)
		semi: 1, // require or disallow use of semicolons instead of ASI
		'sort-vars': 0, // sort variables within the same declaration block (off by default)
		'space-in-brackets': 0, // require or disallow spaces inside brackets (off by default)
		'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
		'space-infix-ops': 1, // require spaces around operators
		'space-unary-ops': [1, {words: true, nonwords: false}], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
		'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
		'one-var': 0, // allow just one var statement per function (off by default)
		'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)

		'max-len': [
			'error',
			{
				code: 300,
			},
		],

		// React Plugin
		// The following rules are made available via `eslint-plugin-react`.

		'react/display-name': 0,
		'react/jsx-boolean-value': 0,
		'react/jsx-no-comment-textnodes': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-sort-props': 0,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-did-mount-set-state': 1,
		'react/no-did-update-set-state': 1,
		'react/no-multi-comp': 0,
		'react/no-string-refs': 1,
		'react/no-unknown-property': 0,
		'react/prop-types': 0,
		'react/self-closing-comp': 1,
		'react/jsx-wrap-multilines': 0,
		'react/jsx-first-prop-new-line': [2, 'multiline'],
		'react/jsx-max-props-per-line': [2, {maximum: 1, when: 'multiline'}],
		'react/jsx-closing-bracket-location': [2, 'tag-aligned'],

		// React-Hooks Plugin
		// The following rules are made available via `eslint-plugin-react-hooks`
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	},
};
