# Chosen Dynamic

This is an extension to [Chosen](https://github.com/harvesthq/chosen),
which dynamically creates an option element as you type. It's useful when you 
want to provide a user with several predefined options, but want to also give
them the option to add their own, without needing another input field.

## Usage
```js
$('.my-select').chosen().chosenDynamic({
  debounce: 500
});
```

## API
```js
$.chosenDynamic(options:Object)
```

## Options
```js
{
  // how long to wait before updating the select, default is 500
  debounce: 500
}
```
