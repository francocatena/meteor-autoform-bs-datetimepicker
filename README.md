francocatena:autoform-bs-datetimepicker
=========================

An add-on Meteor package for
[aldeed:autoform](https://github.com/aldeed/meteor-autoform).
Provides a single custom input type, 'bootstrap-datetimepicker',
which renders an input using the
[bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) plugin

## Prerequisites

Bootstrap and the plugin library must be installed separately.

In a Meteor app directory, enter:

```
$ meteor add mizzao:bootstrap-3
$ meteor add tsega:bootstrap3-datetimepicker
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```
$ meteor add francocatena:autoform-bs-datetimepicker
```

## Usage

Specify "bootstrap-datetimepicker" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  date: {
    type: Date,
    autoform: {
      type: 'bootstrap-datetimepicker'
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name='typeTest' type='bootstrap-datetimepicker'}}

{{> afFormGroup name='typeTest' type='bootstrap-datetimepicker'}}

{{> afFieldInput name='typeTest' type='bootstrap-datetimepicker'}}
```

This input type is intended to be used with `type: Date` schema keys, but it also works with other schema types. Here's a list:

* `Date`: Value is stored as a `Date` object
* `String`: Value is stored as a string representation of the selected date in ISO format, e.g., "2014-11-25 10:15".
* `Number`: Value is stored as the result of calling `getTime()` on the `Date` object
* `Array`: If the schema expects an array of `Date` or `String` or `Number`, the value is converted to a one-item array and stored

To provide bootstrap-datetimepicker options, set a `data-date-optionName` as described in [here](http://eonasdan.github.io/bootstrap-datetimepicker/#options)

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request
