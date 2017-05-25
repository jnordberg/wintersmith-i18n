
wintersmith-i18n
================

[i18n](https://github.com/mashpie/i18n-node) plugin for [Wintersmith](https://github.com/jnordberg/wintersmith)


Install
-------

Using wintersmith:

`wintersmith plugin install i18n`

Manually:

`npm install --save wintersmith-i18n`

Then add `wintersmith-i18n` to your plugins list in wintersmith's `config.json`.


Options
-------

Set the locales you want in your `config.json`, like so:

```js
{
    "i18n": {
        "locales": ["en", "it", "sv", "ja"]
    }
}
```

The default directory is `./locales` resolved from your project root.

See <https://github.com/mashpie/i18n-node#list-of-all-configuration-options> for all options.


Usage
-----

The plugin will make the standard i18n functions (`__`, `__n`, etc.) available globally in your templates.

You also must call `setLocale` with the locale you want to use, the method returns the locale or the default locale if no matching locale is found. Which is convenient for doing this:

```html
<html lang="{{ setLocale('sv') }}">
..
<p>{{ __('Do you like turtles?') }}
```

See the `example/` directory for a complete usage example.
