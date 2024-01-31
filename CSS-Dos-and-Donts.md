* Use SASS/SCSS instead of css.
* Declare variables for font-family, background-color, brand-colors, button-bg-color,... etc so that it will be easier to change it, if required or for creating different color themes.
* Make use of mixins for repeating pattern of css code.
* Never mix spaces and tabs for indentation.(Number of characters used per indentation level = 2 spaces.)
* We should not use underscore(`float_right`), uppercase(`FLOAT-RIGHT`) and title case(`floatRight`) for css identifiers. Instead start using hyphens. Why?
   - Technically there is no issue with underscore or camelcase. Its a matter of a convention we follow and more importantly consistency. Also if you notice, CSS is hyphen delimited syntax. camelCase being popular with css community, I find one side fall with this. Example: you cannot use `[class | = "input"]` to match identifier with class name `inputBigBox` but will surely match `input-big-box`. So being readable and consistent we strictly follow hyphenated names.
* Use `'js-'(ie., js-class-name)`, if that class is used in javascript.
* Class names should be meaningful and portray what it does.
* Preferred css class naming convention.
    * `float-right {// css properties}`
* Use [https://github.com/kneath/kss] for generating css styleguide.

[copied over from a similar named document]

- use a framework like bootstrap (we have used bootstrap for all our projects)
- try to customize bootstrap by customizing variables as much as possible.
- checkout [components](http://getbootstrap.com/2.3.2/components.html) and [behaviors](http://getbootstrap.com/2.3.2/javascript.html) supported by bootstrap before writing something of your own.
- try to document components which you write. (components which are not documented as part of framework)
- try to write documentation in [kss format](http://warpspire.com/kss/syntax/) so that documentation can be generated using [kss gem](https://github.com/kneath/kss).
- Remove unused css class from your stylesheet using this javascript-based tool [helium-css](https://github.com/geuis/helium-css) which runs from your browser, and discovers unused CSS across pages on your web site.