# `eslint-config-goe-common-linting`

> Common ESLint config for go-e front-end projects

## Usage

Add the package to `devDependecies`:

```jsonc
{
	// ...
	"devDependencies": {
		// ...
		"eslint-config-goe-common-linting": "1.0.0",
		// ...
	},
	// ...
}
```

Add the package to `extends` section of your `.eslintrc.js`:

```js
module.exports = {
	extends: [
		'goe-common-linting',
	],
	// ...
}
```

After that you can add to `.eslintrc.js` all the config specific to your project.
