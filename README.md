# PageModule

A simple page module that can do basic things like get the window size, position of a specific element and retrieve a parameters object from the url.

## Install

```
$ npm install page-module --save 
```

## Usage

PageModule is an EcmaScript 2015 module. Use it as follows:

```
import Page from 'page-module';

Page.getTopOfWindow();
```

The api contains the following functions:

| Function                          | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| `Page.getParameter(key);`         | (string) Get a specific parameter string from the url  |
| `Page.getParameters();`           | (json) Get all parameters in a `json` object           |
| `Page.getTopOfElement(elem);`     | (number) Get the top position of an element            |
| `Page.getMiddleOfElement(elem);`  | (number) Get the center position of an element         |
| `Page.getBottomOfElement(elem);`  | (number) Get the bottom position of an element         |
| `Page.getTopOfWindow();`          | (number) Get the top position of the window            |
| `Page.getBottomOfWindow();`       | (number) Get the bottom position of the window         |


## Build

```
$npm run-script build
```
