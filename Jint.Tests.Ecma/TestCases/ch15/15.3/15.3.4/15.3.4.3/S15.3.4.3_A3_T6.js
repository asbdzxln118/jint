// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If thisArg is null or undefined, the called function is passed the global object as the this value
 *
 * @path ch15/15.3/15.3.4/15.3.4.3/S15.3.4.3_A3_T6.js
 * @description Argument at apply function is null and it called inside function declaration
 */

function FACTORY(){
  (function(){this.feat="kamon beyba"}).apply(null);
};

var obj = new FACTORY;

//CHECK#1
if (this["feat"] !== "kamon beyba") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

//CHECK#2
if (typeof obj.feat !== "undefined") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

