##Introduction
  
This version is revised from [original one](https://github.com/AStepaniuk/qunit-parameterize)

Mainly, making Qunit-Parameterized to be compatiable with typescript and Karma. So I removed the 2nd parameter "expect"

And also add a definition file for Qunit-Parameterized

##Usage

```ts
QUnit
	.cases(testCasesList)
	.test(title,  callback);
```

Adding the definition file if needed

``` js

/// <reference path="qunit.parameterize.d.ts" />

```
