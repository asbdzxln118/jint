// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value
 *
 * @path ch15/15.3/15.3.4/15.3.4.4/S15.3.4.4_A5_T4.js
 * @description thisArg is function variable that return this
 */

var f = function(){this.touched= true; return this;};

var retobj = f.call(obj);

//CHECK#1
if (typeof obj !== "undefined") {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

//CHECK#2
if (!(retobj["touched"])) {
  $ERROR('#2: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

var obj;

